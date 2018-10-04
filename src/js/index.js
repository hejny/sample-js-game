import { Scene } from './Scene.js';
import { Spaceship } from './Spaceship.js';
import { Vector2 } from './Vector2.js';

window.addEventListener('load', () => {
    const sceneElement = window.document.getElementById('scene');
    const scene = new Scene(sceneElement);
    const spaceship = new Spaceship(new Vector2(333, 333), 60, '#906090');

    scene.addObject(spaceship);
    scene.render();
});
