import * as Discord from "discord.js";
import * as Settings from "@vscode/Settings.json";
import * as AutoEmbed from '@src/AutoEmbeds/AutoEmbeds'
import * as Roll from './rarity'

const prefix = Settings.Prefix;
const commands = Settings.Commands;
const channels = Settings.Channels
const Roles = Settings.Roles

//delay
function delay(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
//function
export async function MessageReply(message: Discord.Message) {

    if (message.author.bot) return;
    const member = message.guild?.members.cache.get(message.author.id) as Discord.GuildMember;
    const messagecontent = message.content.toLowerCase();
    const args = messagecontent.split(" ");

    Roll.RollRarity(message)


    //Help events

    if (messagecontent == prefix.HelpPrefix + commands.help) {
        await message.channel.send(`Here is your Clover emoji: <:CloverGreen:1273876673980534856>`);
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
            AutoEmbed.VerifyLog(member)
            await delay(5000)
            message.delete()
            
        } catch (err) {
            console.log("Role Failed")
        }

        
        

    } 
}
