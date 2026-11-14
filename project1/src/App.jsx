import './App.css'
import { useRef,useEffect,useState } from 'react'
import Viewer from './component/Viewer'
import Controller from './component/Controller'

function App() {
  const [count, setCount] = useState(0);
  const handleSetCount = (value) => {
    setCount(count + value);
  };
  const didMountRef = useRef(false);
  useEffect(() => {
    if(!didMountRef.current) { // 처음 실행 제외
      didMountRef.current = true;
      return;
    } else {
      console.log("컴포넌트 업데이트 !");
    } 
  });
  
  useEffect(() => {
    const timer = setInterval(() => {
      console.log("깜빡");
    }, 1000);
    return () => { //클린업 함수
      console.log("클린업");
      clearInterval(timer);
    };
  }, [count]);
  
  return (
    <div className="App">
      <h1>Simple Counter</h1>
    <section>
      <Viewer count = {count} />
    </section>
    <section>
      <Controller handleSetCount={handleSetCount} />
    </section>
    </div>
  );
}

export default App
