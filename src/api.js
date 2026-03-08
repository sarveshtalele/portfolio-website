// This file now acts as an interface between our React frontend and our secure Vercel backend.

export const callGemini = async (prompt, systemInstruction = "") => {
    try {
        // Instead of calling Google Gemini directly from the browser (which would expose our API key),
        // we make a standard fetch request to our own Vercel Serverless Function (/api/gemini).
        // Vercel handles routing /api/* requests automatically.

        // NOTE: For local development to work with this structure, we use the relative path '/api/gemini'.
        // Vite needs a proxy configured in vite.config.js to send local '/api' requests to a mock server, 
        // or you can just rely on Vercel CLI (`vercel dev`) to test it locally.

        // To keep it simple for local Vite dev without the Vercel CLI, we will fallback to direct call locally
        // IF the VITE_GEMINI_API_KEY is present, but hit the /api/gemini route in production.
        const isDev = import.meta.env.DEV;
        const localApiKey = import.meta.env.VITE_GEMINI_API_KEY;

        if (isDev && localApiKey) {
            console.log("Using Local Vite config for API.");
            return await callGeminiDirectly(prompt, systemInstruction, localApiKey);
        }

        // --- PRODUCTION BEHAVIOR ---
        const response = await fetch('/api/gemini', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ prompt, systemInstruction })
        });

        const data = await response.json();

        if (!response.ok) {
            console.error("Backend Error:", data.error);
            return data.error || "An error occurred generating the response.";
        }

        return data.result;

    } catch (error) {
        console.error("Fetch Error:", error);
        return "Error communicating with the server.";
    }
};

// Original direct calling logic kept exclusively for local Vite `npm run dev` fallback 
// if you aren't using `vercel dev` locally.
const callGeminiDirectly = async (prompt, systemInstruction, apiKey) => {
    const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${apiKey}`;
    const payload = { contents: [{ parts: [{ text: prompt }] }] };
    if (systemInstruction) payload.systemInstruction = { parts: [{ text: systemInstruction }] };

    const delays = [1000, 2000, 4000, 8000];
    for (let i = 0; i <= 4; i++) {
        try {
            const response = await fetch(url, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(payload)
            });
            if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
            const data = await response.json();
            return data.candidates?.[0]?.content?.parts?.[0]?.text || "Response unavailable.";
        } catch (error) {
            if (i === 4) return "The connection is currently at peace. Please try again later.";
            await new Promise(res => setTimeout(res, delays[i]));
        }
    }
};
