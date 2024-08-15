import * as dotenv from 'dotenv'

dotenv.config()

export function LoadAsyncEnv() {
    const Token = process.env.TOKEN
    try {
        return Token
    } catch (error) {
        console.error(error)
    }
}