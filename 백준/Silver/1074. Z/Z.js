const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : `${__dirname}/input.txt`;
const [N, r, c] = fs.readFileSync(filePath).toString().split(" ").map(Number);
let order = 0;
const visit = (y, x, size) => {
  if (y === r && x === c) {
    console.log(order);
    return;
  }
  if (r < y + size && r >= y && c < x + size && c >= x) {
    visit(y, x, size / 2);
    visit(y, x + size / 2, size / 2);
    visit(y + size / 2, x, size / 2);
    visit(y + size / 2, x + size / 2, size / 2);
  } else {
    order += size ** 2;
  }
};
visit(0, 0, 2 ** N);
