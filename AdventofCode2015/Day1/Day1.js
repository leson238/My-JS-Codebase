const fs = require('fs');

const input = fs.readFileSync('./Day1 Input.txt',encoding = 'utf8');
console.time();
const inputArr = input.split('');
const floor = () => {
    const up = inputArr.filter(val => val === '(');
    return 2*up.length - input.length;
}
console.log(floor());
console.timeEnd();

console.time();
const basement = () => {
    let currFloor = 0;
    for (let i = 0; i < input.length; i++) {
        input[i] === '(' ? currFloor++ : currFloor--;
        if (currFloor < 0) {
            return (i+1);        
        }
    }
}
console.log(basement());
console.timeEnd();
