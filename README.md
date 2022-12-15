# dot-sizes-p5js

In this example, the drawFlowerOfLife function is used to recursively draw a flower of life pattern on the canvas using the p5.js ellipse function. The drawFlowerOfLife function takes four arguments: the x and y coordinates of the starting point for the flower of life, the s size of the flower of life, and the n number of points in the flower of life. The function first sets the fill color for the current iteration of the flower of life using the value of n, and then calculates the radius of the current iteration of the flower of life. Next, the function uses the ellipse function to draw the current iteration of the flower of life.

Finally, the function checks if the size of the current iteration of the flower of life is greater than a certain threshold, and if so, it recursively calls itself to draw the next four iterations of the flower of life in the top left, top right, bottom left, and bottom right corners of the current iteration. This recursive process continues until the size of the flower of life becomes smaller than the threshold, at which point the function returns and no further iterations are drawn.

You can adjust the size and number of points of the flower of life by modifying the corresponding variables at the top of the code. You can also change the colors used for the flower of life by modifying the color1 and color2 variables in the setup function.

![alt text](https://raw.githubusercontent.com/guillaumelauzier/dot-sizes-p5js/main/Screenshot%202022-12-15%20at%2003.44.52.png)

