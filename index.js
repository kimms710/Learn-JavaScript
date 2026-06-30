
console.log("멀캠 수업 중...");

// 변수
const userName = "성시기";
console.log(userName);

const userID = "ms"

//mission
//적절한 변수명에 사용자의 이름을 감아 변수 만들기
//console에 출력해서 확인하기
//const userMS; //const 변수값 변경 불가
//userMS = "MinSung"; //오류 발생
let userMS; // 변수값 변경 가능
userMS = "MinSung"; //재 할당 가능
console.log("user name is ", userMS);

// Date Type
const userAge = 30;
const userMBTI = "ENFJ";
console.log("user MBTI is ", userMBTI);

//boolean type
const isLoggedin = false; //boolean type으로 변수명을 만들때 암묵적으로 앞에 is 또는 has 를 붙혀서 만들어준다
console.log("user isLoggedin: ", isLoggedin);
console.log("isLoggedin Type ?", typeof isLoggedin);

// null/undefined
const empty1 = null;
let empty2; //변수 선언만
console.log("empty1 value ?", empty1);
console.log("empty2 Type ?", typeof empty2);

//mission 나머지 변수들도 타입확인하는 코드 작성 콘솔에 출력
//console.log(" Type ?", typeof );

//함수

//함수 정의
function greeting() {
    // 로직
    // 목표: "user님! 반갑습니다."" 문자열을 console에 출력

    // 1. user name 변수 선언
    //const inputUserName = "";
    // 2. user에게 name 받아와서 변수에 담기
    const inputUserName = window.prompt("Please enter user name.");
    //console.log("inputUserName:", inputUserName);
    // 3. "변수 + 님! 반갑습니다." 문자열 완성하기
    //const result = inputUserName + "님! 반갑습니다.";
    const result = `${inputUserName}님! 반갑습니다.`; //가독성 백틱으로 감싸야됨 ` (백틱)키보드 숫자 1 왼쪽, ESC 아래 키
    // 4. 완성된 문자열 console에 출력
    console.log(result);
};

// 함수 실행
//greeting();

const greetingInput = (name) => {
    console.log("???님! 반갑습니다.");
};
greetingInput();
greetingInput();
greetingInput();
greetingInput();