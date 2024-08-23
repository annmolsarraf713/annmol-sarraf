const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');

// Game variables
let bird = { x: 50, y: 150, width: 20, height: 20, gravity: 1.5, lift: -15, velocity: 0 };
let pipes = [];
let frame = 0;
let score = 0;

// Load images
const birdImg = new Image();
birdImg.src = 'bird.png'; // Add a bird image in your project directory

// Event listener for bird jump
document.addEventListener('keydown', () => {
    bird.velocity = bird.lift;
});

// Game loop
function gameLoop() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Draw bird
    ctx.drawImage(birdImg, bird.x, bird.y, bird.width, bird.height);

    // Bird physics
    bird.velocity += bird.gravity;
    bird.y += bird.velocity;

    // Create pipes
    if (frame % 90 === 0) {
        let pipeHeight = Math.floor(Math.random() * (canvas.height / 2));
        pipes.push({ x: canvas.width, y: 0, width: 20, height: pipeHeight });
        pipes.push({ x: canvas.width, y: pipeHeight + 100, width: 20, height: canvas.height - pipeHeight - 100 });
    }

    // Draw pipes
    pipes.forEach((pipe, index) => {
        ctx.fillStyle = '#000';
        ctx.fillRect(pipe.x, pipe.y, pipe.width, pipe.height);
        pipe.x -= 2;

        // Remove off-screen pipes
        if (pipe.x + pipe.width < 0) {
            pipes.splice(index, 1);
            score++;
        }

        // Check for collisions
        if (bird.x < pipe.x + pipe.width && bird.x + bird.width > pipe.x && bird.y < pipe.y + pipe.height && bird.y + bird.height > pipe.y) {
            alert('Game Over! Score: ' + score);
            document.location.reload();
        }
    });

    // Check for ground collision
    if (bird.y + bird.height > canvas.height) {
        alert('Game Over! Score: ' + score);
        document.location.reload();
    }

    frame++;
    requestAnimationFrame(gameLoop);
}

gameLoop();
