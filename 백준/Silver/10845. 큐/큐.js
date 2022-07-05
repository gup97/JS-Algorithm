const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : `${__dirname}/input.txt`;
const input = fs
  .readFileSync(filePath)
  .toString()
  .split(/\n/)
  .map((el) => el.replace("\r", ""));
const N = +input.shift();
const queue = [];
let result = [];
input.forEach((act) => {
  const isEmpty = (arr) => {
    return arr.length === 0 ? true : false;
  };
  switch (act) {
    case "pop":
      result.push(isEmpty(queue) ? -1 : queue.shift());
      break;
    case "size":
      result.push(queue.length);
      break;
    case "empty":
      result.push(isEmpty(queue) ? 1 : 0);
      break;
    case "front":
      result.push(isEmpty(queue) ? -1 : queue[0]);
      break;
    case "back":
      result.push(isEmpty(queue) ? -1 : queue[queue.length - 1]);
      break;
    default:
      queue.push(act.split(" ")[1]);
      break;
  }
});

console.log(result.join("\n"));
