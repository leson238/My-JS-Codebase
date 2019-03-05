//counting amount of digits changing with imitating fibonacci numbers
const fib = (n) => {
    let a = [1,1]
    let tmp = 0
    let c = 0
    for (i = 0; i < n; i++) {
        tmp = a[0]
        a[0] = a[0]+a[1]
        a[1] = tmp
        if (a[0] > 10) {
            a[0] /= 10
            a[1] /= 10
        }
    }
    if (a[0] + a[1] > 10) c++
    return c
}
let n = 0;
let c = 1
console.time()
while (c < 1000) {
    c += fib(n)
    n++
}
console.log(n+2)
console.timeEnd()