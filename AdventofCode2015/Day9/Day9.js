const fs = require('fs');
const input = fs.readFileSync('./Day9 Input.txt', encoding = 'utf8').split('\n');
console.time();
const places = [... new Set(input.map(data => data
                                                .split(' to '))
                                                .map(data => data[0]))
                                            ];
const processingInput = input
                        .map(data => data
                                        .replace(' to ',' ')
                                        .replace(' = ',' ')
                                        .split(' ')
                                        )
                        .map(data => [data[0],data[1],Number(data[2])]);

console.timeEnd();