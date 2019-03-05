function* permute(permutation) {
    var length = permutation.length,
        c = Array(length).fill(0),
        i = 1, 
        k, 
        p;
  
    yield permutation.slice();
    while (i < length) {
        if (c[i] < i) {
            k = i % 2 && c[i];
            p = permutation[i];
            permutation[i] = permutation[k];
            permutation[k] = p;
            ++c[i];
            i = 1;
            yield permutation.slice();
        } else {
            c[i] = 0;
            ++i;
        }
    }
}
console.time();
let permutations = [...permute([0, 1, 2, 3, 4, 5, 6, 7, 8, 9])].sort();
console.log(permutations[999999].join(''));
console.timeEnd();