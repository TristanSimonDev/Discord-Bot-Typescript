import * as Discord from 'discord.js'
import * as SettingsJSON from '@vscode/Settings.json'
import { disconnect } from 'process';

const roleChannel =  SettingsJSON.Channels['Roll-Channel']

let luck = 100000;
let clone = 1;
const bulk = undefined;



//[[name] [Chance] [roleID] [ID]]

const RarityInNestedArray: any[] = [
    [["Common       "], [1, 5          ], ["4372443329"], [1]],
    [["Uncommon     "], [1, 25         ], ["5823491740"], [2]],
    [["Epic         "], [1, 500        ], ["9372640185"], [3]],
    [["Rare         "], [1, 200        ], ["1047385926"], [4]],
    [["Legendary    "], [1, 1000       ], ["6730192854"], [5]],
    [["Mythical     "], [1, 5000       ], ["2395847160"], [6]],
    [["Ancient      "], [1, 10000      ], ["8473291056"], [7]],
    [["Divine       "], [1, 20000      ], ["1938472650"], [8]],

    [["Galactic     "], [1, 100000     ], ["9083746152"], [9]],
    [["Celestial    "], [1, 50000      ], ["4758392016"], [10]],
    [["Fabled       "], [1, 200000     ], ["6730284195"], [11]],
    [["Ethereal     "], [1, 500000     ], ["2047391658"], [12]],
    [["Cosmic       "], [1, 1000000    ], ["3826140975"], [13]],
    [["Quantum      "], [1, 2000000    ], ["1298470365"], [14]],
    [["Supreme      "], [1, 5000000    ], ["5840392176"], [15]],
    [["Divinity     "], [1, 10000000   ], ["7653910482"], [16]],
    [["Phantom      "], [1, 20000000   ], ["9302847561"], [17]],
    [["Aurora       "], [1, 30000000   ], ["4857329016"], [18]],

    [["Nebula       "], [1, 50000000   ], ["6280473195"], [19]],
    [["Stellar      "], [1, 75000000   ], ["2748503916"], [20]],
    [["Eclipse      "], [1, 100000000  ], ["9102837465"], [21]],
    [["Obsidian     "], [1, 150000000  ], ["7362810945"], [22]],
    [["Astral       "], [1, 200000000  ], ["4819305762"], [23]],
    [["Luminous     "], [1, 300000000  ], ["5928371046"], [24]],
    [["Radiant      "], [1, 500000000  ], ["8372104956"], [25]],
    [["Transcendent "], [1, 750000000  ], ["9057382164"], [26]],
    [["Eternal      "], [1, 1000000000 ], ["6381720495"], [27]],
    [["Primordial   "], [1, 1500000000 ], ["3847192056"], [28]],

    [["Omniscient   "], [1, 2000000000 ], ["2948173560"], [29]],
    [["Absolute     "], [1, 3000000000 ], ["6102839475"], [30]],
    [["Legend       "], [1, 5000000000 ], ["4759382106"], [31]],
    [["Titanic      "], [1, 7500000000 ], ["2039485176"], [32]],
    [["Mythos       "], [1, 10000000000], ["6174039285"], [33]],
    [["Supremacy    "], [1, 15000000000], ["4857329106"], [34]],
    [["Eclipse Prime"], [1, 20000000000], ["7293481056"], [35]],
    [["Omega        "], [1, 30000000000], ["5738204196"], [36]],
    [["Infinity     "], [1, 50000000000], ["8492017365"], [37]],   
];


function formatLargeNumber(num: number): string {
    const suffixes = ["", "k", "M", "B", "T", "q"];
    let index = 0;

    while (num >= 1000 && suffixes.length - 1) {
        num /= 1000
        index++
    }

    let resultStr = num.toFixed(2).replace(/\.00$/, '').replace(/(\.\d)0$/, '$1');
    return resultStr + suffixes[index];
}

export async function RollRarity(Message: Discord.Message | Discord.PartialMessage) {
     
    const getRarity = (Array: any[]) => {
        let newRarityArray: any[] = [];
        let TotalWeight = 0;
    
        
    
        Array.forEach((RarityArray) => {
    
            let Weight: any = RarityArray[1][1];
            let NewWeight = Weight / luck;
    
            if (NewWeight < 1) {
                NewWeight = 1;
            }
    
            let fraction = 1 / NewWeight;
            TotalWeight += fraction;
            newRarityArray.push(fraction);
            
        });
    
        let rnd = Math.random() * TotalWeight;
    
        let cumulativeWeight = 0;
        let selectedRarity: any;
        let Index: any;
        let ModifiedIndex: any;
        let RawPercentage: any;
        let ModifiedPercentage: any;
        let ID: any;
    
        for (let i = 0; i < newRarityArray.length; i++) {
            cumulativeWeight += newRarityArray[i];
            if (rnd < cumulativeWeight) {
                selectedRarity = Array[i][0][0]; //The Name
                Index = Array[i][1][1];
                ID = Array[i][3]
                ModifiedPercentage = (newRarityArray[i] * 100)
                RawPercentage = (Array[i][1][0] / Array[i][1][1] * 100)
                ModifiedIndex = Array[i][1][1] / luck
                ModifiedIndex < 1 ? ModifiedIndex = 1 : ""
                
                break;
            }
        }

        const RollChannel = Message.guild?.channels.cache.get(roleChannel) as Discord.TextChannel

        const Embed = new Discord.EmbedBuilder()
            .setTitle("New Rarity")
            .setDescription(`${Message.author?.globalName} Rolled ${selectedRarity}` +
            `\n\nChance: ${RawPercentage}%` +
            `\nwith Luck ${ModifiedPercentage}%`+ 
            `\n\nValue: 1 in ${formatLargeNumber(Index)}` + 
            `\nwith Luck 1 in ${formatLargeNumber(ModifiedIndex)}` +
            `\n\nLuck: ${formatLargeNumber(luck)}` +
            `\nBulk: ${bulk}` +
            `\n\nID ${ID}/${Array.length}`
            )
        
                
        
        RollChannel.send({ embeds: [Embed] })
    
        return `Rolled: ${selectedRarity} ID ${ID}: ${RawPercentage}% [${ModifiedPercentage}%] the Chance was 1 in ${Index} [1 in ${ModifiedIndex}] with Luck: ${luck}`;
        
    };
    
    for (let Rolls = 0; Rolls < 1; Rolls++) {
        console.error(getRarity(RarityInNestedArray));
    }
    
}