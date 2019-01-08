let crypto = require('crypto');

let input = 'bgvyzdsv',
    i = 0;

console.time();
while (true) {
    let hash = crypto.createHash('md5').update(input + i).digest('hex');
    if (hash.substr(0, 6) === '000000') {
        console.log(i);
        console.log(hash);
        break;
    }
    i++;
}
console.timeEnd();