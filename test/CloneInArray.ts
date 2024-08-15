let arr = ["1", "1", "2", "4", "2"];

function formatCounts(array: string[]): string {
    // Count occurrences
    const counts = array.reduce((acc, val) => {
        acc[val] = (acc[val] || 0) + 1;
        return acc;
    }, {} as Record<string, number>);

    // Format counts into a string
    const result = Object.entries(counts)
        .map(([key, count]) => `${count}x ${key}`)
        .join(' and ');

    return result;
}

// Print the result
console.log(formatCounts(arr)); // Output: "2x 1 and 1x 2"
