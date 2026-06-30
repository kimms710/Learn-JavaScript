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