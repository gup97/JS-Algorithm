const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : `${__dirname}/input.txt`;

const [T, ...input] = fs.readFileSync(filePath).toString().trim().split("\n").map(Number);

let room = Array.from({ length: 14 }, (_, i) => i + 1);
const result = [];
for (let i = 0; i < 14; i++) {
  room = room.map((_, i) => room.slice(0, i + 1).reduce((a, b) => a + b));
  result[i] = room;
}

for (let i = 0; i < input.length; i += 2) {
  const k = input[i];
  const n = input[i + 1];

  console.log(result[k - 1][n - 1]);
}
