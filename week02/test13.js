// 객체 생성
let person = { 
    name : "송여빈",
    age : 26,
    "like cat" : true
};

// 삽입 (추가)
person.gender = "male"; // gender 속성 추가
let keyName = "email"; // email 속성 추가
person[keyName] = "abc@test.com"; // person["email"] = "abc@test.com";
console.log(person.gender); // person객체의 gender속성만 출력
console.log(person["email"]);
console.log(person[keyName]);

// 수정 
person.name = "송피자"; // 이름 속성 수정
person["age"] = 5; // 나이 속성 수정
console.log(person); // person 객체 정보 출력 

// 삭제 
delete person.gender;
delete person["age"];
console.log(person);


