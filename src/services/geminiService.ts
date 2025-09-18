interface GeminiResponse {
  candidates: Array<{
    content: {
      parts: Array<{
        text: string;
      }>;
    };
  }>;
}

interface NanoBananaResponse {
  id: string;
  status: string;
  output?: string[];
  error?: string;
}

export class GeminiService {
  private apiKey: string;
  private baseUrl = 'https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash-exp:generateContent';
  private nanoBananaUrl = 'https://api.replicate.com/v1/predictions';

  constructor(apiKey: string) {
    this.apiKey = apiKey;
  }

  async generateLogo(
    businessName: string,
    businessDescription: string,
    style: string = 'modern'
  ): Promise<string> {
    const prompt = `Create a professional logo for "${businessName}". ${businessDescription}. Style: ${style}. Clean, minimalist design suitable for business branding.`;
    
    try {
      const response = await fetch(this.nanoBananaUrl, {
        method: 'POST',
        headers: {
          'Authorization': `Token ${this.apiKey}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          version: "nano-banana-model-version", // This would be the actual model version
          input: {
            prompt: prompt,
            width: 512,
            height: 512,
            num_outputs: 1,
            guidance_scale: 7.5,
            num_inference_steps: 50
          }
        })
      });

      if (!response.ok) {
        throw new Error(`Nano Banana API error: ${response.status}`);
      }

      const prediction: NanoBananaResponse = await response.json();
      
      // Poll for completion
      return await this.pollForCompletion(prediction.id);
    } catch (error) {
      console.error('Error generating logo:', error);
      // Fallback to a placeholder or default logo
      return `https://picsum.photos/seed/${encodeURIComponent(businessName)}/512/512`;
    }
  }

  private async pollForCompletion(predictionId: string): Promise<string> {
    const maxAttempts = 30;
    const pollInterval = 2000; // 2 seconds
    
    for (let attempt = 0; attempt < maxAttempts; attempt++) {
      try {
        const response = await fetch(`${this.nanoBananaUrl}/${predictionId}`, {
          headers: {
            'Authorization': `Token ${this.apiKey}`,
          }
        });
        
        if (!response.ok) {
          throw new Error(`Polling error: ${response.status}`);
        }
        
        const prediction: NanoBananaResponse = await response.json();
        
        if (prediction.status === 'succeeded' && prediction.output && prediction.output.length > 0) {
          return prediction.output[0];
        }
        
        if (prediction.status === 'failed') {
          throw new Error(prediction.error || 'Logo generation failed');
        }
        
        // Wait before next poll
        await new Promise(resolve => setTimeout(resolve, pollInterval));
      } catch (error) {
        console.error(`Polling attempt ${attempt + 1} failed:`, error);
        if (attempt === maxAttempts - 1) {
          throw error;
        }
      }
    }
    
    throw new Error('Logo generation timed out');
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