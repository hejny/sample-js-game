import { Vector2 } from './Vector2.js';

export class Spaceship {
    constructor(src, center, position, rotation, width, color) {
        this.image = window.document.createElement('IMG');
        this.image.src = src;
        this.position = position;
        this.center = center;
        this.rotation = rotation;
        this.movement = Vector2.Zero();
        this.rotationMovement = 0;
        this.width = width;
        this.color = color;
    }

    get size() {
        return new Vector2(
            this.width,
            (this.width / this.image.width) * this.image.height,
        );
    }

    render(ctx) {
        ctx.save();
        ctx.translate(this.position.x, this.position.y);
        ctx.rotate(this.rotation + Math.PI / 2);
        ctx.drawImage(
            this.image,
            0,
            0,
            this.image.width,
            this.image.height,
            -this.size.x * this.center.x,
            -this.size.y * this.center.y,
            this.size.x,
            this.size.y,
        );
        ctx.restore();
    }
}
