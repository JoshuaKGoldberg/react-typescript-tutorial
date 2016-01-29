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