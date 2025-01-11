// function drawTree(ctx, x, y, trunkWidth, trunkHeight, leafRadius, leafColor) {
//     // Draw the trunk
//     ctx.fillStyle = 'saddlebrown'; // Trunk color
//     ctx.fillRect(x - trunkWidth / 2, y, trunkWidth, trunkHeight);

//     // Draw the leafy part
//     ctx.beginPath();
//     ctx.arc(x, y - leafRadius, leafRadius, 0, Math.PI * 2); // Top circle
//     ctx.arc(x - leafRadius / 2, y - leafRadius / 2, leafRadius, 0, Math.PI * 2); // Left circle
//     ctx.arc(x + leafRadius / 2, y - leafRadius / 2, leafRadius, 0, Math.PI * 2); // Right circle
//     ctx.fillStyle = leafColor; // Leaf color
//     ctx.fill();
// }

// const canvas = document.querySelector('canvas');
// const ctx = canvas.getContext('2d');

// drawTree(ctx, 150, 200, 20, 50, 40, 'green');
// drawTree(ctx, 300, 250, 30, 60, 50, 'darkgreen');
