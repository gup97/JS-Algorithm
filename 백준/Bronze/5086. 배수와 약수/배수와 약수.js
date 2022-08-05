const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : `${__dirname}/input.txt`;
const input = fs.readFileSync(filePath).toString().trim().split("\n");
input.pop();

function condition(n, target) {
    return target % n === 0 ? true : false;
}
input.forEach((v) => {
    const [n1, n2] = v.split(" ").map(Number);
    let output = "neither";
    if (n1 < n2) {
        if (condition(n1, n2)) {
            output = "factor";
        }
    } else {
        if (condition(n2, n1)) {
            output = "multiple";
        }
    }
    console.log(output);
});
