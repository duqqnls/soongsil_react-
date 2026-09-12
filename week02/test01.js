// 스코프(범위) 실습
let uName = '송여빈';
let age = 26;
const age2 = 25;
{
    let age = 33;
    const age2 = 35;
    console.log('uName*' + uName); // 송여빈
    console.log('age*' + age); // 33
    console.log('age2*' + age2); // 35 
}
console.log('uName**' + uName); // 송여빈
console.log('age**' + age); // 33
console.log('age2**' + age2); // 35 