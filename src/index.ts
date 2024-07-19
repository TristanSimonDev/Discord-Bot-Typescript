import * as Discord from 'discord.js'
import * as env from 'dotenv'

const Client = new Discord.Client({
    intents: [3276799]
})

Client.login(process.env.TOKEN)