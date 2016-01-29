interface IPoint1 {
    x: number;
    y: number;
}

interface IHorizontal {
    x: number;
}

interface IVertical {
    y: number;
}

interface IPoint2 extends IHorizontal, IVertical { }

var myPoint: IPoint1 = {
    x: 7,
    y: 14
};

var otherPoint: IPoint2 = myPoint;

console.log("Points", myPoint, otherPoint);