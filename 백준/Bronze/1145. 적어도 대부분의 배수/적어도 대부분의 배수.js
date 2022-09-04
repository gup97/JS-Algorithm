const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : `${__dirname}/input.txt`;
const input = fs.readFileSync(filePath).toString().trim().split(" ").map(Number);

const MIN = Math.min(...input);

for (let i = MIN; ; i++) {
    let count = 0;
    for (let j = 0; j < input.length; j++) {
        if (i % input[j] === 0) count++;
    }
    if (count >= 3) {
        console.log(i);
        break;
    }
}
