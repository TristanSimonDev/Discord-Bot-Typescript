import * as Discord from "discord.js";

export async function reaction(
    [reaction, user]: [
        Discord.MessageReaction | Discord.PartialMessageReaction,
        Discord.User | Discord.PartialUser
    ]
) {
    // Ensure reaction and message are fully fetched if partial
    if (reaction.partial) {
        try {
            await reaction.fetch();
        } catch (error) {
            console.error('Error fetching the reaction:', error);
            return;
        }
    }

    if (reaction.message.partial) {
        try {
            await reaction.message.fetch();
        } catch (error) {
            console.error('Error fetching the message:', error);
            return;
        }
    }

    const channelId = "1270330862675820554"; // Channel ID
    const targetMessageId = "1270351064759013446"; // Message ID to compare

    // Get the channel from the guild
    const channel = reaction.message.guild?.channels.cache.get(channelId) as Discord.TextChannel;

    if (!channel) {
        console.log('Channel not found.');
        return;
    }

    try {
        // Fetch the target message from the channel
        const message = await channel.messages.fetch(targetMessageId);

        // Compare message IDs
        if (reaction.message.id === message.id) {
            console.log("test");
        }
    } catch (error) {
        // Handle cases where the message is not found or other fetch errors
        console.error('Error fetching the target message:', error);
        console.log('The message might have been deleted or is not accessible.');
    }
}
