const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : `${__dirname}/input.txt`;
const [N, ...input] = fs.readFileSync(filePath).toString().trim().split("\n");

(function measureField(kMelon, input) {
    let width = 0;
    let height = 0;
    let wIdx = 0;
    let hIdx = 0;
    input = input.map((v) => {
        return v.split(" ").map(Number);
    });
    input.forEach((v, i) => {
        const [dir, len] = v;
        if (dir === 1 || dir === 2) {
            width = Math.max(width, len);
            wIdx = len === width ? i : wIdx;
        }
        if (dir === 3 || dir === 4) {
            height = Math.max(height, len);
            hIdx = len === height ? i : hIdx;
        }
    });
    const lg = width * height;
    const sm = input[(wIdx + 3) % 6][1] * input[(hIdx + 3) % 6][1];
    console.log((lg - sm) * kMelon);
})(N, input);
