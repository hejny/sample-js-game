export class Vector2 {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    static Zero() {
        return new Vector2(0, 0);
    }

    clone() {
        return new Vector2(this.x, this.y);
    }

    addInPlace(vector) {
        this.x += vector.x;
        this.y += vector.y;
        return this;
    }

    scale(ratio) {
        return new Vector2(this.x * ratio, this.y * ratio);
    }

    scaleInPlace(ratio) {
        this.x *= ratio;
        this.y *= ratio;
        return this;
    }
}
