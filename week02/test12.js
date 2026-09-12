let greeting = (name) => {  // 함수 표현식 (익명함수의 간결한 표현), 화살표 함수
    let greetingText = `hello ${name}`;
    return greetingText;
}; 
console.log(greeting("송여빈")); // 함수 호출

//////////////////

let isConfirm = true;

function confirm(onYes, onNo) { // 함수를 매개변수로 (콜백함수와 유사)
    if (isConfirm) onYes(); // 화살표함수 호출
    else onNo(); // 화살표함수 호출
}
// 함수 호출, 인수로 화살표 함수전달
confirm( () => console.log("승인"), () => console.log("거부") ); // 함수 호출