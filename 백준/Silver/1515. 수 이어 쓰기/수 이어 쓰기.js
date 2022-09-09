const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : `${__dirname}/input.txt`;
const input = fs.readFileSync(filePath).toString().trim();

const arr = [];
//임의숫자
const N = 100000;

for (let i = 1; i < N; i++) {
    let temp = [];
    String(i)
        .split("")
        .forEach((v) => {
            temp.push(v);
        });
    arr[i] = temp;
}

let level = 0;
for (let i = 1; i < N; i++) {
    for (let j = 0; j < arr[i].length; j++) {
        if (input[level] === arr[i][j]) {
            level++;
        }
    }
    //end
    if (level === input.length) {
        console.log(i);
        break;
    }
}
