import * as Discord from "discord.js";
import * as Settings from "../.vscode/Settings.json";
import { sendEmbeed } from "./AutoEmbeed";
const prefix = Settings.Prefix;
const commands = Settings.Commands;

export function MessageReply(message: Discord.Message) {
    if (message.author.bot) return;
    const messagecontent = message.content;
    const args = messagecontent.split(" ");

    //Help events

    if (messagecontent == prefix.HelpPrefix + commands.help) {
        message.reply("you used the help command");
    }

    //info commands

    if (args[0] == prefix.InfoPrefix + commands.info) {
        message.reply(`This guild has ${message.guild?.memberCount} members.`);
    }

    if (messagecontent == "test") {
        sendEmbeed(message, "test", "this is a footer", "https://github.com/TristanSimonDev/Discord-Bot-Typescript/blob/main/img/gpt.jpg");
    }
}
