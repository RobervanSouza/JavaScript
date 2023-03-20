function LongestIncreasingSequence(arr) {
    const numero = arr.length;
    const lista = new Array(numero).fill(1);

    for (let index = 1; index < numero; index++) {
        for (let valor = 0; valor < index; valor++) {
            if (arr[ index ] > arr[ valor ]) {
                lista[ index ] = Math.max(lista[ index ], lista[ valor ] + 1);
            }
        }
    }
    
    return Math.max(...lista);
}

console.log(LongestIncreasingSequence([ 10, 22, 9, 33, 21, 50, 41, 60, 22, 68, 90 ]));
