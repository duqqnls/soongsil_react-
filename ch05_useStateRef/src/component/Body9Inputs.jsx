//import 하기 
import { useState, useRef } from "react";
import Viewer from "./Viewer";
import Buttons from "./Buttons";
import Inputs from "./Inputs";

function Body9Inputs() {
    const [number, setNumber] = useState(0);
    const [message, setMessage] = useState("");
    const [value, setValue] = useState("");
    const inputRef = useRef(null);

    // 1. 숫자 증가
    const onlncrease = () => {
        setNumber(number + 1);
        setMessage ("");
    };

    // 2. 숫자 감소
    const onDecrease = () => {
        const newNumber = number -1;
        if(newNumber < 0) {
            setMessage("0이상 입력하세요.");
            inputRef.current.focus();
            return;
        } 
        setNumber(newNumber);
        setMessage("");
    };

    // 3. 양수, 음수, 정수만 입력
    const onChange = (e) => {
        const v = e.target.value;
        if(/^-?\d*$/.test(v)) {
            setValue(v);
            setMessage("");
        } else {
            setMessage("정수만 입력하세요.");
        }
    };

    // 4. 입력한 숫자만큼 더하기
    const onAdd = () => {
        if (value === "" || value === "-") {
            setMessage("정수를 입력하세요.");
            inputRef.current.focus();
            return;
        }
        setNumber(number + Number(value));
        setValue("");
        setMessage("");
    };

    return (
        <div>
            <h2>{number}</h2>
            
            <Viewer number={number} />

            <Buttons
                onIncrease={onlncrease}
                onDecrease={onDecrease}
            />

            <Inputs
            inputRef={inputRef}
            message={message}
            value={value}
            onChange={onChange}
            onAdd={onAdd}
            />
        </div>
    );
}
export default Body9Inputs;