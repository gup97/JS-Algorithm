const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : `${__dirname}/input.txt`;
const input = +fs.readFileSync(filePath).toString().trim();

const starSign = "*";
const starPrint = Array.from(Array(input), () => Array(input).fill(" "));

function starSplit(x, y, size) {
  if (size === 3) {
    for (let i = x; i < size + x; i++) {
      for (let j = y; j < size + y; j++) {
        if (i % 3 === 1 && j % 3 === 1) continue;
        starPrint[i][j] = starSign;
      }
    }
    return;
  }
  const divideThree = size / 3;
  for (let i = x; i < size + x; i++) {
    for (let j = y; j < size + y; j++) {
      if (i % divideThree === 0 && j % divideThree === 0) {
        if ((i / divideThree) % 3 === 1 && (j / divideThree) % 3 === 1) continue;
        else starSplit(i, j, size / 3);
      }
    }
  }
}

starSplit(0, 0, input);
console.log(starPrint.map((v) => v.join("")).join("\n"));
// 9일경우 00, 03,
