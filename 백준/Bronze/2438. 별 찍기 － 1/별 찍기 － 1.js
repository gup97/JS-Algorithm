const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : `${__dirname}/input.txt`;
const input = +fs.readFileSync(filePath).toString();
Array.from({ length: input }, (_, i) => console.log("*".repeat(i + 1)));
