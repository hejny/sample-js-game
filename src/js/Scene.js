export class Scene {
    constructor(sceneElement) {
        const { width, height } = sceneElement.getBoundingClientRect();
        sceneElement.width = width;
        sceneElement.height = height;
        this.ctx = sceneElement.getContext('2d');
        this.objects = [];
    }

    addObject(object) {
        this.objects.push(object);
    }

    render() {
        this.ctx.clearRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height);
        for (const object of this.objects) {
            object.render(this.ctx);
        }
    }
}
