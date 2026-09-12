function parentFunc(callBack) {
    console.log("parent");
    callBack();
}

function childFunc() {
    console.log("child");
}

parentFunc(childFunc);