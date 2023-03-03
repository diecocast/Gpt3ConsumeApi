import { Configuration, OpenAIApi } from "openai";
import converter from 'number-to-words'
export default class GptManager{
    memory = "";
    
    question = async (input) => {
        try {
            const question = input.replace(/\d+/g, (match) => {
                return converter.toWords(match);
            });

            const count = question.length;

            const configuration = new Configuration({
                apiKey: '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',
            });
            const openai = new OpenAIApi(configuration);
    
            async function runCompletion(input, memory) {
                const completion = await openai.createCompletion({
                    model: "text-davinci-003",
                    prompt: `${memory}\n\n${input}`,
                    max_tokens: 3000,
                });
                return completion.data.choices[0].text;
            }
    
            const text = await runCompletion(question, this.memory);
            this.memory += `\n\n${question}\n${text}`;
    
            const memoryArray = this.memory.split("\n\n");
            if (memoryArray.length > 10) {
                memoryArray.shift();
                memoryArray.shift();
            }
            this.memory = memoryArray.join("\n\n");
            return text;
        } catch (error) {
            console.log(error);
            this.memory = ''
            return "No puedo entenderte por favor vulveme a preguntar";
        }
    };
}