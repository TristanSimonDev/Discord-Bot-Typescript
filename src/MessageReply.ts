import * as Discord from "discord.js";
import * as Settings from "@vscode/Settings.json";
import { settings } from "ts-mixer";
const prefix = Settings.Prefix;
const commands = Settings.Commands;
const channels = Settings.Channels
const Roles = Settings.Roles

function delay(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

export async function MessageReply(message: Discord.Message) {
    if (message.author.bot) return;
    const member = message.guild?.members.cache.get(message.author.id);
    const messagecontent = message.content.toLowerCase();
    const args = messagecontent.split(" ");

    //Help events

    if (messagecontent == prefix.HelpPrefix + commands.help) {
        message.reply("you used the help command");
    }

    //info commands

    if (messagecontent == prefix.InfoPrefix + commands.info) {
        message.reply(`This guild has ${message.guild?.memberCount} members.`);
    }

    //Verify
    if (messagecontent == prefix.VerifyPrefix + commands.verify && message.channelId === channels["Verify-Channel"]) {
        message.react("✅")
        try {
            member?.roles.add(Roles["Verify-Role"])
            await delay(5000)
            message.delete()
            
        } catch (err) {
            console.log("Role Failed")
        }

        
        

    } 
}
