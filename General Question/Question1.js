// Clean the room function: given an input of [1,2,4,591,392,391,2,5,10,2,1,1,1,20,20], make a function that organizes these into individual array that is ordered. For example answer(ArrayFromAbove) should return: [[1,1,1,1],[2,2,2], 4,5,10,[20,20], 391, 392,591]. Bonus: Make it so it organizes strings differently from number types. i.e. [1, "2", "3", 2] should return [[1,2], ["2", "3"]]

let array = [1,2,4,591,392,391,2,5,10,2,1,1,1,20,20];

//Sort the unsorted array, make life easier before separating them
sorting = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i; j < arr.length; j++) {
      if (arr[i] > arr[j]) {
        temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
      };
    };
  };
  return arr
};

//Check if there is any string, if yes separate them from numbers
distinguishString = (arr) => {
  let newArr = [];
  let filterArrStr = arr.filter(item => item !== Number(item));
  if (filterArrStr.length !== 0) {
    let filterArrNum = arr.filter(item => item === Number(item));
    newArr.push(filterArrNum);
    newArr.push(filterArrStr);
    return newArr;
  }
  return arr;
};

//Putting all sub-array together
puttingTogether = (arr) => {
  let newArr = [];
  let i = 0;
  do {
    let filterArr = arr.filter(item => item === arr[i])
    if (filterArr.length === 1) {
      newArr.push(filterArr[0])
    } else {
      newArr.push(filterArr);
    };
    i = i+filterArr.length;
  } while (i < arr.length);
  return newArr
};

console.log(puttingTogether(distinguishString(sorting(array))))
