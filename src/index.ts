import * as Discord from "discord.js";
import * as dotenv from "dotenv";
import { MessageReply } from "./MessageReply";
import * as AutoEmbeds from "./AutoEmbeds/AutoEmbeds";
import * as ReactionReply from "./Reactions";
import * as Init from "@Init/FetchOnStart";
import { ChangeImage } from '@src/ChangeImage'
dotenv.config();

const Client = new Discord.Client({
    intents: [3276799],
});

Client.once("ready", async (Client) => {
    console.log(`Client: ${Client.user.tag} is ready`);
    Init.Init(Client);
    ChangeImage(Client)

});
Client.on("guildMemberAdd", async (guildMemberAdd) => {
    AutoEmbeds.WelcomeEmbed_VerifyEmbed(guildMemberAdd);
});

Client.on("messageCreate", async (message) => {
    MessageReply(message);
});

Client.on("messageReactionAdd", async (reaction, user) => {
    ReactionReply.reaction([reaction, user]);
});

Client.login(process.env.TOKEN);
