const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : `${__dirname}/input.txt`;

const input = fs.readFileSync(filePath).toString().trim().split(" ").map(Number);

solution(input);
function solution(input = [1, 2]) {
  const scale = { ascending: "ascending", descending: "descending", mixed: "mixed" };
  let state = [];
  const arrVal = (arr) => {
    return JSON.stringify(arr);
  };
  if (arrVal([...input].sort((a, b) => a - b)) === arrVal(input)) state = scale.ascending;
  else if (arrVal([...input].sort((a, b) => b - a)) === arrVal(input))
    state = scale.descending;
  else state = scale.mixed;
  console.log(state);
}
