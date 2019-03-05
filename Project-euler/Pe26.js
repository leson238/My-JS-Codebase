// 1/p can have maximum p-1 recurring circle with p is a prime and have 10 as it root modulo. However calculating root modulo is complicated, so just loop over the prime array < 1000 for time and energy saving. Content from oeis.org
console.time()
const isPrime = (n) => {
    if (n < 2) return false;
    if (n == 2) return true;
    if (n > 2) {
        if (n % 2 == 0) return false;
        for (let i = 3; i <= Math.ceil(Math.sqrt(n)); i +=2) {
            if (n % i == 0) return false;
        }
    }
    return true
}
const cycle = (b) => {
    let a = 1;
    let t = 0;
    do {
        a = a*10 % b;
        t++
    } while (a !== 1)
    return t;
}
let p = []
for (let i = 1000; i > 500; i--) {
    if (isPrime(i)) {
        p.push(i)
    }
}
let max = 0;
let c = 0;
for (let i = 0; i < p.length; i++) {
    if (cycle(p[i]) > c) {
        c = cycle(p[i])
        max = p[i]
        if (c == p[i] - 1) break;
    }
}
console.log(max)
console.timeEnd()
