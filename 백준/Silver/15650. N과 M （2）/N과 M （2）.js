const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : `${__dirname}/input.txt`;
const [N, M] = fs.readFileSync(filePath).toString().trim().split(" ").map(Number);

const result = [];
function back(arr, M) {
    const result = [];
    if (M === 1) {
        return arr.map((el) => [el]);
    }

    arr.forEach((fixed, index, origin) => {
        const rest = [...origin.slice(index + 1)];
        const permutations = back(rest, M - 1);
        const attached = permutations.map((el) => [fixed, ...el]);
        result.push(...attached);
    });
    return result;
}

const arr = Array.from({ length: N }, (_, i) => i + 1);
back(arr, M).map((v) => console.log(v.join(" ")));
