const fs = require('fs');
const input = fs.readFileSync('./Day3 Input.txt',encoding = 'utf8').split('');

console.time();
let newInput = [`0x0`];
santa = (start) => {
    let x=0;
    let y=0;
    for (let i = start; i < input.length; i+=2) {
        if (input[i] === '^') {
            y++;
            newInput.push([x,y].join('x'));
        } else if (input[i] === 'v') {
            y--;
            newInput.push([x,y].join('x'));
        } else if (input[i] === '<') {
            x--;
            newInput.push([x,y].join(`x`));
        } else if (input[i] === '>') {
            x++;
            newInput.push([x,y].join(`x`));
        }
    }
}
santa(0);
santa(1);
const newInputSet = new Set(newInput);
console.log(newInputSet.size);
console.timeEnd();
