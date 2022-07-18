const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : `${__dirname}/input.txt`;
const [n, ...input] = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n")
  .map((el) => el.replace("\r", ""));

const output = input.reduce((result, word) => {
  let isGroupWord = [];
  for (let i = 0; i < word.length; i++) {
    if (isGroupWord[word[i]]) return result;
    if (word[i] !== word[i + 1]) {
      isGroupWord[word[i]] = true;
    }
  }
  return result + 1;
}, 0);

console.log(output);
