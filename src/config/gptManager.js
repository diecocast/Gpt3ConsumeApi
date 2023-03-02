import { Configuration, OpenAIApi } from "openai";

export default class GptManager{
    question = async () => {
        const configuration = new Configuration({
            apiKey: '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',
          });
          const openai = new OpenAIApi(configuration);
          
          async function runCompletion () {
          const completion = await openai.createCompletion({
            model: "text-davinci-003",
            prompt: "Creame un texto que hale de perros",
          });
          console.log(completion.data.choices[0].text);
          return completion.data.choices[0].text
          }
          const text = await runCompletion ()
          return text
}
}