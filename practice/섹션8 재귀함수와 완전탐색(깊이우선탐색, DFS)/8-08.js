//? 중복순열 구하기
//* 1부터 N까지 번호가 적힌 구슬이 있습니다.
//* 이 중 중복을 허락하여 M번을 뽑아 일렬로 나열 하는 방법을 모두 출력합니다.

function solution(n, m) {
	let answer = []
	let tmp = Array.from({ length: m }).fill(0)

	function DFS(L) {
		if (L === m) answer.push([...tmp])
		else {
			for (let i = 1; i <= n; i++) {
				tmp[L] = i
				DFS(L + 1)
			}
		}
	}

	DFS(0)
	return answer
}

console.log(solution(3, 2))
