//? 3. 미로탐색(DFS)
//* 7*7 격자판 미로를 탈출하는 경로의 가지수를 출력하는 프로그램을 작성하세요.
//* 출발점은 격 자의 (1, 1) 좌표이고, 탈출 도착점은 (7, 7)좌표이다.
//* 격자판의 1은 벽이고, 0은 통로이다. 격 자판의 움직임은 상하좌우로만 움직인다.
//* 미로가 다음과 같다면

//* s  0  0  0  0  0  0
//* 0  1  1  1  1  1  0
//* 0  0  0  1  0  0  0
//* 1  1  0  1  0  1  1
//* 1  1  0  0  0  0  1
//* 1  1  0  1  1  0  0
//* 1  0  0  0  0  0  e

//* 위의 지도에서 출발점에서 도착점까지 갈 수 있는 방법의 수는 8가지이다.

function solution(board) {
	let answer

	return answer
}

let arr = [
	[0, 0, 0, 0, 0, 0, 0],
	[0, 1, 1, 1, 1, 1, 0],
	[0, 0, 0, 1, 0, 0, 0],
	[1, 1, 0, 1, 0, 1, 1],
	[1, 1, 0, 0, 0, 0, 1],
	[1, 1, 0, 1, 1, 0, 0],
	[1, 0, 0, 0, 0, 0, 0]
]
console.log(solution(arr))
