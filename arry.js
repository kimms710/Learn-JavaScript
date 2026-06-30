// 객체와 배열

// 배열: 순서가 있는 데이터의 집합
const daysOfWeek = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday"
];

console.log("daysOfWeek Array", daysOfWeek);

console.log(daysOfWeek[4]); // Monday (첫 번째 요소)
console.log(daysOfWeek[6]); // Thursday (네 번째 요소)

for (let i = 0; i < daysOfWeek.length; i++) {
    console.log(daysOfWeek[i]);
}

const today = daysOfWeek[1];
console.log("today: ", today)

//mission 가장 좋아하는 요일 출력

const favoriteDay = daysOfWeek[4];
console.log("My favorite day of the week is: ", favoriteDay)

//객체: key와 value로 구성된 속성들의 묶음
const student = {
    name: "M-S",
    mbti: "ESFJ",
    favoritcolor: ["Green", "SkyBlue", "Yellow"]
};
console.log("student", student);

// 객체 특정 요소 추출
console.log("student name: ", student.name);
const abc = "name";
console.log("student name: ", student[abc]); //키값이 고정되어있지 않을때 주로 사용

// misson 2번째로 좋아하는 color 추출해서 출력하기
console.log("student favorit color: ", student.favoritcolor[1]);
console.log("student mbti: ", student.mbti);