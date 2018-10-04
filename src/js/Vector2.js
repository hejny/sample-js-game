export class Vector2 {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    static Zero() {
        return new Vector2(0, 0);
    }

    addInPlace(vector) {
        this.x += vector.x;
        this.y += vector.y;
    }

    scale(ratio) {
        return new Vector2(this.x * ratio, this.y * ratio);
    }
}
