import * as Discord from "discord.js";
import * as dotenv from "dotenv";
import { MessageReply } from "./MessageReply";
import * as AutoEmbeds from "./AutoEmbeds/AutoEmbeds";
import * as ReactionReply from './Reactions'
dotenv.config();

const Client = new Discord.Client({
    intents: [3276799],
});

Client.once("ready", async (Client) => {
    console.log(`Client: ${Client.user.tag} is ready`);
    const channelId = "1270330862675820554"; // Example channel ID
    const targetMessageId = "1270351064759013446"; // Example message ID

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
});

Client.on("guildMemberAdd", async (guildMemberAdd) => {
    AutoEmbeds.WelcomeEmbed_VerifyEmbed(guildMemberAdd);
});

Client.on("messageCreate", async (message) => {
    MessageReply(message);
});

Client.on("messageReactionAdd", async (reaction, user) => {
    ReactionReply.reaction([reaction, user])
})
  

Client.login(process.env.TOKEN);
