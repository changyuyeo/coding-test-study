// 자연수 N이 주어지면, N의 각 자릿수의 합을 구해서 return 하는 solution 함수를 만들어 주세요.
// 예를들어 N = 123이면 1 + 2 + 3 = 6을 return 하면 됩니다.

function solution(n) {
  let answer = 0;
  for (let v of n.toString()) {
    answer += Number(v);
  }
  return answer;
}

console.log(solution(123)); // 1 + 2 + 3 = 6이므로 6를 return 하면 됩니다.
console.log(solution(987)); // 9 + 8 + 7 = 24이므로 24를 return 하면 됩니다.
