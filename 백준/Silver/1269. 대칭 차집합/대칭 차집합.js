const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : `${__dirname}/input.txt`;
const input = fs.readFileSync(filePath).toString().trim().split("\n");
const A = input[1].split(" ").map(Number);
const B = input[2].split(" ").map(Number);

const setA = new Set(A);
const setB = new Set(B);

const A_B = [...setA].filter((v) => !setB.has(v)).length;
const B_A = [...setB].filter((v) => !setA.has(v)).length;

console.log(A_B + B_A);
