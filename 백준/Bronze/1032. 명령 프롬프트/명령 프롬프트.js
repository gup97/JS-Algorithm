const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : `${__dirname}/input.txt`;
const [N, ...input] = fs.readFileSync(filePath).toString().trim().split("\n");

const list = input.map((v) => v.replace("\r", ""));

let result = list[0].split("");
list.forEach((v) => {
    for (let i = 0; i < v.length; i++) {
        if (result[i] !== v[i]) result[i] = "?";
    }
});
console.log(result.join(""));
