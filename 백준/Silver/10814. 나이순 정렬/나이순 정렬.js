const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : `${__dirname}/input.txt`;
const input = fs.readFileSync(filePath).toString().trim().split(/\n/);
const N = input.shift();
const arr = input.map((el) => {
  const [age, name] = el.replace("\r", "").split(" ");
  return { age: +age, name };
});

arr.sort((a, b) => a.age - b.age);

let result = "";
for (const charts of arr) {
  result += `${charts.age} ${charts.name}\n`;
}
console.log(result);
