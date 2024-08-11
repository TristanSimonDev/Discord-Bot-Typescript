import * as Discord from "discord.js";
import * as SettingsJSON from "@vscode/Settings.json";

const emojis = Object.values(SettingsJSON.Roles.ReactionRoleEmoji)
export async function Init(Client: Discord.Client) {
    
    const FetchReactionInRolesCH = async ([MessageID, ChannelId]: [string, string]) => { 
        const channel = Client.channels.cache.get(ChannelId) as Discord.TextChannel;
        const message = await channel.messages.fetch(MessageID);

        const reactions = message.reactions.cache;

        reactions.forEach (async reaction => {
            console.log(`Reaction: ${reaction.emoji.name}, CNT ${reaction.count}`)
        });
        for (const emoji of emojis) {
            await message.react(emoji);
        }
    };

    //Run Async
    try  {
        FetchReactionInRolesCH([SettingsJSON.Messages["ReactionRole-Message"], SettingsJSON.Channels["ReactionRole-Channle"]]);
    } catch (error) {
        console.error(error);     
    }
    
    

    /*
    const channel = Client.channels.cache.get(channelId) as Discord.TextChannel;

    if (channel) {
        try {
            // Fetch the target message
            const message = await channel.messages.fetch(targetMessageId);

            // Check for reactions
            const reactions = message.reactions.cache;
            reactions.forEach((reaction) => {
                console.log(`Reaction: ${reaction.emoji.name}, Count: ${reaction.count}`);
            });
        } catch (error) {
            console.error('Error fetching the message:', error);
        }
    }

    */
    
}
