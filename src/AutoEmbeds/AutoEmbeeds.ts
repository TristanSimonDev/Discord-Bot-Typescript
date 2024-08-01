import * as Discord from "discord.js";
import settings from '@vscode/Settings.json';


const Channels = settings.Channels;


/*
AutoEmbeds
*/

export function WelcomeEmbed(Member: Discord.GuildMember) {
    let WelcomeChannel = Member.guild.channels.cache.get(Channels["Welcome-Channel"]) as Discord.TextChannel
    const WelcomeEmbed = new Discord.EmbedBuilder().setTitle(
        `Welcome ${Member}`

    
        
    );
    WelcomeChannel.send({embeds: [WelcomeEmbed]})
    
}
