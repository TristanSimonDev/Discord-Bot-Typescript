import * as discord from "discord.js";

export function sendEmbeed(
    message: discord.Message,
    title: string,
    footerText: string,
    footerIcon: string
) {
    message.reply({
        embeds: [
            {
                title: title,
                
                footer: {
                    text: footerText,
                    icon_url: footerIcon
                    
                }
            },
        ],
    });
};
