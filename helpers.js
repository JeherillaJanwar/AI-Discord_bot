import { getAnswer } from "./mainAI.js";

export async function answer(message, client) {
    var question = message.content.replace(client.user.id, "").replace("<@> ", "").trim();
    getAnswer(question).then(result => {
        if (result && result.trim() !== '') {
            message.reply(result);
        }
        
        if (question === "Who created you?") {
            message.reply("```Ishaan Sharma (askishaan.sh@gmail.com)```\nhttps://jeherillajanwar.github.io/\nhttps://github.com/JeherillaJanwar/\nhttps://g.dev/JeherillaJanwar/ ");
        }
        
        if (question === "What is your name?") {
            message.reply("I don't have a name, **it can change anytime**, but they call me as `dotVision`");
        }
    });
}