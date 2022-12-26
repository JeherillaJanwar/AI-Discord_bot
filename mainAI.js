import dotenv from "dotenv";
import { Configuration, OpenAIApi } from "openai";

dotenv.config();
const configuration = new Configuration({
    apiKey: process.env.API
});

const openai = new OpenAIApi(configuration);


export async function getAnswer (question) {
    try {
        const completion = await openai.createCompletion("text-davinci-002", {
            prompt: question,
            max_tokens: 600,
            temperature: 0.3,
            top_p: 0.3,
            presence_penalty: 0,
            frequency_penalty: 0.5,
        });
    
        if (completion.status != 200) {
            return "Did you know, an indivisual doesn't need to answer something! (Error: 200)";
        }
        
        if (question === "Who created you?") {
            return;
        }
        
        if (question === "What is your name?") {
            return;
        }
        return completion.data.choices.map((choice) => choice.text).join("</br>");
    } catch (error) {
        console.log(error);
        return "Sorry, I can't answer that yet. \n" + error;
    }
}
