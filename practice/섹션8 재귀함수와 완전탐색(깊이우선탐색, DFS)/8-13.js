//? 수열 추측하기
//* 가장 윗줄에 1부터 N까지의 숫자가 한 개씩 적혀 있다.
//* 그리고 둘째 줄부터 차례대로 파스칼 의 삼각형처럼 위의 두개를 더한 값이 저장되게 된다.
//* 예를 들어 N이 4 이고 가장 윗 줄에 3 1 2 4 가 있다고 했을 때, 다음과 같은 삼각형이 그려진다.

/**
 **  3 1 2 4
 **   4 3 6
 **    7 9
 **     16
 */

//* N과 가장 밑에 있는 숫자가 주어져 있을 때 가장 윗줄에 있는 숫자를 구하는 프로그램을 작성하시오.
//* 단, 답이 여러가지가 나오는 경우에는 사전순으로 가장 앞에 오는 것을 출력하여야 한다.

function solution(n, f) {
	let answer = []
	let flag = 0
	let memo = Array.from(Array(11), () => Array(11).fill(0))
	let checkArr = Array.from({ length: n + 1 }).fill(0)
	let tmp = Array.from({ length: n }).fill(0)
	let b = Array.from({ length: n }).fill(0)

	function combi(n, r) {
		if (memo[n][r] > 0) return memo[n][r]
		if (n === r || r === 0) return 1
		else return (memo[n][r] = combi(n - 1, r - 1) + combi(n - 1, r))
	}

	function DFS(L, sum) {
		if (flag) return
		if (L === n && sum === f) {
			answer = [...tmp]
			flag = 1
		} else {
			for (let i = 1; i <= n; i++)
				if (checkArr[i] === 0) {
					checkArr[i] = 1
					tmp[L] = i
					DFS(L + 1, sum + b[L] * tmp[L])
					checkArr[i] = 0
				}
		}
	}

	for (let i = 0; i < n; i++) b[i] = combi(n - 1, i)

	DFS(0, 0)
	return answer
}

console.log(solution(4, 16)) //* return 3 1 2 4
