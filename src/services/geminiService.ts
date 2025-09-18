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
    if (!this.apiKey) {
      throw new Error('Gemini API key is required');
    }

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
    let prompt = `Generate ${count} creative and professional business names based on the following information:

`;

    if (fullName.trim()) {
      prompt += `Owner/Founder Name: ${fullName.trim()}
`;
    }

    if (businessDescription.trim()) {
      prompt += `Business Description: ${businessDescription.trim()}
`;
    }

    if (niche) {
      prompt += `Industry/Niche: ${niche}
`;
    }

    prompt += `
Instructions for name generation:
- If a founder name is provided, consider incorporating it creatively (e.g., "John's Tech Solutions", "Smith Innovations", "DoeVentures")
- If business description is provided, extract key concepts and create names that reflect the business purpose
- Combine the founder's name with business concepts when both are available
- Create names that are memorable, brandable, and professional
- Mix different naming approaches:
  * Personal branding (using founder name)
  * Descriptive names (based on what the business does)
  * Abstract/creative names (inspired by the business concept)
  * Compound words that combine relevant terms
- Each name should be 1-4 words maximum
- Names should be suitable for logo design and branding
- Avoid generic or overly common names
- Make names unique and distinctive

Examples of good naming approaches:
- Personal + Business: "Miller's Marketing Hub", "Johnson Digital"
- Concept-based: "Pixel Perfect Studio", "Growth Catalyst"
- Creative combinations: "TechFlow", "BrandCraft", "InnovateLab"

Please provide ONLY the business names, one per line, without numbering, bullets, or additional text.`;

    return prompt;
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