function firstUniverse(){
    const myName = 'The One Nearly Above All';
    const myFather = 'Odin I';
    const greatPowerSources = 'Krypton - 1';
    const skillSet = ['Martial Arts level 9999', 'Reviving', 'Flying']
    return function sayMyName(newName) {
        console.log(`I was ${myName}, and I was the son of ${myFather}. But now my new name is ${newName}`);
        return function skills(index) {
            console.log(`After revived, my skills in this universe is ${skillSet[index]}`);
            return function accessPower(source) {
                return source === greatPowerSources ? 'I am busted' : 'Nope, you dont know wheres my powers come from!'
            };
        };
    };
}
const revived = firstUniverse(); 
//First universe  get called, and it destroyed from the call stack - My enemies are serious about this!
//Notice that all the const (myName, myFather, greatPowerSources, skillSet) are destroyed with first universe. 
//You cannot accessed they anymore without closures
console.log(revived('TONAA II'))
console.log(revived('TONAA III')(1)) 
//Notice that I am still remember about my previous life and even when I have a new name.
//Imagine that not only 1 father and array with 3 items. The greater those data, the greater closures power. 
//How many memory space you had saved ?
console.log(revived('TONAA IV')(2)('Try and guess mortal!!!')) 
// Can you guess if you did not see the source code? I hope it hard enough...



