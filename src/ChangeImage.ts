import fs from 'fs';
import path from 'path';
import * as Discord from 'discord.js'

// Specify the directory where your images are stored
const imageDirectory = path.join('img', 'gpt');

// Automatically load all image files from the directory into the images array
const images = fs.readdirSync(imageDirectory)
    .map(file => path.join(imageDirectory, file));

console.log(images);  // Outputs the array of image paths to verify

export async function ChangeImage(Client: Discord.Client) {
    let currentindex = 3

    setInterval(async () => {
        try {
            const immagepath = images[currentindex]
            const image = fs.readFileSync(immagepath)

            await Client.user?.setAvatar(image)
            console.log(`Avatar changed to image ${currentindex + 1}`);
            currentindex = (currentindex + 1) % images.length;
        } catch (error) {
            console.error(error)
        }
    },300000)
}