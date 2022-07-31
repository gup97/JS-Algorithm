const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : `${__dirname}/input.txt`;
const [N, ...inputs] = fs.readFileSync(filePath).toString().trim().split("\n");
const list = inputs.map((input) => input.split(" ").map(Number));
(function sol(list) {
    const result = list.map(([x, y]) => {
        return list.reduce((sum, [p, q]) => {
            return x < p && y < q ? sum + 1 : sum;
        }, 1);
    });
    console.log(result.join(" "));
})(list);
