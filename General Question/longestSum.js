const longestSum = (arr) => {
    let prefix = 0
    let prefixSum = arr.map(val => prefix += val)
    let maxLength = 0
    let result = []
    let sum = 0
    for (let i = 0; i < arr.length; ++i) {
        for (let j = arr.length - 1; j > i; --j) {
            if (prefixSum[j] - prefixSum[i] > 0) {
                if (j - i > maxLength) {
                    maxLength = j - i
                    result.push([i,j])
                    sum = prefixSum[j] - prefixSum[i]
                }
            }
        }
    }
    console.log(result, prefixSum)
    return result[result.length-1]
}
longestSum([-1, 4, -2, -5, 6, -8])
//console.log(a)