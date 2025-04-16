const circle = document.getElementById('circle');
let targetX = 0;
let targetY = 0;

document.addEventListener('mousemove', (event) => {
    targetX = event.pageX;
    targetY = event.pageY;
});

function animate() {
    const currentX = parseFloat(circle.style.left) || 0;
    const currentY = parseFloat(circle.style.top) || 0;

    const newX = currentX + (targetX - currentX) * 0.2; // Adjust easing factor (0.1) for more/less delay
    const newY = currentY + (targetY - currentY) * 0.2;

    circle.style.left = `${newX}px`;
    circle.style.top = `${newY}px`;

    requestAnimationFrame(animate);
}

animate();
