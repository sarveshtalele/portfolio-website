export default async function handler(req, res) {
    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method Not Allowed' });
    }

    try {
        const { name, email, message } = req.body;

        if (!name || !email || !message) {
            return res.status(400).json({ error: 'Missing required fields' });
        }

        const EMAILJS_SERVICE_ID = process.env.VITE_EMAILJS_SERVICE_ID || process.env.EMAILJS_SERVICE_ID;
        const EMAILJS_TEMPLATE_ID = process.env.VITE_EMAILJS_TEMPLATE_ID || process.env.EMAILJS_TEMPLATE_ID;
        const EMAILJS_PUBLIC_KEY = process.env.VITE_EMAILJS_PUBLIC_KEY || process.env.EMAILJS_PUBLIC_KEY;
        const EMAILJS_PRIVATE_KEY = process.env.EMAILJS_PRIVATE_KEY; // Optional, adds more security if provided by EmailJS

        if (!EMAILJS_SERVICE_ID || !EMAILJS_TEMPLATE_ID || !EMAILJS_PUBLIC_KEY) {
            console.error("Missing EmailJS environment variables on the server.");
            return res.status(500).json({ error: 'Server configuration error' });
        }

        const payload = {
            service_id: EMAILJS_SERVICE_ID,
            template_id: EMAILJS_TEMPLATE_ID,
            user_id: EMAILJS_PUBLIC_KEY,
            template_params: {
                from_name: name,
                from_email: email,
                message: message
            }
        };

        if (EMAILJS_PRIVATE_KEY) {
            payload.accessToken = EMAILJS_PRIVATE_KEY;
        }

        const response = await fetch('https://api.emailjs.com/api/v1.0/email/send', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(payload)
        });

        if (response.ok) {
            return res.status(200).json({ success: true, message: 'Email sent successfully' });
        } else {
            const errorText = await response.text();
            console.error("EmailJS API Error:", errorText);
            return res.status(response.status).json({ error: 'Failed to send email via provider', details: errorText });
        }

    } catch (error) {
        console.error("Serverless Function Error:", error);
        return res.status(500).json({ error: 'Internal Server Error' });
    }
}
