function MainA() {
    const score = 75;
    
    if (score >= 60) {
        return(
            <div>
                <p>점수 : {score}</p>
                <p>결과 : 합격입니다.</p>
            </div>
        );
    }
    else {
        return (
            <div>
                <p>점수 : {score}</p>
                <p>결과 : 불합격입니다.</p>
            </div>
        )
    }
}
export default MainA;