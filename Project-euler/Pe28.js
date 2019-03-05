let a = [1]
let n = 2
while (a.length < 1001*2 - 1) {
    let l = a.length
    let base = a[l-1]
    a.push(base + n, base + 2*n, base + 3*n, base + 4*n)
    n += 2
}
console.log(a.reduce((acc,val) => acc + val, 0))