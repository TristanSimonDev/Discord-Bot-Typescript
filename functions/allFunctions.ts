
export function delay(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

export function formatLargeNumber(num: number): string {
    const suffixes = ["", "k", "M", "B", "T", "q"];
    let index = 0;

    while (num >= 1000 && suffixes.length - 1) {
        num /= 1000
        index++
    }

    let resultStr = num.toFixed(2).replace(/\.00$/, '').replace(/(\.\d)0$/, '$1');
    return resultStr + suffixes[index];
}

function formatPercentage(value: number): string {
    if (value < 0.0001) {
        return value.toExponential(2) + '%';
    }
    return value.toFixed(6).replace(/\.?0+$/, '') + '%';
}
