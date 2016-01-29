var a = 7; // a is number
var b = "hello"; // b is string
var c = [1, 2, 3]; // c is number[]
var d; // d is any (unknown)

// e is an object with .x and .y
var e = {
    x: 7,
    y: 14
};

// x is a function that takes two numbers and returns a number
var f = function (x: number, y: number) {
    return x + y;
}

// g is number because that's what f returns
var g = f(e.x, e.y);

// h is a number or a string
var h: number | string;

// i is a number or a string, even though we know it's a number
var i: number | string = f(e.x, e.y);

// Compiler error if you uncomment this (type mismatch!)
// var j: boolean = i;

console.log("Voila!", a, b, c, d, e, f, g, h, i);