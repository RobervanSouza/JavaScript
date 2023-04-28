
function compareTriplets(a, b) {
    let bob = 0;
    let alice = 0;
for (var i = 0; i < a.length; i++) {
    if (a[i] > b[i]) {
     alice++;
} else if (a[i] < b[i]) {
    bob++;
} 
}
return [alice, bob,]
}
console.log(compareTriplets([ 17, 28, 30 ], [ 17, 16, 8 ]))