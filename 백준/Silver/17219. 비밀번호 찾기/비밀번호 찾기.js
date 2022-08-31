const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : `${__dirname}/input.txt`;
const [num, ...input] = fs.readFileSync(filePath).toString().trim().split("\n");

const [N, M] = num.split(" ").map(Number);
const siteList = input.slice(0, N).map((v) => v.replace("\r", ""));
const resultList = input.slice(N).map((v) => v.replace("\r", ""));

const List = new Map();
siteList.forEach((v) => {
    const [id, pw] = v.split(" ");
    List.set(id, pw);
});

let result = "";
resultList.forEach((v) => {
    result += List.get(v) + "\n";
});
console.log(result);
