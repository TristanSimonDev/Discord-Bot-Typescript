import * as Discord from "discord.js";
import * as json from '../../vscode/Settings.json';

const Channels = json.Channels;



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
