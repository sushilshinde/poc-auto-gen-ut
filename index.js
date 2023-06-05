require("dotenv").config();
const express = require("express");
const serveRequest = require("./controllers/openaiController");

const app = express();

const PORT = process.env.PORT || 5000;

app.get("/", (req, res) => {
    res.send("API running....");
});

app.get("/openai/generate-response", serveRequest);

app.listen(4000, () => console.log(`Server listening on port ${PORT}`));
