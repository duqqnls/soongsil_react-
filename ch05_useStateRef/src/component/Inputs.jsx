function Inputs({
    inputRef, message, value, onChange, onAdd
}) {

    const onKeyDown = (e) => {
        if (e.key === "Enter") {
            onAdd();
        }
    };

    return (
        <div style={{ marginTop: "20px"}}>
            <input ref={inputRef} 
            value={value}
            onChange={onChange}
            onKeyDown={onKeyDown}
            placeholder="정수 입력후 Enter" />
            
            <p style={{ color: "red" }}>{message}</p>
        </div>
    );
}
export default Inputs;