const fs = require("fs");
const filePath =  "/dev/stdin" ;
// 제출시      
const input = fs.readFileSync(filePath).toString().trim().split(/\n/);
const [N, M] = input[0].split(" ").map(Number);
const arr = input[1].split(" ").map(Number);

solution(N, M, arr);
function solution(N, M, arr = []) {
  console.log(arr.filter((el) => M > el).join(" "));
}
