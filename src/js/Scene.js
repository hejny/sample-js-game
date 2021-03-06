import { Vector2 } from './Vector2.js';

export class Scene {
    constructor(sceneElement, friction) {
        const { width, height } = sceneElement.getBoundingClientRect();
        sceneElement.width = width;
        sceneElement.height = height;
        this.ctx = sceneElement.getContext('2d');
        this.friction = friction;
        this.objects = [];
    }

    addObject(object) {
        this.objects.push(object);
    }

    render() {
        this.ctx.clearRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height);
        for (const object of this.objects.sort((a, b) =>
            Math.sign(a.zIndex - b.zIndex),
        )) {
            object.render(this.ctx);
        }
    }

    update(delta) {
        for (const object of this.objects) {
            object.position.addInPlace(object.movement.scale(delta));
            object.rotation += object.rotationMovement;
            object.width += object.growth;

            const frictionWithDelta = Math.pow(this.friction, delta);
            object.movement.scaleInPlace(frictionWithDelta);
            object.rotationMovement *= frictionWithDelta;
            object.growth *= frictionWithDelta;

            if (object.lifetime !== -1) {
                object.lifetime -= delta;
            }
        }
        this.objects = this.objects.filter(
            (object) => object.lifetime === -1 || object.lifetime > 0,
        );
    }

    get size() {
        return new Vector2(this.ctx.canvas.width, this.ctx.canvas.height);
    }
}
