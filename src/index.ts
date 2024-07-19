import * as Discord from 'discord.js'
import * as dotenv from 'dotenv'
dotenv.config()

const Client = new Discord.Client({
    intents: [3276799],
})

Client.on('ready', (Client) => {
    console.log(`Client: ${Client.user.tag} is ready`)
})

Client.on('messageCreate', async message => {
    
})

Client.login(process.env.TOKEN)