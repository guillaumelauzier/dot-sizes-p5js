// Define the size and number of points of the flower of life
let size = 400;
let numPoints = 6;

// Define the colors to use for the flower of life
let color1;
let color2;

function setup() {
  // Create the canvas and center the flower of life
  createCanvas(1000, 1000);
  translate(width / 2, height / 2);

  // Set the colors to use for the flower of life
  color1 = color(255, 0, 0);
  color2 = color(0, 0, 255);
}

function draw() {
  // Clear the canvas
  clear();

  // Draw the flower of life
  drawFlowerOfLife(0, 0, size, numPoints);
}

function drawFlowerOfLife(x, y, s, n) {
  // Set the fill color for the current iteration of the flower of life
  if (n % 2 == 0) {
    fill(color1);
  } else {
    fill(color2);
  }

  // Calculate the radius of the current iteration of the flower of life
  let r = s / 2;

  // Draw the current iteration of the flower of life
  ellipse(x, y, s, s);

  // Recurse to draw the next iteration of the flower of life
  if (s > 20) {
    drawFlowerOfLife(x - r, y - r, r, n + 1);
    drawFlowerOfLife(x + r, y - r, r, n + 1);
    drawFlowerOfLife(x - r, y + r, r, n + 1);
    drawFlowerOfLife(x + r, y + r, r, n + 1);
  }
}
