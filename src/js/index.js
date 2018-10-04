import { Scene } from './Scene.js';
import { Mesh } from './Mesh.js';
import { Vector2 } from './Vector2.js';
import {
    FRICTION,
    SPACESHIP_SPEED,
    SPACESHIP_SPEED_ROTATION,
} from './config.js';

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
    const spaceship = new Mesh(
        './assets/tux.png',
        new Vector2(0.5, 0.7),
        2,
        scene.size.scaleInPlace(0.5),
        -Math.PI / 2,
        160,
    );

    scene.addObject(spaceship);

    let timeLast = null;
    function loop(time) {
        const controls = pressedControls();
        if (controls.RIGHT) {
            spaceship.rotationMovement = SPACESHIP_SPEED_ROTATION;
        }
        if (controls.LEFT) {
            spaceship.rotationMovement = -SPACESHIP_SPEED_ROTATION;
        }
        if (controls.UP) {
            spaceship.movement.x =
                Math.cos(spaceship.rotation) * SPACESHIP_SPEED;
            spaceship.movement.y =
                Math.sin(spaceship.rotation) * SPACESHIP_SPEED;

            const particle = new Mesh(
                './assets/windows.png',
                new Vector2(0.5, 0.5),
                1,
                spaceship.position.clone(),
                -Math.PI / 2,
                10,
            );
            particle.movement = spaceship.movement
                .scale(-2)
                .addInPlace(
                    new Vector2(
                        (Math.random() - 0.5) * 100,
                        (Math.random() - 0.5) * 100,
                    ),
                ); //todo to config
            particle.rotationMovement =
                ((Math.random() - 0.5) * Math.PI * 2) / 10;
            particle.growth = 2;
            particle.lifetime = 1;
            scene.addObject(particle);
        }

        if (timeLast) scene.update((time - timeLast) / 1000);
        timeLast = time;
        scene.render();
        requestAnimationFrame(loop);
    }
    requestAnimationFrame(loop);
});
