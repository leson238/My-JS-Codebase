const fs = require('fs');
const input = fs.readFileSync('./Day8 Input.txt', 'utf-8').split('\n').map(val => val.replace('\r',''));
const result = input.reduce((acc, item) => acc + (item.length - eval(item).length), 0);
const result2 = input.reduce((acc, line) => acc + (2 + line.replace(/\\/g, '\\\\').replace(/"/g, '\\"').length - line.length), 0);
console.log(result, result2);