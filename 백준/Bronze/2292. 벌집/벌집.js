const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : `${__dirname}/input.txt`;
const N = +fs.readFileSync(filePath).toString().trim();

let room = 1;
for (let i = 1; ; i++) {
  if (room >= N) {
    console.log(i);
    break;
  }
  room = room + i * 6;
}
