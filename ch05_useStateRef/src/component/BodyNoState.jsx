function BodyNoState() {
    let count = 0;
    const onincrease = () => {count += 1; };
  return (
    <div>
        <h2>{count}</h2>
        <button onClick={onincrease}> + </button>
    </div>
  )  
}
export default BodyNoState