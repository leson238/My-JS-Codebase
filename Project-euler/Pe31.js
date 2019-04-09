const solution = (target) => {
    let coins = [1, 2, 5, 10, 20, 50, 100, 200];
    let table = new Uint32Array(target + 1);
    table[0] = 1;
    for (var i = 0; i < coins.length; i++) {
        for (var j = coins[i]; j <= target; j++) {
            table[j]+= table[j - coins[i]];
        }
    }
    return table[target];
}
console.log(solution(200))