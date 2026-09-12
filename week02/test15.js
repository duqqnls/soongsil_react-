const scores = [80, 55, 90, 30, 100, 67];
let sum = 0; 
let count = []; // 60점이상 데이터

let max = scores[0];

for(let i=0; i<scores.length; i++) {
    sum += scores[i];
    if(scores[i]>=60) { count.push(scores[i]); }
    if(scores[i]>max) max = scores[i];
}

let passData = scores.filter(s => s >= 60);
console.log("평균 : ", (sum/scores.length).toFixed(2));
console.log("합격자 : ", count);
console.log("합격자(filter) : ", passData);
console.log("최고점 : " , max);
console.log("합격인원 : ", count.length);
