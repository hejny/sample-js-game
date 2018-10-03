window.addEventListener('load', () => {

    const scene = window.document.getElementById('scene');
    const {
        width,
        height
    } = scene.getBoundingClientRect();
    console.log(width, height);
    scene.width = width;
    scene.height = height;
    const ctx = scene.getContext('2d');

    ctx.beginPath();
    ctx.arc(333, 333, 60, 0, Math.PI * 2, true);
    ctx.closePath();
    ctx.fillStyle = '#906090';
    ctx.fill();

});