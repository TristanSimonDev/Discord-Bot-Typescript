import * as Discord from "discord.js";
import * as SettingsJSON from '@vscode/Settings.json'
import { resolve } from "path";

//Delay Function
function delay(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms))
}

export async function Reaction([reaction, user]: [
    Discord.MessageReaction | Discord.PartialMessageReaction,
    Discord.User | Discord.PartialUser
]) {
    if (reaction.message.author?.bot) return;
    
    const ReactionRoleLogChannel = reaction.message.guild?.channels.cache.get(SettingsJSON.Channels["ReactionRoleLog-Channel"]) as Discord.TextChannel


    const SelfRoleEmoji = Object.values(SettingsJSON.Roles.ReactionRoleEmoji);

    if (SelfRoleEmoji.includes(reaction.emoji.name as string)) {
        console.log(reaction.emoji.name);
        await ReactionRoleLogChannel.send(`User: ${reaction.message.author?.globalName}, with Reaction ${reaction.emoji.name}`)        
    }
}
