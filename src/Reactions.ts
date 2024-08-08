import * as Discord from 'discord.js'
import * as Settings from '@vscode/Settings.json'

export function reaction(
    [reaction, user]: [Discord.MessageReaction | Discord.PartialMessageReaction, Discord.User | Discord.PartialUser]
    
) {
    console.log("triggerd")
}