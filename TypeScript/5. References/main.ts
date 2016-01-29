/// <reference path="definitions.d.ts" />
/// <reference path="point.ts" />
/// <reference path="vector.ts" />

var myPoint = new Point(7, 14);
var myVector = new Vector(21, 28, 7);

console.log("Points:", myPoint, declaredPoint);
console.log("Vector:", myVector, myVector.getAngle(), myVector.isInMotion());