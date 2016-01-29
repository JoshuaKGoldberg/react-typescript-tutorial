interface IPoint {
    x: number;
    y: number;
}

class Point {
    x: number; 
    y: number;
    
    constructor(x: number, y: number) {
        [this.x, this.y] = [x, y];
    }
    
    getAngle(): number {
        return Math.sqrt(this.x * this.x + this.y * this.y);
    }
}

interface IVector extends IPoint {
    speed: number;
}

class Vector extends Point {
    speed: number;
    
    constructor(x: number, y: number, speed: number) {
        super(x, y);
        this.speed = speed;
    }
    
    isInMotion(): boolean {
        return this.speed !== 0;
    }
}

console.log("Vector", new Vector(21, 28, 7));