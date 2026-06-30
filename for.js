// 반복문

/*
* 3가지 구성용소
  1. 초기화 -> 1번 실행
  2. 반복 조건식
  3. 증감식
*/

// for
for (let i = 0; i < 10; i++) {
    // 반복 조건식이 true인 동안 실행할 반복 로직
    // console.log(i, '번째 실행');
    console.log(`${i}번째 실행`);
}

// mission 10 -> 1 count
for (let i = 10; i > 0; i--) {
    // 반복 조건식이 true인 동안 실행할 반복 로직
    // console.log(i, '번째 실행');
    console.log('COUNT DOWN: ', i);
}

const animals = ["rabbit", "puppy", "kitten", "panda", "fox"];

for (let i = 0; i < animals.length; i++) {
    console.log(`🐾${animals[i]}🦊`);
    animals[i]; // date type: string
}

// 배열 제공 함수 forEach (향상된 for문)
animals.forEach((value, index) => {
    // 각 요소들을 순회하면서 실행 반복 로직
    console.log(`🐾${index}번째: ${value}🐶`)
})

/*
  1. map - 배열
  2. filter - 배열'
  3. find - 요소 or undefined
  4. some/every - boolean
*/

// map: 기존 배열을 조작하여 새로운 배열 return (원복 수정 없음)
const names = ["Alexander", "Sebastian", "Victoria", "Isabella", "Nathaniel"];

// 대문자 변환된 배열
const upperNames = names.map((value) => value.toUpperCase());
console.log("upperNames: ", upperNames)

// 이모지가 추가된 배열
const emogiNmaes = names.map((name) => `${name}❤️`);
console.log("emogiNmaes: ", emogiNmaes)
console.log("names: ", names)

// filter: 배열안의 요소들 중 조건을 만족하는 요소들로 새로운 배열 return
// 조건 만족하지 않으면 빈배열 return

//글자수가 9자 이상인 요소들만 모은 배열
const filterNames = names.filter((name) => name.length >= 9)
console.log("filterNames: ", filterNames)

// find: 배열안의 요소들 중 조건을 만족하는 첫번째 요소 하나를 return
// 조건 만족하지 않으면 undefined 리턴
const findNames = names.find((name) => name.length >= 9)
console.log("findNames: ", findNames)

// some/every: 배열안의 요소들 중 조건을 만족하는지에 대한 boolean return
// 둘 차리 하나라도 t -> t / 모두가 t -> t
const someNames = names.some((name) => name.length >= 9)
console.log("someNames: ", someNames)

const everyNames = names.every((name) => name.length >= 9)
console.log("everyNames: ", everyNames)