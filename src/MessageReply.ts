import * as Discord from "discord.js";
import * as Settings from "../.vscode/Settings.json";
const prefix = Settings.Prefix;
const commands = Settings.Commands;

export function MessageReply(message: Discord.Message) {
    if (message.author.bot) return;
    const messagecontent = message.content;
    const args = messagecontent.split(" ");

    if (args[0] == prefix.HelpPrefix + commands.help && args[1] === "test") {
        message.reply("you used the test command");
    }

    if (messagecontent == prefix.HelpPrefix + commands.help) {
        message.reply("you used the help command");
    }

    
        
}
