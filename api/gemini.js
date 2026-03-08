export default async function handler(request, response) {
    // 1. Only allow POST requests
    if (request.method !== 'POST') {
        return response.status(405).json({ error: 'Method Not Allowed' });
    }

    // 2. Extract the prompt and instructions from the request body sent by our React app
    const { prompt, systemInstruction } = request.body;

    if (!prompt) {
        return response.status(400).json({ error: 'Prompt is required' });
    }

    // 3. SECURE API KEY: This is read securely from Vercel's backend environment variables.
    // It is never exposed to the frontend browser.
    const apiKey = process.env.GEMINI_API_KEY || process.env.VITE_GEMINI_API_KEY;

    if (!apiKey) {
        return response.status(500).json({ error: 'API key is missing in server configuration.' });
    }

    const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash-preview-09-2025:generateContent?key=${apiKey}`;
    const payload = { contents: [{ parts: [{ text: prompt }] }] };
    if (systemInstruction) payload.systemInstruction = { parts: [{ text: systemInstruction }] };

    // 4. Implement retry logic on the server side
    const delays = [1000, 2000, 4000, 8000];
    for (let i = 0; i <= 4; i++) {
        try {
            const gResponse = await fetch(url, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(payload)
            });

            if (!gResponse.ok) throw new Error(`HTTP error! status: ${gResponse.status}`);

            const data = await gResponse.json();
            const generatedText = data.candidates?.[0]?.content?.parts?.[0]?.text || "Response unavailable.";

            // Send the successful result back to the React frontend
            return response.status(200).json({ result: generatedText });

        } catch (error) {
            if (i === 4) {
                return response.status(500).json({ error: 'The connection is currently at peace. Please try again later.' });
            }
            await new Promise(res => setTimeout(res, delays[i]));
        }
    }
}
