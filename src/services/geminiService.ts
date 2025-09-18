interface GeminiResponse {
  candidates: Array<{
    content: {
      parts: Array<{
        text: string;
      }>;
    };
  }>;
}

export class GeminiService {
  private apiKey: string;
  private baseUrl = 'https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent';

  constructor(apiKey: string) {
    this.apiKey = apiKey;
  }

  async generateBusinessNames(
    fullName: string,
    businessDescription: string,
    niche: string,
    count: number = 20
  ): Promise<string[]> {
    const prompt = this.buildPrompt(fullName, businessDescription, niche, count);

    try {
      const response = await fetch(`${this.baseUrl}?key=${this.apiKey}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          contents: [{
            parts: [{
              text: prompt
            }]
          }],
          generationConfig: {
            temperature: 0.9,
            topK: 40,
            topP: 0.95,
            maxOutputTokens: 1024,
          }
        })
      });

      if (!response.ok) {
        throw new Error(`Gemini API error: ${response.status}`);
      }

      const data: GeminiResponse = await response.json();
      
      if (!data.candidates || data.candidates.length === 0) {
        throw new Error('No suggestions generated');
      }

      const text = data.candidates[0].content.parts[0].text;
      return this.parseBusinessNames(text);
    } catch (error) {
      console.error('Error generating business names:', error);
      throw new Error('Failed to generate business name suggestions');
    }
  }

  private buildPrompt(fullName: string, businessDescription: string, niche: string, count: number): string {
    return `Generate ${count} creative and professional business names based on the following information:

Owner Name: ${fullName || 'Not provided'}
Business Description: ${businessDescription || 'Not provided'}
Industry/Niche: ${niche || 'General business'}

Requirements:
- Names should be memorable, brandable, and professional
- Consider the industry/niche when creating names
- Mix different naming styles: descriptive, abstract, compound words, etc.
- Avoid generic or overly common names
- Each name should be 1-3 words maximum
- Names should be suitable for logo design and branding

Please provide ONLY the business names, one per line, without numbering, bullets, or additional text. Format example:
TechFlow Solutions
Digital Nexus
Innovation Hub
Creative Studio`;
  }

  private parseBusinessNames(text: string): string[] {
    return text
      .split('\n')
      .map(name => name.trim())
      .filter(name => name.length > 0 && !name.match(/^\d+\.?\s/)) // Remove numbered items
      .filter(name => name.length <= 50) // Reasonable length limit
      .slice(0, 25); // Limit to 25 names max
  }
}

// Create a singleton instance
const geminiService = new GeminiService(import.meta.env.VITE_GEMINI_API_KEY || '');
export default geminiService;