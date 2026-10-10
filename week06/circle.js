const PI = 3.141592;

function getArea(radius) {
    return PI * radius * radius;
}

function getAround(radius) {
    return 2 * PI * radius;
}

export default {
    PI, getArea, getAround 
};