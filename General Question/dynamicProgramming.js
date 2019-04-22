let normCal = dynamicCal = 0;
const normalFib = (n) => {
    ++normCal
    return n < 2 ? n : normalFib(n-2) + normalFib(n-1)
}
const dynamicFib = () => {
    let cache = {}
    return function fib(n) {
        ++dynamicCal
        if (cache[n]) {
            return cache[n]
        } else {
            if (n < 2) {
                cache[n] = n 
            } else {
                cache[n] = fib(n-2) + fib(n-1)
            }
            return cache[n]
        }
    }
}
const dp = dynamicFib()
// console.log(normalFib(40))
console.log(dp(40))
console.log(normCal/dynamicCal)