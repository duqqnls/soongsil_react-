const Button = ({ onIncrease, onDecrease}) => {
    return (
        <div>
            <button onClick={onDecrease}>-</button>
            <button onClick={onIncrease}>+</button>
        </div>
    );
};

export default Button;
