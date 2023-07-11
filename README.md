# ChatGPT Documentation: Usage and Interacting with OpenAI APIs

## 1. What is ChatGPT?
ChatGPT is a powerful language model developed by OpenAI. It is built on the GPT-3.5 architecture, which enables it to understand and generate human-like text responses based on the input it receives. It has been trained on a vast amount of diverse data and can be used to generate conversational responses for a wide range of applications.

## 2. Use Cases for ChatGPT
ChatGPT has a broad range of potential uses across various domains. Here are a few examples:

- **Virtual Assistants**: Integrate ChatGPT into your virtual assistant application to provide natural and engaging conversations.
- **Customer Support**: Enhance your customer support systems by using ChatGPT to respond to user queries and provide relevant information.
- **Content Generation**: Generate written content, including articles, product descriptions, or social media posts, using ChatGPT's text generation capabilities.
- **Tutoring and Education**: Create interactive educational platforms that utilize ChatGPT to answer questions and provide explanations.
- **Language Translation**: Utilize ChatGPT to translate text or aid in the translation process.
- **Creative Writing**: Get inspired by using ChatGPT as a writing assistant, helping generate ideas, storylines, or even entire pieces of creative writing.

These are just a few examples, and the possibilities are vast. ChatGPT can be customized to suit specific needs and applications.

## 3. Interacting with OpenAI APIs
To access ChatGPT's capabilities, you can make use of OpenAI's APIs.

### 3.1. OpenAI API Setup
To use the OpenAI API, you'll need an OpenAI account and API key. Follow these steps to get started:

1. Sign up for an OpenAI account at [https://www.openai.com](https://www.openai.com) if you haven't already.
2. Once signed in, navigate to the OpenAI API page and obtain your API key.
3. To install the official Node.js library, run the following command in your Node.js project directory::
   ```
   npm install openai
   ```
4. Import the OpenAI package into your NodeJs project:
   ```nodejs
   import { Configuration, OpenAIApi } from "openai";
   ```

### 3.2. Sending Requests to ChatGPT
With the API set up, you can now send requests to ChatGPT. Here's a basic example to get you started:

* Curl command:
```
curl https://api.openai.com/v1/chat/completions \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer $OPENAI_API_KEY" \
  -d '{
     "model": "gpt-3.5-turbo",
     "messages": [{"role": "user", "content": "Say this is a test!"}],
     "temperature": 0.7
   }'
```

* NodeJs Code:
```
const { Configuration, OpenAIApi } = require("openai");
const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);
const response = await openai.retrieveModel("text-davinci-003");
```

The complete documentation can be found in 
https://platform.openai.com/docs/api-reference

# Getting Started with OpenAI API Server application

## Prerequisites:
For creating OPENAI_API_KEY(i.e OpenAI API Key) follow the steps mentioned the (https://tfthacker.medium.com/how-to-get-your-own-api-key-for-using-openai-chatgpt-in-obsidian-41b7dd71f8d3)

## Environment Configuration:
Set env variables as per below syntax before running the app provided in .env.example file

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
API Server will be running on [http://localhost:4000](http://localhost:4000).\

**Note: the default PORT would be 4000 if not mentioned in .env file**