function getUser() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const success = false; // true
            if(success) {
                resolve("송여빈");
            }
            else {
                reject("사용자 정보를 가져오지 못했습니다."); 
            }
        }, 2000);
    });
}

getUser()
    .then((user) => {
        console.log("사용자:", user);
    })
    .catch((error) => {
        console.log("에러:", error);
    })
    .finally(() => {
        console.log("작업이 끝났습니다..");
    }) // 선택


