const NArray: any[] = [
    [1000], 
    [1],
    [100023]
];

let maxLength = 0;

// Determine the maximum length of numbers in the array
for (let i = 0; i < NArray.length; i++) {
    let length = NArray[i][0].toString().length;
    if (length > maxLength) {
        maxLength = length;
    }
}

// Format and display the numbers
for (let i = 0; i < NArray.length; i++) {
    let numberStr = NArray[i][0].toString();
    let paddedNumber = numberStr.padStart(maxLength, ' ');

    console.log(`hello ${paddedNumber} hello`);
}