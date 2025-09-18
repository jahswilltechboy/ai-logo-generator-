interface GeminiService {
  generateBusinessNames: (
    fullName: string,
    businessDescription: string,
    niche: string,
    count: number
  ) => Promise<string[]>;
  generateLogo: (
    businessName: string,
    businessDescription: string,
    style: string
  ) => Promise<string>;
}

const geminiService: GeminiService = {
  async generateBusinessNames(
    fullName: string,
    businessDescription: string,
    niche: string,
    count: number = 20
  ): Promise<string[]> {
    const apiKey = import.meta.env.VITE_GEMINI_API_KEY;
    
    if (!apiKey) {
      throw new Error('Gemini API key not found. Please add VITE_GEMINI_API_KEY to your environment variables.');
    }

    try {
      const prompt = `Generate ${count} creative and professional business names based on the following information:
      
${fullName ? `Owner/Founder: ${fullName}` : ''}
Business Description: ${businessDescription}
${niche ? `Industry/Niche: ${niche}` : ''}

Requirements:
- Names should be memorable, brandable, and professional
- Mix of different styles: descriptive, abstract, compound words, and creative combinations
- Avoid generic terms and ensure names are unique
- Consider domain availability potential
- Make them suitable for modern businesses
- Include a variety of lengths (2-4 words max)

Return only the business names, one per line, without numbering or additional text.`;

      const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash-exp:generateContent?key=${apiKey}`, {
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
        const errorData = await response.json().catch(() => ({}));
        throw new Error(`Gemini API error: ${response.status} ${response.statusText}. ${errorData.error?.message || ''}`);
      }

      const data = await response.json();
      
      if (!data.candidates?.[0]?.content?.parts?.[0]?.text) {
        throw new Error('Invalid response format from Gemini API');
      }

      const generatedText = data.candidates[0].content.parts[0].text;
      const names = generatedText
        .split('\n')
        .map((name: string) => name.trim())
        .filter((name: string) => name.length > 0 && !name.match(/^\d+\.?\s*/))
        .slice(0, count);

      if (names.length === 0) {
        throw new Error('No valid business names generated');
      }

      return names;
    } catch (error) {
      console.error('Error generating business names:', error);
      throw error;
    }
  },

  async generateLogo(
    businessName: string,
    businessDescription: string,
    style: string
  ): Promise<string> {
    try {
      const prompt = `Create a professional logo for "${businessName}". Business description: ${businessDescription}. Style: ${style}. Make it clean, modern, and suitable for business use.`;
      
      const response = await fetch('https://api.replicate.com/v1/predictions', {
        method: 'POST',
        headers: {
          'Authorization': `Token ${import.meta.env.VITE_REPLICATE_API_TOKEN}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          version: "fofr/sdxl-niji:9f0c4c0b8d8c5c8c5c8c5c8c5c8c5c8c5c8c5c8c",
          input: {
            prompt: prompt,
            width: 512,
            height: 512,
            num_outputs: 1,
            scheduler: "K_EULER",
            num_inference_steps: 20,
            guidance_scale: 7.5,
          }
        })
      });

      if (!response.ok) {
        throw new Error(`Replicate API error: ${response.status}`);
      }

      const prediction = await response.json();
      
      // Poll for completion
      let result = prediction;
      while (result.status === 'starting' || result.status === 'processing') {
        await new Promise(resolve => setTimeout(resolve, 1000));
        const pollResponse = await fetch(`https://api.replicate.com/v1/predictions/${result.id}`, {
          headers: {
            'Authorization': `Token ${import.meta.env.VITE_REPLICATE_API_TOKEN}`,
          }
        });
        result = await pollResponse.json();
      }

      if (result.status === 'succeeded' && result.output && result.output[0]) {
        return result.output[0];
      } else {
        throw new Error('Logo generation failed');
      }
    } catch (error) {
      console.error('Error generating logo:', error);
      throw error;
    }
  }
};

export default geminiService;