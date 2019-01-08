const fs = require('fs');

console.time();
let answer1 = 0;
let answer2 = 0;
const numSort = (a,b) => a-b;
const input = fs.readFileSync('./Day2 Input.txt',encoding = 'utf8').split("\n");
const processedInput = input.map(val => val.replace('\r',''))
                            .map(val => val.split('x').map(val => Number(val)))
                            .map(val => val.sort(numSort));
for (let i = 0; i < processedInput.length; i++) {
        let [l,w,h] = processedInput[i];
        answer1 += (3*l*w + 2*w*h + 2*h*l);
        answer2 += (2*(l+w)+l*w*h);
}
console.log(answer1);
console.log(answer2);
console.timeEnd();