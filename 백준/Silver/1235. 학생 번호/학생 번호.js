const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : `${__dirname}/input.txt`;
const [N, ...input] = fs.readFileSync(filePath).toString().trim().split("\n");

const list = input.map((v) => v.replace("\r", ""));

for (let i = list[0].length - 1; i >= 0; i--) {
    const list_slice = list.map((v) => v.slice(i));
    const conditional = new Set(list_slice).size !== +N;
    if (conditional === false) {
        console.log(list[0].length - i);
        break;
    }
}
