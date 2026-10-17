function MainB() {
    const age = 17;
    return (
        <div>
            <p>나이 : {age}</p>
            <p>결과 : {age >= 20 ? "성인입니다." : "미성년자입니다."}</p>
        </div>
    );
}

export default MainB;