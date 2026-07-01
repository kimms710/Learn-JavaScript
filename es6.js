
const userInput = "         m        ";

// 사용자 입력값 비어있는지 체크
if (!userInput.trim()) {
    // 입력값이 비어있는 경우
    console.log("입력값이 비어있습니다. 값을 입력하세요!")
};

// misson 아래 조건에 모두 부합하는 경우 컨텐츠 배포
// 조건 1. 티스토리 블로그에 로그인 세션이 있는 경우
// 조건 2. AI가 작성한 글의 품질 게이트 점수가 95점이상인 경우

const conditions = [
    { name: "티스토리 로그인 세션", value: true },           // 조건 1
    { name: "AI 글 품질 게이트 점수", value: 97 >= 95 },    // 조건 2
]

const canDeploy = conditions.every((condition) => condition.value === true)
console.log("컨텐츠 배포 가능 여부: ", canDeploy) // true or false

if (canDeploy) {
    console.log("배포 시작!")
} else {
    console.log("배포 불가 - 조건을 확인하세요")
}

const publishData = {
    isBlogLoginSession: true, // 블로그 로그인 세션 확인 여부
    qualityScore: 87
}

if (publishData.isBlogLoginSession && publishData.qualityScore >= 95) {
    console.log("배포를 진행 합니다...!")
} else {
    console.log("배포 불가 - 조건을 확인하세요")
}