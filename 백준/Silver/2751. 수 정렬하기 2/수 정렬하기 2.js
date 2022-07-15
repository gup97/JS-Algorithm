const fs = require('fs');
const inputData = fs.readFileSync(0, 'utf8').toString().trim().split("\n").map(Number);

const N = inputData.shift()

const result = inputData.sort((a, b) => a - b);
console.log(result.join('\n'));
