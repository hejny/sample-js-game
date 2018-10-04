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

    window.document.addEventListener('keydown', (event) => {
        switch (event.keyCode) {
            case 39: //right
            case 68:
                spaceship.movement.x = 10;
                break;
            case 37: //left
            case 65:
                spaceship.movement.x = -10;
                break;
            case 38: //up
            case 87:
                spaceship.movement.y = 10;
                break;
            case 40: //down
            case 83:
                spaceship.movement.y = -10;
                break;

            default:
                console.log('pressed', event.keyCode);
        }
    });
});
