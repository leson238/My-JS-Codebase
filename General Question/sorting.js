let arr = [99,4,6,2,1,5,63,87,283,4,0]
//localeCompare() using for special unicode characters

const bubbleSort = (a) => {
    for (let i = 0; i < a.length; ++i) {
        for (let j = 0; j < a.length; ++j) { 
            if (a[i] < a[j]) {
                let tmp = a[i];
                a[i] = a[j];
                a[j] = tmp;   
            }
        }
    }
    return a
}
const selectionSort = (a) => {
    for (let i = 0; i < a.length; ++i) {
        for (let j = i+1; j < a.length; ++j) { 
            if (a[i] > a[j]) {
                let tmp = a[i];
                a[i] = a[j];
                a[j] = tmp;   
            }
        }
    }
    return a
}
const insertionSort = (a) => {
    return a
}

//Merge Sort
const mergeSort = (a) => {
    if (a.length === 1) {
        return a
    }
    //Split array into right and left
    const l = a.length;
    const mid = Math.floor(l/2)
    const left = a.slice(0,mid)
    const right = a.slice(mid)
    console.log(left)
    console.log(right)
    return merge(
        mergeSort(left),
        mergeSort(right)
    )
}
const merge = (left, right) => {
    let result = []
    let leftIdx = 0;
    let rightIdx = 0;
    while (leftIdx < left.length && rightIdx < right.length) {
        if (left[leftIdx] < right[rightIdx]) {
            result.push(left[leftIdx]);
            leftIdx++;
        } else {
            result.push(right[rightIdx]);
            rightIdx++;
        }
    }
    return leftIdx === left.length ? result.concat(right.slice(rightIdx)) : result.concat(left.slice(leftIdx))
}
// console.log(bubbleSort(arr))
// console.log(selectionSort(arr))
// console.log(insertionSort(arr))
console.log(mergeSort(arr))