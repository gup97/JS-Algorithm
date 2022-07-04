# 백준 기록용

## 입출력에 관해서

백준 기본 입력 코드   

```JS
const fs = require("fs");
const filePath = process.platform === 'linux' ? '/dev/stdin':`${__dirname}/input.txt`;
const input = fs.readFileSync(filePath).toString();

solution(input);
console.log(input)
function solution(input) {
}

```

입력받는법 예시 [도움받은곳](https://tesseractjh.tistory.com/39)  

```JS
// 1. 하나의 값을 입력받을 때
const input =fs.readFileSync(filePath).toString().trim();

// 2. 공백으로 구분된 한 줄의 값들을 입력받을 때
const input = fs.readFileSync(filePath).toString().trim().split(' ');

// 3. 여러 줄의 값들을 입력받을 때
const input = fs.readFileSync(filePath).toString().trim().split('\n');

// 4. 첫 번째 줄에 자연수 n을 입력받고, 그 다음줄에 공백으로 구분된 n개의 값들을 입력받을 때(내가수정함)
// 5 2
// 2 3 2 2 1 
const input = fs.readFileSync(filePath).toString().trim().split(/\n/);
const [N, M] = input[0].split(" ").map(Number);
const arr = input[1].split(" ").map(Number);

// 5. 첫 번째 줄에 자연수 n을 입력받고, 그 다음줄부터 n개의 줄에 걸쳐 한 줄에 하나의 값을 입력받을 때(수정)
const input = fs.readFileSync(filePath).toString().trim().split(/\n/);
const N = input[0].split(" ").map(Number);
const arr = input.splice(1).map(Number);

// 6. 하나의 값 또는 공백으로 구분된 여러 값들을 여러 줄에 걸쳐 뒤죽박죽 섞여서 입력받을 때
// ex) n 입력 - 공백으로 구분된 n개의 값 입력 - m 입력 - 여러 줄에 걸쳐 m개의 값 입력
const input = fs.readFileSync(filePath).toString().trim().split(/\s/);
const n = input[0];
const n_arr = input.slice(1, n+1);
const [m, ...m_arr] = input.slice(n+1);

// 2~6에서 입력받는 값들을 모두 String에서 Number로 바꾸려면 split()뒤에 .map(Number)를 추가

