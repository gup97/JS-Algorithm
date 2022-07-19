const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : `${__dirname}/input.txt`;

let T = +fs.readFileSync(filePath).toString().trim();

let three = 0;
let five = 0;
while (T > 0) {
  if (T % 3 === 0) {
    three = T / 3;
    break;
  } else {
    T -= 5;
    five++;
  }
}
T < 0 ? console.log(-1) : console.log((three % 5) + Math.floor(three / 5) * 3 + five);
