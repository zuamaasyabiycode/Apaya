// AI Generator - Handles AI integration
class AIGenerator {
    constructor() {
        this.apiEndpoint = 'http://localhost:3000/api/generate';
    }

    async generateMotion(prompt, style, duration) {
        try {
            const response = await fetch(this.apiEndpoint, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    prompt,
                    style,
                    duration
                })
            });

            if (!response.ok) {
                throw new Error('Failed to generate motion graphic');
            }

            const data = await response.json();
            return data;
        } catch (error) {
            console.error('AI Generation Error:', error);
            throw error;
        }
    }

    // Alternative: Use Hugging Face Inference API (Free Tier)
    async generateWithHuggingFace(prompt) {
        const HF_API_KEY = 'your_huggingface_api_key_here';
        const model = 'stabilityai/stable-diffusion-xl-base-1.0';

        try {
            const response = await fetch(
                `https://api-inference.huggingface.co/models/${model}`,
                {
                    headers: { Authorization: `Bearer ${HF_API_KEY}` },
                    method: 'POST',
                    body: JSON.stringify({ inputs: prompt }),
                }
            );

            const result = await response.blob();
            return result;
        } catch (error) {
            console.error('Hugging Face Error:', error);
            throw error;
        }
    }

    // Alternative: Use Replicate API (Free Tier)
    async generateWithReplicate(prompt, style) {
        const REPLICATE_API_TOKEN = 'your_replicate_api_token_here';

        try {
            const response = await fetch('https://api.replicate.com/v1/predictions', {
                method: 'POST',
                headers: {
                    'Authorization': `Token ${REPLICATE_API_TOKEN}`,
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    version: 'your_model_version_id',
                    input: {
                        prompt: prompt,
                        style: style
                    }
                })
            });

            const result = await response.json();
            return result;
        } catch (error) {
            console.error('Replicate Error:', error);
            throw error;
        }
    }
}

// Instantiate globally
const aiGenerator = new AIGenerator();