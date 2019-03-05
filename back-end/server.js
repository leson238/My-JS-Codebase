const fs = require("fs");
const d3 = require("d3");

//reading files
let courses = fs.readFileSync("./courses.csv", "utf8");
let students = fs.readFileSync("./students.csv", "utf8");
let marks = fs.readFileSync("./marks.csv", "utf8");
let tests = fs.readFileSync("./tests.csv", "utf8");

//parsing into array of objects
const parse = (data) => d3.csvParse(data);
courses = parse(courses).slice(0,courses.length-2);
students = parse(students).slice(0,students.length-2);
marks = parse(marks).slice(0,marks.length-2);
tests = parse(tests).slice(0,tests.length-2);

//Ultility functions
const lookUpID = (id, table) => {
    for (e of table) {
        if (id === e.id) return e;
    }
}
const lookUpName = (name, table) => {
    for (e of table) {
        if (name === e.name) return e;
    }
}

//create table join for data relating
function join(lookupTable, mainTable, lookupKey, mainKey, select) {
    let l = lookupTable.length,
        m = mainTable.length,
        lookupIndex = [],
        output = [];
    for (let i = 0; i < l; i++) { // loop through l items
        let row = lookupTable[i];
        lookupIndex[row[lookupKey]] = row; // create an index for lookup table
    }
    for (let j = 0; j < m; j++) { // loop through m items
        let y = mainTable[j];
        let x = lookupIndex[y[mainKey]]; // get corresponding row from lookupTable
        output.push(select(y, x)); // select only the columns you need
    }
    return output;
};
let studentsMarks = join(students, marks, 'id', 'student_id', function(mark, student) {
    return {
        id: mark.student_id,
        test_id: mark.test_id,
        mark: +mark.mark,
        name: student.name
    };
})
let studentMarksTests = join(tests, studentsMarks, 'id', 'test_id', function(studentMark,test) {
    return {
        id: studentMark.id,
        mark: studentMark.mark * (+test.weight/100),
        name: studentMark.name,
        course_id: test.course_id,
    }
})
let recordTables = join(courses, studentMarksTests, 'id', 'course_id', function(table, course) {
    return {
        id: table.id,
        mark: table.mark,
        name: table.name,
        course_id: course.id,
        course: course.name,
        teacher: course.teacher,
    }
})

//group by unique ID
let reportCardID = d3.nest()
    .key((d) => { return d.id; })  
    .key((d) => { return d.course; })
    .rollup((v) => { return d3.sum(v, (d) => { return d.mark; }); })
    .entries(recordTables)
let result = reportCardID.map((rec) => {
    return {
        header: {
            id: rec.key,
            name: lookUpID(rec.key,students).name,
            totalAvg: rec.values.reduce((sum, grade) => sum + grade.value/rec.values.length, 0).toFixed(2) + '%',
        },
        body: rec.values.map((group) => {
            return {
                course: group.key,
                teacher: lookUpName(group.key,courses).teacher,
                finalGrade: group.value.toFixed(2) + '%',
            }
        })
    }
})

//writing to txt file
let writingResult = ``
result.map(rec => {
    let resultHeader = 
`Student ID: ${rec.header.id}, name: ${rec.header.name}\r\n
Total Average: ${rec.header.totalAvg}\r\n
`
    writingResult += resultHeader
    rec.body.map((record,i) => {
        let resultBody = 
`       Course: ${record.course}, Teacher: ${record.teacher}\r\n
        Final Grade:    ${record.finalGrade}\r\n

`
        writingResult += resultBody
        if (i == rec.body.length - 1) {writingResult += 
`\r\n
`}
    })
})  
fs.writeFile("result.txt", writingResult, function(err) {
    console.log("file written");
});            
