import * as Discord from "discord.js";
import settings from "@vscode/Settings.json";

const Channels = settings.Channels;

/*
AutoEmbeds
*/

export async function WelcomeEmbed_VerifyEmbed(Member: Discord.GuildMember) {
    let WelcomeChannel = Member.guild.channels.cache.get(Channels["Welcome-Channel"]) as Discord.TextChannel;
    let VerrifyChannel = Member.guild.channels.cache.get(Channels["Verify-Channel"]) as Discord.TextChannel
    const WelcomeEmbed = new Discord.EmbedBuilder()
        .setTitle(`${Member.user.tag} joined
            Member: ${Member.guild.memberCount}`)
            .setThumbnail(Member.displayAvatarURL())
    
    const VerifyEmbed = new Discord.EmbedBuilder()
        .setTitle(`Welcome to the Server ${Member.guild.name}`)
        .setDescription(`Welcuse the command \`$Verify\`
            to get Access to all Channels
            `)
        //.setImage(Member.user.displayAvatarURL({ size: 512 }))
        .setThumbnail(Member.displayAvatarURL())
    
    WelcomeChannel.send({ embeds: [WelcomeEmbed] });
    VerrifyChannel.send({ embeds: [VerifyEmbed]})
}

