// App.jsx 
import PropsHeader from './component/PropsHeader'
import PropsBody from './component/PropsBody'
import PropsFooter from './component/PropsFooter'
import './App.css'
import { Children } from 'react'

function ChildComp() {
  return <div>child componenet</div>;
}
function App() {
  const name = "송여빈";
  const bodyProps = {name: "송여빈", location: "평택시"};
  return (
    <>
      <PropsHeader name={name}/> {/* 속성 값 넘기기*/}
      <PropsBody> <ChildComp /> </PropsBody> {/* 함수 넘기기*/}
      <PropsFooter {...bodyProps} /> {/* 여러개값 전개연산자로 넘기기*/}
    </>
  );
}
export default App
