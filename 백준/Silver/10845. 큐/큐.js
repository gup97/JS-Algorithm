const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : `${__dirname}/input.txt`;
const input = fs.readFileSync(filePath).toString().trim().split(/\n/);
const N = input.splice(0, 1);
const arr = input.map((el) => el.replace("\r", ""));

const action = arr.map((el) => {
  return el.split(" ");
});
const queue = [];
let target = 0;
let result = "";
action.forEach((act) => {
  const isEmpty = (arr, target) => {
    return arr.length - target === 0 ? true : false;
  };
  switch (act[0]) {
    case "push":
      queue.push(act[1]);
      break;
    case "pop":
      result += `${isEmpty(queue, target) ? -1 : queue[target++]}\n`;
      break;
    case "size":
      result += `${queue.length - target}\n`;
      break;
    case "empty":
      result += `${isEmpty(queue, target) ? 1 : 0}\n`;
      break;
    case "front":
      result += `${isEmpty(queue, target) ? -1 : queue[target]}\n`;
      break;
    case "back":
      result += `${isEmpty(queue, target) ? -1 : queue[queue.length - 1]}\n`;
      break;
  }
});

console.log(result);
