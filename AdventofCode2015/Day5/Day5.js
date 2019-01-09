const fs = require('fs');

const input = fs.readFileSync('./Day5 Input.txt',encoding = 'utf8').split('\n');
console.time()
const niceOrNaughty1 = (str) => {
    //include at least 3 vowels 'aeiou'
    const vowels = (str) => {
        str = str.split('')
        let stra = str.filter(val => val ==='a').length,
            stre = str.filter(val => val ==='e').length,
            stri = str.filter(val => val ==='i').length,
            stro = str.filter(val => val ==='o').length,
            stru = str.filter(val => val ==='u').length;
        let vowelNumber = stra + stre + stri + stro + stru;
        return vowelNumber >= 3 ? true: false;
    }

    //include double characters
    const doubleChar = (str) => {
        for (let i = 0; i < str.length; i++) {
            if (str[i] === str[i+1]) {
                return true;
            }
        }
        return false;
    }    
    
    //not include naughty string
    const notNaughty = (str) => {
        let naughtyWord = 
            str.includes('ab')+
            str.includes('cd')+
            str.includes('pq')+
            str.includes('xy');
        return naughtyWord > 0 ? false: true;
    }
    return (vowels(str) && doubleChar(str) && notNaughty(str)) ? true: false;
}
const answer1 = input.map(val => niceOrNaughty1(val)).reduce((acc,val) => acc + val, 0);

const niceOrNaughty2 = (str) => {
    //double char with 1 char between
    const charBetween = (str) => {
        for (let i = 0; i < str.length; i++) {
            if (str[i] === str[i+2]) {
                return true;
            }
        }
        return false;
    }
    //2 pair of 2 letters
    const doublePair = (str) => {
        for (let i = 0; i < str.length; i++) {
            if ((str.substr(i+2,str.length)).includes(str.substr(i,2))){
                return true;
            } 
        }  
        return false;
    }
    return (charBetween(str) && doublePair(str)) ? true : false;
}
const answer2 = input.map(val => niceOrNaughty2(val)).reduce((acc,val) => acc + val, 0);
console.log(answer2);

// console.log(doublePair('asdfsddsd'))
console.timeEnd();
