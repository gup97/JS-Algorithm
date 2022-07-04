const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : `${__dirname}/input.txt`;

const input = +fs.readFileSync(filePath).toString().trim();

for (const i of Array.from({ length: 9 }, (_, i) => i + 1)) {
  console.log(`${input} * ${i} = ${input * i}`);
}
