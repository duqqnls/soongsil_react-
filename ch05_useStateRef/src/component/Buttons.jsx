// Buttons.jsx
function Buttons({ onIncrease, onDecrease }) {
  return (
    <div>
      <button onClick={onDecrease}>-</button>
      <button onClick={onIncrease}>+</button>
{/*   이벤트 함수에 매개변수 전달을 할 경우 JS 패턴 호출 */}
{/* <button onClick={() => onIncrease(1)}>+</button> */}
    </div>
  );
} 
export default Buttons;
