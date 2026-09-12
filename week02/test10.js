let greeting = function() {
    console.log("hello");
};
greeting();

function greetFunc() {
    console.log("hello2");
}

greetFunc();

let greeting2 = greetFunc;
greeting2();