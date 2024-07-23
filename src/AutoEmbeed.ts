import * as discord from "discord.js";

export function sendEmbeed(message: discord.Message) {
    message.reply({
        embeds: [
            {
                title: "hi",
            },
        ],
    });
}
