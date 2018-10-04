import { Vector2 } from './Vector2.js';

export class Spaceship {
    constructor(position, size, color) {
        this.position = position;
        this.movement = Vector2.Zero();
        this.size = size;
        this.color = color;
    }

    render(ctx) {
        ctx.beginPath();
        ctx.arc(
            this.position.x,
            this.position.y,
            this.size,
            0,
            Math.PI * 2,
            true,
        );
        ctx.closePath();
        ctx.fillStyle = this.color;
        ctx.fill();
    }
}
