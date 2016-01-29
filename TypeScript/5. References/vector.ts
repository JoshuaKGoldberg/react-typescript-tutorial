class Vector extends Point implements IVector {
    speed: number;
    
    constructor(x: number, y: number, speed: number) {
        super(x, y);
        this.speed = speed;
    }
    
    isInMotion(): boolean {
        return this.speed !== 0;
    }
}