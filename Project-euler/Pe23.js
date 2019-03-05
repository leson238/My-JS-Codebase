console.time()
let abdArr = []
let notSumAbdArr = []
//Check abundant or not
const isAbd = (n) => {
    let sum = 0;
    for (let i = 1; i <= ~~n/2; i++) {
        if (n % i == 0) sum += i;
    }
    if (sum > n) return true;
    return false;
}
//Computing sum of 28123 integers
const sum28123 = (() => {
    let s = 0
    for (let i = 1; i <= 28123; i++) {
        s += i
    }
    return s
})()
//Computing sum of all numbers that can written as sum of 2 abundant numbers
for (let i = 12; i <= 28111; i++) {
    if (isAbd(i)) abdArr.push(i)
}
let s = new Set()
for (let i = 0; i < abdArr.length; i++) {
    for (let j = i; j < abdArr.length; j++) {
        if (abdArr[i] + abdArr[j] <= 28123) {
            s.add(abdArr[i] + abdArr[j])
        } else break;
    }
}
abdArr = [...s]
const sumAbd = abdArr.reduce((val,acc) => acc + val, 0)
//Result 
console.log(sum28123 - sumAbd)
console.timeEnd()
//1100ms; not really need to improving - ideas : Sieve algorithm