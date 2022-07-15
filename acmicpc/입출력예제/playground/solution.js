//실행버
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];
rl.on("line", function (line) {
  input.push(parseInt(line));
}).on("close", function () {
  const x = input[0];
  const y = input[1];
  console.log(x > 0 ? (y > 0 ? "1" : "4") : y > 0 ? "2" : "3");
  process.exit();
});
