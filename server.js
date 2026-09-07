const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const OpenAI = require("openai");

dotenv.config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Serve website files
app.use(express.static(__dirname));

// OpenAI client
const client = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY
});

// AI Chat API
app.post("/api/chat", async (req, res) => {
    try {
        const userMessage = req.body.message;

        if (!userMessage) {
            return res.status(400).json({
                error: "Message is required."
            });
        }

        const response = await client.responses.create({
            model: "gpt-5.6",
            instructions: `
You are TechNova AI, the professional AI assistant for TechNova Solutions.

Help website visitors with:
- Web Development
- App Development
- Software Development
- Cloud Solutions
- Website pricing
- Project inquiries

Be friendly, professional and concise.
If a visitor wants to purchase a service, encourage them to contact TechNova Solutions.
Do not invent exact prices if they are not provided.
`,
            input: userMessage
        });

        res.json({
            reply: response.output_text
        });

    } catch (error) {
        console.error("AI Error:", error);

        res.status(500).json({
            error: "Sorry, AI service is temporarily unavailable."
        });
    }
});

// Port
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`TechNova AI server running on port ${PORT}`);
});