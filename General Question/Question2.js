// Write a javascript function that takes an array of numbers and a target number. The function should find two different numbers in the array that, when added together, give the target number. For example: answer([1,2,3], 4)should return [1,3]

let arr = [1,,5,7,11,23,25,233,123,5,6,7,8,-4,-5,2,3];
let number = 4;
let answer = [];
arr.forEach(item => {
  let sub = number - item;
  if (arr.includes(sub) && (sub !== item)) {
    arr = arr.filter(i => (i !== item && i !== sub))
    return answer.push([item, number - item]);
  };
  return answer;
});

console.log(answer);
