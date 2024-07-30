import * as Discord from 'discord.js';

/*
AutoEmbeds
*/


export function sendEmbed(
    message: Discord.Message,
    title: string,
    description: string,
    footerText: string,
    footerIcon: string
) {
    try {
        const embed = new Discord.EmbedBuilder()
            .setTitle(title)
            .setDescription(description)
            .setFooter({ text: footerText, iconURL: footerIcon });

        message.reply({ embeds: [embed] });
    } catch (error) {
        console.error('Error sending embed:', error);
    }
}
