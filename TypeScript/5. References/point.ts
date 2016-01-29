class Point implements IPoint {
    x: number; 
    y: number;
    
    constructor(x: number, y: number) {
        [this.x, this.y] = [x, y];
    }
    
    getAngle(): number {
        return Math.sqrt(this.x * this.x + this.y * this.y);
    }
}
