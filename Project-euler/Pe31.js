const sum = (a,b) => a.reduce((acc,val,i) => acc + val * b[i], 0)
let coins = [1,2,5,10,20,50,100,200]
let ncoins = [0,0,0,0,0,0,0,0]
let result = new Set()
for (let i = 0; i < 8; i++) {
    if (sum(coins,ncoins) >= 200) ncoins = [0,0,0,0,0,0,0,0]
    while (sum(coins,ncoins) <= 200) {
        ncoins[i]++
        for (let j = 0; j < i; j++) {
            ncoins[j]++
        }
    }
    result.add(ncoins.join())
}
console.log(result)