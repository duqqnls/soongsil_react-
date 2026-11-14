//import 하기 
import { useState, useRef } from "react";
import Viewer from "./Viewer";
import Buttons from "./Buttons";

function Body9() {
    const [number, setNumber] = useState(0);
    const [message, setMessage] = useState("");
    const inputRef = useRef(null); // input 참조
    const onIncrease = () => {
        setNumber(number+1); 
        setMessage("");
    };
    
    const onDecrease = () => {
        const newNumber = number - 1;
        setNumber(newNumber);
        if (newNumber < 0) {
            setMessage("0이상 입력하세요.");
            inputRef.current.focus(); // useRef 활용
        }
    };

return (
    <div>
      <h2>{number}</h2>
      <Viewer number={number} />
      <Buttons  onIncrease={onIncrease}  
                    onDecrease={onDecrease}  />
      <div style={{ marginTop: "20px" }}>
        <input ref={inputRef} />
        <p style={{ color: "red" }}>{message}</p>
      </div>
    </div>
  );
}
export default Body9;