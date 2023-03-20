function LongestIncreasingSequence(arr) {
    const n = arr.length;
    const lis = new Array(n).fill(1);

    for (let i = 1; i < n; i++) {
        for (let j = 0; j < i; j++) {
            if (arr[ i ] > arr[ j ]) {
                lis[ i ] = Math.max(lis[ i ], lis[ j ] + 1);
            }
        }
    }
    
    return Math.max(...lis);
}

console.log(LongestIncreasingSequence([ 10, 22, 9, 33, 21, 50, 41, 60, 22, 68, 90 ]));
