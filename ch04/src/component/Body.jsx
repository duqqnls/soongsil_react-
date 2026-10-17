import "./Body.css"

function Body() {
    const number = 1;
    const numA = 1;
    const numB = 2;
    const strA = "안녕";
    const strB = "리액트";
    const boolA = true;
    const boolB = false; 
    const objA = { a:1, b:2, }; {/* 객체 자료형 */};
    function getName() { return "송여빈";}
    const fruits = ["사과", "바나나", "포도"];
    if (numA %2 == 0) {
        return (
            <div>
                <h1>Body</h1>
                <h2>{number}</h2>
                <h2>{numA + numB}</h2>
                <h2>{strA + strB}</h2>
                {/*<h2>{boolA || boolB}</h2>  불린 값은 출력 안됨*/}
                <h2>{String(boolA || boolB)}</h2>
                {/*<h2>{objA}</h2> 객체자체 출력불가, 기본타입형태의 값으로 출력*/}
                <h2>{objA.a}</h2>
                <h2>{number}은(는) {number % 2 === 0 ? "짝수" : "홀수"}입니다.</h2>
            </div>
        );
    }
    else { 
        return (
            <div className="body">
            <h2>{number}은(는) 홀수입니다.</h2>
            <div>{getName()}</div>{/*함수 호출*/}
            <ul>
                {fruits.map((fruit) => ( <li key={fruit}>{fruit}</li> ))}
            </ul>
            </div>
        );
    }
}
export default Body;
