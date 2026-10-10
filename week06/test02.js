const orders = [
    { id: 1, price: 10000, createdAt: new Date("2025-01-10")},
    { id: 2, price: 20000, createdAt: new Date("2025-02-05")},
    { id: 3, price: 15000, createdAt: new Date("2025-02-20")}
];

const febOrders = orders.filter(order => {
    const date = order.createdAt;
    return date.getFullYear() === 2025 && date.getMonth() === 1;
});

const total = febOrders.reduce((sum, order) => sum + order.price, 0);

total >= 30000 && console.log("VIP 고객"); // 단락평가

console.log("2월 총액:", total);