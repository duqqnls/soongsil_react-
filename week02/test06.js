for (let idx = 1; idx <= 100; idx++) {
    if (idx > 10) { // 반복문 내부에 작성한 조건식을 만족하면 콘솔에 '반복문 종료!'를 출력
        console.log("반복문 종료!")
        break;
    }
    console.log(idx);
}