let luck = 10000000000;
let clone = 1;
const bulk = undefined;

//[[name] [Chance] [roleID]]
const RarityInNestedArray: any[] = [
    [["Common       "], [1, 5          ], ["4372443329"]],
    [["Uncommon     "], [1, 25         ], ["5823491740"]],
    [["Rare         "], [1, 200        ], ["1047385926"]],
    [["Epic         "], [1, 500        ], ["9372640185"]],
    [["Legendary    "], [1, 1000       ], ["6730192854"]],
    [["Mythical     "], [1, 5000       ], ["2395847160"]],
    [["Ancient      "], [1, 10000      ], ["8473291056"]],
    [["Divine       "], [1, 20000      ], ["1938472650"]],

    [["Celestial    "], [1, 50000      ], ["4758392016"]],
    [["Galactic     "], [1, 100000     ], ["9083746152"]],
    [["Fabled       "], [1, 200000     ], ["6730284195"]],
    [["Ethereal     "], [1, 500000     ], ["2047391658"]],
    [["Cosmic       "], [1, 1000000    ], ["3826140975"]],
    [["Quantum      "], [1, 2000000    ], ["1298470365"]],
    [["Supreme      "], [1, 5000000    ], ["5840392176"]],
    [["Divinity     "], [1, 10000000   ], ["7653910482"]],
    [["Phantom      "], [1, 20000000   ], ["9302847561"]],
    [["Aurora       "], [1, 30000000   ], ["4857329016"]],

    [["Nebula       "], [1, 50000000   ], ["6280473195"]],
    [["Stellar      "], [1, 75000000   ], ["2748503916"]],
    [["Eclipse      "], [1, 100000000  ], ["9102837465"]],
    [["Obsidian     "], [1, 150000000  ], ["7362810945"]],
    [["Astral       "], [1, 200000000  ], ["4819305762"]],
    [["Luminous     "], [1, 300000000  ], ["5928371046"]],
    [["Radiant      "], [1, 500000000  ], ["8372104956"]],
    [["Transcendent "], [1, 750000000  ], ["9057382164"]],
    [["Eternal      "], [1, 1000000000 ], ["6381720495"]],
    [["Primordial   "], [1, 1500000000 ], ["3847192056"]],

    [["Omniscient   "], [1, 2000000000 ], ["2948173560"]],
    [["Absolute     "], [1, 3000000000 ], ["6102839475"]],
    [["Legend       "], [1, 5000000000 ], ["4759382106"]],
    [["Titanic      "], [1, 7500000000 ], ["2039485176"]],
    [["Mythos       "], [1, 10000000000], ["6174039285"]],
    [["Supremacy    "], [1, 15000000000], ["4857329106"]],
    [["Eclipse Prime"], [1, 20000000000], ["7293481056"]],
    [["Omega        "], [1, 30000000000], ["5738204196"]],
    [["Infinity     "], [1, 50000000000], ["8492017365"]],

    
];



let padding = (maxLength: number, Index: number) => {
    let paddedNumber = Index.toString().padStart(maxLength, " ")
    return paddedNumber
}




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

    let maxLengthForIndex = 0;
    let maxLengthForModifiedIndex = 0;
    let maxLengthForModifiedPercentage = 0

    //maxLengthForIndex
    for (let i = 0; i < RarityInNestedArray.length; i++) {
        let length = RarityInNestedArray[i][1][1].toString().length;
        if (length > maxLengthForIndex) {
            maxLengthForIndex = length;
        }
    }

    //maxLengthForModifiedPercentage
    for (let i = 0; i < (Array[i][1][1] / luck).toString().length; i++) {
        let length = (Array[i][1][1] / luck).toString().length;
        if (length > maxLengthForModifiedPercentage) {
            maxLengthForModifiedPercentage = length;
        }
    }



    for (let i = 0; i < newRarityArray.length; i++) {
        cumulativeWeight += newRarityArray[i];
        if (rnd < cumulativeWeight) {
            selectedRarity = Array[i][0][0]; //The Name
            Index = Array[i][1][1];
            
            ModifiedPercentage = (newRarityArray[i] * 100).toExponential(1)
            RawPercentage = (Array[i][1][0] / Array[i][1][1] * 100).toExponential(1)
            ModifiedIndex = Array[i][1][1] / luck
            ModifiedIndex < 1 ? ModifiedIndex = 1 : ""
            break;
        }
    }

    return `Rolled: ${selectedRarity}: ${RawPercentage}% [${padding(maxLengthForModifiedPercentage, ModifiedPercentage)}%] the Chance was 1 in ${padding(maxLengthForIndex, Index)} [1 in ${padding(maxLengthForModifiedIndex, ModifiedIndex)}] with Luck: ${luck}`;
    
};

for (let Rolls = 0; Rolls < 10000; Rolls++) {
    console.error(getRarity(RarityInNestedArray));
}
