//? 9. 결혼식
//* 현수는 다음 달에 결혼을 합니다.
//* 현수는 결혼식 피로연을 장소를 빌려 3일간 쉬지 않고 하려고 합니다.
//* 피로연에 참석하는 친구들 N명의 참석하는 시간정보를 현수는 친구들에게 미리 요구했습니다.
//* 각 친구들은 자신이 몇 시에 도착해서 몇 시에 떠날 것인지 현수에게 알려주었습니다.
//* 현수는 이 정보를 바탕으로 피로연 장소에 동시에 존재하는 최대 인원수를 구하여
//* 그 인원을 수용할 수 있는 장소를 빌리려고 합니다. 여러분이 현수를 도와주세요.
//* 만약 한 친구가 오는 시간 13, 가는시간 15라면 이 친구는
//* 13시 정각에 피로연 장에 존재하는 것이고 15시 정각에는 존재하지 않는다고 가정합니다.

function solution(times) {
	let answer = Number.MIN_SAFE_INTEGER
	let timeLine = []
	let cnt = 0

	for (let v of times) {
		timeLine.push([v[0], 's'])
		timeLine.push([v[1], 'e'])
	}

	timeLine.sort((a, b) =>
		a[0] === b[0] ? a[1].charCodeAt() === b[1].charCodeAt() : a[0] - b[0]
	)

	for (let v of timeLine) {
		v[1] === 's' ? (cnt += 1) : (cnt -= 1)
		answer = Math.max(answer, cnt)
	}

	return answer
}

let arr = [
	[14, 18],
	[12, 15],
	[15, 20],
	[20, 30],
	[5, 15]
]
console.log(solution(arr))
