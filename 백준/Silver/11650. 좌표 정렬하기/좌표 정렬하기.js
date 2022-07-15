const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : `${__dirname}/input.txt`;
const input = fs.readFileSync(filePath).toString().trim().split(/\n/);
const pos = input.slice(1);

console.log(
  pos
    .map((el) => el.split(" ").map(Number))
    .sort((a, b) => {
      if (a[0] !== b[0]) return a[0] - b[0];
      else return a[1] - b[1];
    })
    .map((el) => el.join(" "))
    .join("\n")
);
