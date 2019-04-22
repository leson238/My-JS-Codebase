// let c = 0 //base case
// const recursion = () => {
//     ++c
//     if (c > 10) return 'done'
//     return recursion()
// }
// console.log(recursion())

//Factorial 
//For loop
const factorialLoop = (n) => {
    let result = 1
    for (let i = 2; i <= n; ++i) {
       result *= i
    }
    return result
}
console.log(factorialLoop(1))
//Recursive
const factorialRecursive = (n) => {
    if (n === 1) return 1
    return n * factorialRecursive(n-1)
}
console.log(factorialRecursive(1))
//Fibonacci 0,1,1,2,3,5,8,13,21
const fibLoop = (n) => {
    let fib = [0,1]
    for (let i = 2; i <= n; ++i) {
        fib.push(fib[i-1] + fib[i-2])
    }
    return fib[n]
}
console.log(fibLoop(5))//O(2^n) 
const fibRecursive = (n) => {
    if (n < 2) return n
    return fibRecursive(n-1) + fibRecursive(n-2)
}
console.log(fibRecursive(10))

//reverse a string
const reverseLoop = s => s.split('').reverse().join('')
console.log(reverseLoop('yoyo mastery'))
const reverseRecursive = s => s === '' ? s : reverseRecursive(s.substr(1)) + s.charAt(0)
console.log(reverseRecursive('yoyo mastery'))
