const fs = require("fs");
const d3 = require("d3");

//Get data to work
class Preprocess {
    constructor(path, encode = 'utf-8') {
        this.path = path;
        this.encode = encode;
    }
    prepare() {
        const parse = (data) => d3.csvParse(data);
        const parsedData = parse(fs.readFileSync(this.path, this.encode));
        return parsedData;
    }
}
let courses = new Preprocess("./courses.csv").prepare(),
    students = new Preprocess("./students.csv").prepare(),
    marks = new Preprocess("./marks.csv").prepare(),
    tests = new Preprocess("./tests.csv").prepare();
//Main ultility functions, grasping data based on unique id
lookUp = (table, nameID, id) => {
    let result = table.filter(obj => obj[nameID] === id)
    return result.length == 1 ? result[0] : result
}   

class Student {
    constructor(testID, studentID, mark) {
        this.testID = testID;
        this.studentID = studentID;
        this.mark = +mark;
    }
    convertByWeight() {
        let w = lookUp(tests, 'id', this.testID + '').weight;
        return this.mark = this.mark * (+w) / 100;
    }
    lookForCourse() {
        let c = lookUp(tests, 'id', this.testID + '').course_id;
        return (this.courseName = lookUp(courses, 'id', c).name,
                this.teacher = lookUp(courses, 'id', c).teacher)
    }
    lookForName() {
        return this.studentName = lookUp(students, 'id', this.studentID + '').name
    }
}

//Secondary ultility functions for final grade of each subject and total average
//In case of a huge array, messing with the length of it by push is terrible- Modifying it in place is much better!
//Tested on 100k+ records
let list = new Array(marks.length)
for (let i = 0; i < list.length; i++) {
    const {test_id, student_id, mark} = marks[i];
    const m = new Student(test_id, student_id, mark);
    m.convertByWeight();
    m.lookForCourse();
    m.lookForName();
    list[i] = m;
}
console.log(list)
