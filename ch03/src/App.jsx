import React from "react"
import {format} from "date-fns"; //date-fns 라이브러리에서 format 함수만 가져옴(import)

function App() {
  const today = new Date();
  const formattedDate = format(today, "yyyy-MM-dd HH:mm:ss"); // 날짜 포맷 함수 사용

  return (
    <div>
      <h1> 오늘 날짜 </h1>
      <p>{formattedDate}</p>
    </div>
  );
}  

export default App;
