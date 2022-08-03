const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : `${__dirname}/input.txt`;
const [N, ...inputs] = fs.readFileSync(filePath).toString().trim().split("\n");

let result = "";
inputs.forEach((input) => {
    const [x1, y1, r1, x2, y2, r2] = input.split(" ").map(Number);
    const distance = Math.sqrt((x1 - x2) ** 2 + (y1 - y2) ** 2);

    if (distance === 0) {
        if (r1 === r2) result += "-1\n";
        else result += "0\n";
    } else if (r1 + r2 < distance) result += "0\n";
    else if (r1 + r2 === distance) result += "1\n";
    else if (Math.abs(r1 - r2) < distance && r1 + r2) result += "2\n";
    else if (Math.abs(r1 - r2) === distance) result += "1\n";
    else if (Math.abs(r1 - r2) > distance) result += "0\n";
});
console.log(result);
