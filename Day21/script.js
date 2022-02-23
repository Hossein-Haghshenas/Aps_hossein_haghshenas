// Maximum Edge of a Triangle

/* Create a function that finds the maximum range of a triangle's third edge,
 where the side lengths are all integers. */

function nextEdge(side1, side2) {
  return side1 + side2 - 1;
}

nextEdge(5, 4);
nextEdge(8, 3);
nextEdge(7, 9);
nextEdge(10, 4);
nextEdge(7, 2);
