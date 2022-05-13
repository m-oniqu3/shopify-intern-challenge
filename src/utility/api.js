const { Configuration, OpenAIApi } = require("openai");

const configuration = new Configuration({
  apiKey: process.env.REACT_APP_OPENAI_API_KEY,
});
export const openai = new OpenAIApi(configuration);

// const response = await openai.createCompletion("text-curie-001", {
//   prompt:
//     "Write a tagline for a football team\n\nBring your game and we'll bring the party!",
//   temperature: 0.7,
//   max_tokens: 100,
//   top_p: 1,
//   frequency_penalty: 0,
//   presence_penalty: 0,
// });
