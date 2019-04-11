sequenceElement = (a,n) => {
    // This problem cant be solved under O(N) loops. So there is something have to be reduced
    // Easily spot that n in test cases is too big. So the whole input array must be repeated after certain times.
    // Check for that certain times.
    const loop = a => {
        let newA = [...a]
        let loopCount = 0
        do {
            let last = newA.reduce((acc,val) => acc + val) % 10
            newA.shift()
            newA.push(last)
            ++loopCount
        } while(newA.join('') != a.join(''))
        return loopCount
    }

    
    // loopCount: 4686
    // Certain loop times until whole input array repeated for all cases is 4686. 

    //In place modification for memory saving solution
    // if (n < 5) return a[n]
    // for (let i = 0; i < n % 4686 - 4; ++i) {
    //     a.push((a[0] + a[1] + a[2] + a[3] + a[4]) % 10)
    //     a.shift()
    // }
    // return a[4]

    n = n % loop(a)
    for (let i = 4; i < n; ++i) {
        a.push((a[i-4] + a[i-3] + a[i-2] + a[i-1] + a[i]) % 10)
    }
    return a[n]
}
sequenceElement([0,1,2,3,4],523232323)
