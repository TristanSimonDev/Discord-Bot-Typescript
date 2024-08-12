let luck = 10000000000;
let clone = 1;
const bulk = undefined;

const RareRoles = [
    [["Common"], [1, 10]],          // Very common
    [["Uncommon"], [1, 50]],        // Slightly less common
    [["Rare"], [1, 200]],           // Rare
    [["Epic"], [1, 500]],           // Epic
    [["Legendary"], [1, 1000]],     // Legendary
    [["Mythical"], [1, 5000]],      // Mythical
    [["Ancient"], [1, 10000]],      // Ancient
    [["Divine"], [1, 20000], []],       // Divine
    [["Celestial"], [1, 50000]],    // Celestial
    [["Galactic"], [1, 100000]],    // Galactic
    [["Fabled"], [1, 200000]],      // Fabled
    [["Ethereal"], [1, 500000]],    // Ethereal
    [["Cosmic"], [1, 1000000]],     // Cosmic
    [["Quantum"], [1, 2000000]],    // Quantum
    [["Supreme"], [1, 5000000]],    // Supreme
    [["Divinity"], [1, 10000000]],  // Divinity

    [["Phantom"], [1, 20000000]],  // Phantom
    [["Aurora"], [1, 30000000]],   // Aurora
    [["Nebula"], [1, 50000000]],   // Nebula
    [["Stellar"], [1, 75000000]],  // Stellar
    [["Eclipse"], [1, 100000000]], // Eclipse
    [["Obsidian"], [1, 150000000]],// Obsidian
    [["Astral"], [1, 200000000]],  // Astral
    [["Luminous"], [1, 300000000]],// Luminous
    [["Radiant"], [1, 500000000]], // Radiant
    [["Transcendent"], [1, 750000000]], // Transcendent
    [["Eternal"], [1, 1000000000]], // Eternal

    [["Primordial"], [1, 1500000000]], // Primordial
    [["Omniscient"], [1, 2000000000]], // Omniscient
    [["Absolute"], [1, 3000000000]],    // Absolute
    [["Legend"], [1, 5000000000]],      // Legend
    [["Titanic"], [1, 7500000000]],     // Titanic
    [["Mythos"], [1, 10000000000]],     // Mythos
    [["Supremacy"], [1, 15000000000]],  // Supremacy
    [["Eclipse Prime"], [1, 20000000000]], // Eclipse Prime
    [["Omega"], [1, 30000000000]],      // Omega
    [["Infinity"], [1, 50000000000]],   // Infinity
];

console.log(RareRoles[1][0][1])

const getRarity = () => {
    let newRarityArray: any[] = [];
    let TotalWeight = 0;

    RareRoles.forEach(RarityArray => {
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
    let selectedRarity = null;

    for (let i = 0; i < newRarityArray.length; i++) {
        cumulativeWeight += newRarityArray[i];
        if (rnd < cumulativeWeight) {
            selectedRarity = RareRoles[i][0][0]; // Assuming you want to return the rarity symbol
            break;
        }
    }

    console.log(selectedRarity); // Print or return the result as needed
    return selectedRarity;
}

//for (let Rolls = 1; Rolls < 100; Rolls++) {getRarity();}

