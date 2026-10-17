function MainC() {
    const isLogin = true;
    return (
        <>
            <div>
                {isLogin && <p>환영합니다!</p>}
            </div>
        </>
    )
}
export default MainC;