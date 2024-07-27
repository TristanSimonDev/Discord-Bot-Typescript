import * as Discord from "discord.js";

export function sendEmbed(
    message: Discord.Message,
    title: string,
    footerText: string,
    footerIcon: string
) {
    const embed = new Discord.EmbedBuilder()
        .setTitle(title)
        .setFooter({ text: footerText, iconURL: footerIcon });

    message.reply({ embeds: [embed] });
}
