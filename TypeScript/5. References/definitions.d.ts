interface IPoint {
    x: number;
    y: number;
}

interface IVector extends IPoint {
    speed: number;
}

declare var declaredPoint: IPoint;