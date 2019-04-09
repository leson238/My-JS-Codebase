//Give an array, return the total sum of the concatenation of each element with all elements in the array
//For example: [10,2] => [1010,102,210,22] => 1010 + 102 + 210 + 22 = 1344
const inputArray = [10,2]

//Naive solution - Use nested for loops. Terrible solution with O(n^2) but work for all cases
const stringConcatenation1 = (arr) => {
    let sum = 0;
    //convert array to string for string concatenation
    arr = arr.map(val => val + '')
    for (let i = 0; i < arr.length; ++i) {
        for (let j = 0; j < arr.length; ++j) {
            sum += +(arr[i] + arr[j]) // string concatenation then convert back to number for addition
        }
    }
    return sum
}
console.log(stringConcatenation1(inputArray))

//More robust solution: First thing came in mind when I saw a nested loop is a hash table. However it won't work in this case. Still have O(n^2)
//So the other way is pre-computing some fixed value, like the prefix sum. 
//In this case, there is 2 things that always consistent: first is the number in the array itself, second is the amount of digits of each number in the input array.
//Therefore, I can pre-computing the "degree" of each element and it will never change.
//The problem breakdown to this: totalSum = sumArray * numberOfElement + sumArray*sumOfDegree
const stringConcatenation2 = (arr) => {
    const sumArray = arr.reduce((acc,val) => acc + val, 0)
    //convert array to array of degree: 10^(number of digits)
    const degreeArr = arr.map(val => 10**(val + '').length) //A little trick here, convert number to string for easy counting its digits
    const sumOfDegree = degreeArr.reduce((acc,val) => acc + val, 0) //Repeat myself here, should consider to write a sum calculator function
    return sumArray*arr.length + sumArray*sumOfDegree
}
console.log(stringConcatenation2(inputArray))
//This is an O(n) solution, much more elegant and is the best I can think of.
//Unit test: degreeArr = [10**2, 10**1] = [100,10]
//sumOfDegree = 110
//return 12*110 + 12*2 = 1320 + 24 = 1344
//In case of empty array it should return 0
//In case of some not a number cases, it should return NaN. I can write some condition restrictions here but it not necessary, just to mention
//When it came to huge input data, this still work because it only occupied O(n) extra memory when computing degreeArr. 