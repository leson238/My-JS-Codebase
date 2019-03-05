console.time()
const sumFifth = (n) => (n+'').split('').map(val => +val).reduce((acc,val) => acc + val ** 5, 0)
let n = 1
while(9**5*n >= 10**n) {
    n++
}
let sum = 0
for (let i = 2; i < 9**5*n; i++) {
    if (i==sumFifth(i)) {
        sum += i
    }
}
console.log(sum)
console.timeEnd();