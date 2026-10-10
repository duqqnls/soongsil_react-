function fetchUsers() {
    return new Promise((resolve) => {
        setTimeout(() => { // 비동기
            resolve([
                {name : "철수", active:true},
                {name : "영희", active:false},
                {name : "민수", active:true},
            ]);
        }, 1000);
    });
}

fetchUsers()
    .then((res) => {
        const filter = res.filter((item) => item.active).map((item) => item.name)
        console.log('활성 사용자:', filter);
    })