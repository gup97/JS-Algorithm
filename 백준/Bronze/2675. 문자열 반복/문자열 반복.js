const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : `${__dirname}/input.txt`;

const input = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n")
  .map((el) => el.split(" "));

input.splice(1).forEach((el) => {
  const letter = el[1].replace("\r", "").split("");
  console.log(letter.map((let) => let.repeat(el[0])).join(""));
});
