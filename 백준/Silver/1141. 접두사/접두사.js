const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : `${__dirname}/input.txt`;
const [N, ...input] = fs.readFileSync(filePath).toString().trim().split("\n");
const t1 = "hello";
const t2 = "hell";

const list = input.map((v) => v.replace("\r", "")).sort((a, b) => a.length - b.length);

let result = [];
for (let i = 0; i < list.length; i++) {
    result[i] = true;
    for (let j = i + 1; j < list.length; j++) {
        if (list[j].indexOf(list[i]) === 0) result[i] = false;
    }
}
console.log(result.reduce((acc, cur) => (cur ? acc + 1 : acc), 0));
