
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

// Default Parameter: 파라미터 기본값 지정
const greeting = (name = "User") => {
    console.log(`${name}님, 반갑습니다!`);
};

greeting();
greeting("MS");

// Object Destrcturin 구조분해 할당
// 배열, 객체에서 각가의 값이나 속성을 분해 하여 손쉽게 별도의 변수에 담아주는 것

const colors = ["Green", "SkyBlue", "Yellow"];

// 구조분해 할당
const [frist, second] = colors;

console.log("frist: ", frist);
console.log("second: ", second);

const guest = {
    userName: "MinSung",
    id: "MS",
    age: 30
}

// const userName = guest.userName;
// const userId = guest.id;
// const userAge = guest.age;

const { userName, id: userId, age: userAge } = guest;
console.log("userName: ", userName);
console.log("userId: ", userId);
console.log("userAge: ", userAge);

// Spread Syntax: 배열이나 객체를 개별요소로 분해하거나 결합할때 사용
const newColors = [...colors, "Purple", "Red"];
console.log("newColors: ", newColors);

// const newGuest = { ...guest };
// console.log("newGuest: ", newGuest);

const newGuest = { ...guest, mbti: "ESFJ", userName: "성식" };
console.log("newGuest: ", newGuest);

// mission 오늘의 할일 추가
// todoItem에 오늘의 할일 데이터 추가, isComplete의 값을 true로 변경하는 새로운 객체 만들기
// 조건: spread syntax 문법으로 만들것
const todoItem = {
    id: 1,
    isComplete: false
}

// spread syntax로 기존 객체를 복사하면서 필드 추가/수정
const newTodoItem = {
    ...todoItem,
    todo: "Go to swim 🏊‍♂️",
    isComplete: true,
}

console.log("newTodoItem: ", newTodoItem)