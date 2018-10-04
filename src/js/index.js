import { Scene } from './Scene.js';
import { Spaceship } from './Spaceship.js';
import { Vector2 } from './Vector2.js';

window.addEventListener('load', () => {
    const sceneElement = window.document.getElementById('scene');
    const scene = new Scene(sceneElement);
    const spaceship = new Spaceship(new Vector2(333, 333), 60, '#906090');
    spaceship.movement = new Vector2(10, 0);

    scene.addObject(spaceship);

    let timeLast = null;
    function loop(time) {
        if (timeLast) scene.update((time - timeLast) / 1000);
        timeLast = time;
        scene.render();
        requestAnimationFrame(loop);
    }
    requestAnimationFrame(loop);
});
