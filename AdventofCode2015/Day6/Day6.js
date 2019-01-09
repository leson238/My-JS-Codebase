const fs = require('fs');
const input = fs.readFileSync('./Day6 Input.txt', encoding = 'utf8').split('\n');

console.time();
let newInput = input.map(val => 
                val .replace('through ','')
                    .replace(/,/g, ' ') //replace all comma instead of just the first one
                    .replace('turn off', 'turnoff')
                    .replace('turn on', 'turnon')
                    .split(' '))
                    .map(val => [val[0],[Number(val[1]),Number(val[2])],[Number(val[3]),Number(val[4])]]);
//return minimum,maximum
min = (x,y) => {
    return x<=y? x:y;
}
max = (x,y) => {
    return x>=y? x:y;
}

// draw the light grid
drawLightGrid = (a) => {
    let lightGrid = [];
    for (let i = 0; i < a; i++) {
        lightGrid.push([]);
        for (let j = 0; j < a; j++) {
            lightGrid[i].push(0);
        }
    }
    return lightGrid
}

let lightGrid = drawLightGrid(1000);
//have to reset the light for part 2
let lightGrid2 = drawLightGrid(1000);

controlLight = ([status,a,b]) => {
    //access (x,y) by arr[x][y]
    let [ax,ay] = a,
        [bx,by] = b;
    for(let i = min(ax,bx); i<max(ax,bx)+1; i++) {
        for(let j = min(ay,by); j<max(ay,by)+1; j++) {
            if (status === 'turnon') {
                lightGrid[i][j] = true;
            } else if (status === 'turnoff') {
                lightGrid[i][j] = false;
            } else {
                lightGrid[i][j] = !lightGrid[i][j];
            }
        }
    }
}

controlLight2 = ([status,a,b]) => {
    //access (x,y) by arr[x][y]
    let [ax,ay] = a,
        [bx,by] = b;
    for(let i = min(ax,bx); i<max(ax,bx)+1; i++) {
        for(let j = min(ay,by); j<max(ay,by)+1; j++) {
            if (status === 'turnon') {
                lightGrid2[i][j]++;
            } else if (status === 'turnoff') {
                lightGrid2[i][j] >= 1 ? lightGrid2[i][j]-- : lightGrid2[i][j] = 0;
            } else {
                lightGrid2[i][j] = lightGrid2[i][j] + 2;
            }
        }
    }
}

for (let i = 0; i < newInput.length; i++) {
    controlLight(newInput[i]);
}
const answer1 = lightGrid.map(val => val.reduce((acc,val) => acc+val,0)).reduce((acc,val) => acc+val,0);
console.log(answer1);

for (let i = 0; i < newInput.length; i++) {
    controlLight2(newInput[i]);
}
const answer2 = lightGrid2.map(val => val.reduce((acc,val) => acc+val,0)).reduce((acc,val) => acc+val,0);
console.log(answer2);

console.timeEnd();


