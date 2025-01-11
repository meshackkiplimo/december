function drawBall(ctx, x, y, size, hue) {
    // Calculate the radius of the ball
    const radius = size / 2;

    // Begin a new path
    ctx.beginPath();

    // Draw a circle
    ctx.arc(x, y, radius, 0, Math.PI * 2);

    // Set the fill style using the hue provided
    ctx.fillStyle = `hsl(${hue}, 100%, 50%)`;

    // Fill the circle
    ctx.fill();
}
