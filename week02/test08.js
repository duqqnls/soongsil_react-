function getArea(width, height) {
    let area = width * height;
    return area;              // 함수 내부에 작성된 return문에 있는 값을 반환함
}

let result = getArea(10, 20); // 반환한 값을 변수 result에 저장 
                              // 함수에서 더 동작할 코드가 남았더라도 return문을 만나면 종료되므로 주의
console.log(result); // 200