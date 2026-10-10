let date = new Date(); // 현재 날짜 및 시간 객체 생성 (UTC 기준)
console.log(date); // 2026-03-2T --> 년-월-일T시:분:초.밀리초Z(.747ms=0.746초)
let date2 = new Date(2026, 2, 27); // 로컬기준 (한국 KST) 생성 (0월 ~ 11월, 3월 -> 2)
console.log(date2.getFullYear()); // 2026
console.log(date2.getMonth()); // 2--> 3월
console.log(date2.getDate()); // 27
console.log(date2.getDay()); // 5 (금요일, 일=0)
console.log(date2); // UTC 기준 2026-03-26T15:00:00.000Z

date2.setFullYear(2030);
date2.setMonth(11);
date2.setDate(25);
console.log(date2.toString()); // 로컬기준(KST) Wed Dec 25 2030 00:00:00 GMT+0900 (한국 표준식)
console.log(date2.toDateString()); // 로컬기준(KST) Wed Dec 25 2030
console.log(date2.toLocaleString()); // 로컬기준(KST) 2030.12.25 AM12:00:00
console.log(date2.toLocaleDateString()); // 로컬기준(KST) 2030.12.25
