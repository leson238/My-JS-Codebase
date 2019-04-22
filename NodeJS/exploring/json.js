const fs = require('fs');

const book = {
  name: 'name',
  author: 'author',
};
const bookJson = JSON.stringify(book);
fs.writeFileSync('json.json', bookJson);
const dataBuffer = fs.readFileSync('json.json');
const dataJson = dataBuffer.toString();
const data = JSON.parse(dataJson);
console.log(data.author);
