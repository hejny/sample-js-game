import { Scene } from './Scene.js';
import { Spaceship } from './Spaceship.js';
import { Vector2 } from './Vector2.js';
import { FRICTION, SPACESHIP_SPEED } from './config.js';

let pressedKeys = [];
window.document.addEventListener('keydown', (event) => {
    if (!pressedKeys.includes(event.keyCode)) {
        pressedKeys.push(event.keyCode);
    }
});
window.document.addEventListener('keyup', (event) => {
    pressedKeys = pressedKeys.filter((keyCode) => keyCode !== event.keyCode);
});
function pressedControls() {
    return {
        UP: pressedKeys.includes(38) || pressedKeys.includes(87),
        DOWN: pressedKeys.includes(40) || pressedKeys.includes(83),
        LEFT: pressedKeys.includes(37) || pressedKeys.includes(65),
        RIGHT: pressedKeys.includes(39) || pressedKeys.includes(68),
    };
}

window.addEventListener('load', () => {
    const sceneElement = window.document.getElementById('scene');
    const scene = new Scene(sceneElement, FRICTION);
    const spaceship = new Spaceship(new Vector2(333, 333), 60, '#906090');

    scene.addObject(spaceship);

    let timeLast = null;
    function loop(time) {
        const controls = pressedControls();
        if (controls.RIGHT) {
            spaceship.movement.x = SPACESHIP_SPEED;
        }
        if (controls.LEFT) {
            spaceship.movement.x = -SPACESHIP_SPEED;
        }
        if (controls.DOWN) {
            spaceship.movement.y = SPACESHIP_SPEED;
        }
        if (controls.UP) {
            spaceship.movement.y = -SPACESHIP_SPEED;
        }

        if (timeLast) scene.update((time - timeLast) / 1000);
        timeLast = time;
        scene.render();
        requestAnimationFrame(loop);
    }
    requestAnimationFrame(loop);
});
