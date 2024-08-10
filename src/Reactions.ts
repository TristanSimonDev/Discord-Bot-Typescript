import * as Discord from "discord.js";

export async function reaction([reaction, user]: [
    Discord.MessageReaction | Discord.PartialMessageReaction,
    Discord.User | Discord.PartialUser
]) {
    const SelfRoleEmoji = ["🟢", "🟡", "🔥"];
    if (SelfRoleEmoji.includes(reaction.emoji.name as string)) {
        console.log(reaction.emoji.name);
    }
}
