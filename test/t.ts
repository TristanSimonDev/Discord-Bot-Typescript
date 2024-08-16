let luck = 10;

const RarityTable = [
    [["Common"], [1, 5]],
    [["Epic"], [1, 25]]
];

function getRarity(RarityArray: any[]) {
    // Filter out rarities where NewWeight < 1
    // Initialize variables for calculating weighted random selection
    let TotalWeight = 0;
    let newRarityArray: number[] = [];

    RarityArray.forEach(Rarity => {
        let Weight = Rarity[1][1];
        let NewWeight = Weight / luck;

        if (NewWeight < 1) {
            NewWeight = 1
        }

        let fraction = 1 / NewWeight;
        TotalWeight += fraction;
        newRarityArray.push(fraction);
    });

    // Randomly select a rarity based on the weighted fractions
    let acc = 0;
    let rnd = Math.random() * TotalWeight;
    let selectedRarity: any;

    for (let i = 0; i < newRarityArray.length; i++) {
        acc += newRarityArray[i];
        if (rnd < acc) {
            selectedRarity = RarityTable[i][0][0];
            break;
        }
    }

    return selectedRarity
}

for (let i = 0; i < 100; i++) {
    console.log(`${getRarity(RarityTable)} and ` )
}
 
