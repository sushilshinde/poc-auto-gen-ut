const { Configuration, OpenAIApi } = require("openai");

const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

async function serveRequest(req, res) {
    if (!configuration.apiKey) {
        res.status(500).json({
            error: {
                message:
                    "OpenAI API key not configured, please generate the key!",
            },
        });
        return;
    }

    const code = req.body?.code || "";
    if (code.trim().length === 0) {
        res.status(400).json({
            error: {
                message: "Please enter a valid code",
            },
        });
        return;
    }

    try {
        const completion = await openai.createChatCompletion({
            model: "gpt-3.5-turbo",
            messages: [
                {
                    content: generatePrompt(code),
                    role: "user",
                },
            ],
            temperature: 0
        });
        res.status(200).send(JSON.stringify(completion.data.choices[0].message.content));
    } catch (error) {
        // Consider adjusting the error handling logic for your use case
        if (error.response) {
            console.error(error.response.status, error.response.data);
            res.status(error.response.status).json(error.response.data);
        } else {
            console.error(`Error with OpenAI API request: ${error.message}`);
            res.status(500).json({
                error: {
                    message: "An error occurred during your request.",
                },
            });
        }
    }
}

function generatePrompt(code) {
    return `generate unit test case file using mocha and chai for the javacript code delimited by "<>" with required testing library import statements assuming all the test library packages are installed. Return response format in javascript code
    <${code}>
    `
}

module.exports = serveRequest;
