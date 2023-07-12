require("dotenv").config();
const express = require("express");
const cors = require('cors')
const serveRequest = require("./controllers/openaiController");

const getRec = require("./controllers/gerRec");

const app = express();

const PORT = process.env.PORT || 4000;

app.use(cors())

app.use(express.json())

app.get("/", (req, res) => {
    res.send("API running....");
});

app.post("/openai/generate-response", serveRequest);
app.post("/openai/rec", getRec);


app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));
