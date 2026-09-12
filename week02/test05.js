{
    let varC = 10;
    let varB = 20;
    console.log(varC ?? varB); // 10
}

{
    let varC = null;
    let varB = 20;
    console.log(varC ?? varB); //20 
}

{
    let varC = null;
    let varB = undefined;
    console.log(varC ?? varB); // undefined
}

{
    let varC = undefined;
    let varB = null;
    console.log(varC ?? varB); // null
}