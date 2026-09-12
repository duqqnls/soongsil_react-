{let x = true;
    console.log(typeof x); // 불린 boolean
}
console.log(typeof (3.14 + 2)); // 숫자 number
console.log(typeof'원주율'); // 문자열 string

{let x; // 값을 아직 할당하지 않은 상태
    console.log(typeof (x)); // undefined 
}

{let x = null; // 값을 아직 할당하지 않은 상태
    console.log(typeof x); // object 
}