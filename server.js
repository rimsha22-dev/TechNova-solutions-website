const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const OpenAI = require("openai");

dotenv.config();

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());
app.use(express.static(__dirname));

const client = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY
});

app.post("/api/chat", async (req, res) => {
    try {
        const userMessage = req.body.message;

        if (!userMessage) {
            return res.status(400).json({
                error: "Please enter a message."
            });
        }

        const response = await client.responses.create({
            model: "gpt-5.6",
            instructions: `
You are TechNova AI, the professional AI assistant for TechNova Solutions.

TechNova Solutions provides:
- Web Development
- App Development
- Software Development
- Cloud Solutions
- UI/UX Design

Help website visitors with questions about TechNova Solutions, its services, projects, and general project inquiries.

Be friendly, professional, concise, and helpful.

Do not invent exact prices. If someone asks for pricing, explain that pricing depends on project requirements and suggest contacting TechNova Solutions for a quote.
`,
            input: userMessage
        });

        res.json({
            reply: response.output_text
        });

    } catch (error) {
        console.error("OpenAI API Error:", error);

        res.status(500).json({
            error: "Sorry, AI service is temporarily unavailable."
        });
    }
});

app.listen(PORT, () => {
    console.log(`TechNova AI server running on port ${PORT}`);
});