// Euler discovered the remarkable quadratic formula:

// n2+n+41
// It turns out that the formula will produce 40 primes for the consecutive integer values 0≤n≤39. However, when n=40,402+40+41=40(40+1)+41 is divisible by 41, and certainly when n=41,412+41+41 is clearly divisible by 41.

// The incredible formula n2−79n+1601 was discovered, which produces 80 primes for the consecutive values 0≤n≤79. The product of the coefficients, −79 and 1601, is −126479.

// Considering quadratics of the form:

// n2+an+b, where |a|<1000 and |b|≤1000

// where |n| is the modulus/absolute value of n
// e.g. |11|=11 and |−4|=4
// Find the product of the coefficients, a and b, for the quadratic expression that produces the maximum number of primes for consecutive values of n, starting with n=0.
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
let a = [0,1,2]
let b = [2]
let r = []
let n = 0
let max = 0
const f = (n,a,b) => n**2 + a*n + b
for (let i = 3; i < 1000; i += 2) {
    if (isPrime(i)) {
        b.push(i)
    }
}
b = b.map(v => -v).concat(b).sort((a,b) => a-b)
a = a.concat(b).sort((a,b) => a-b)
for (i of a) {
    for (j of b) {
        while (true) {
            if (isPrime(f(n,i,j))) {
                n++
            } else {
                if (n > max) {
                    max = n
                    r.push([n,i,j])
                }
                n = 0
                break
            }
        }
    }
}
console.log(r[r.length - 1][1] * r[r.length - 1][2])
console.timeEnd()