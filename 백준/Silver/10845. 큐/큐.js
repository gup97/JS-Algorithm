const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : `${__dirname}/input.txt`;
const input = fs.readFileSync(filePath).toString().trim().split(/\n/);
const N = input.splice(0, 1);
const arr = input.map((el) => el.replace("\r", ""));

const action = arr.map((el) => {
  return el.split(" ");
});
const queue = [];
let result = "";
action.forEach((act) => {
  const isEmpty = (arr) => {
    return arr.length === 0 ? true : false;
  };
  switch (act[0]) {
    case "push":
      queue.push(act[1]);
      break;
    case "pop":
      result += `${isEmpty(queue) ? -1 : queue.shift()}\n`;
      break;
    case "size":
      result += `${queue.length}\n`;
      break;
    case "empty":
      result += `${isEmpty(queue) ? 1 : 0}\n`;
      break;
    case "front":
      result += `${isEmpty(queue) ? -1 : queue[0]}\n`;
      break;
    case "back":
      result += `${isEmpty(queue) ? -1 : queue[queue.length - 1]}\n`;
      break;
  }
});

console.log(result);
