import * as Discord from "discord.js";
import * as Settings from "../.vscode/Settings.json";
import { sendEmbed } from "./AutoEmbeds/AutoEmbeeds";
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
        sendEmbed(
            message,
            "test",
            `hello`,
            "https://i.pinimg.com/originals/89/d9/e0/89d9e0f67c361865fe9746c3c3de6b8a.gif"
        );
    }
}
