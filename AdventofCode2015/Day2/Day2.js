const fs = require('fs');

console.time();
let answer1 = 0;
let answer2 = 0;
//Brillian Number sort from Stack Overflow
const numSort = (a,b) => a-b;
const input = fs.readFileSync('./Day2 Input.txt',encoding = 'utf8').split("\n");
//Map chaining to get everything in order
const processedInput = input.map(val => val.replace('\r',''))
                            .map(val => val.split('x').map(val => Number(val)))
                            .map(val => val.sort(numSort));
for (let i = 0; i < processedInput.length; i++) {
    //Destructuring cuz I found no way to chain reduce into the processedInput
        let [l,w,h] = processedInput[i];
        answer1 += (3*l*w + 2*w*h + 2*h*l);
        answer2 += (2*(l+w)+l*w*h);
}
console.log(answer1);
console.log(answer2);
console.timeEnd();