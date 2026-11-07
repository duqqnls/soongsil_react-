import { useState } from "react";
import Button from "./Button";
import Viewer from "./Viewer";

const Body6 = () => {
    const [number, setNumber] = useState(0);
    const onincrease = () => {
        setNumber(number + 1);
    };

    const OnDecrease = () => {
        setNumber(number -1);
    };

    return (
        <>
            <h2>{number}</h2>
            <Viewer number ={number} />
            <Button
                onIncrease={onincrease}
                onDecrease={OnDecrease}
            />
        </>
    )
}

export default Body6;
