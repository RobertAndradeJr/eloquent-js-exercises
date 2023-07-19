/**
 * Chessboard
Write a program that creates a string that represents an 8×8 grid, using newline characters to separate lines.
At each position of the grid there is either a space or a "#" character. The characters should form a chessboard.
Passing this string to console.log should show something like this:

 # # # #
# # # # 
 # # # #
# # # # 
 # # # #
# # # # 
 # # # #
# # # #

When you have a program that generates this pattern,
define a binding size = 8 and change the program so that it works for any size,
outputting a grid of the given width and height.
 */
const chessboard = (size = 8) => {
  // store the board as a string
  let board = "";

  // loop through the rows
  for (let y = 0; y < size; y++) {
    // loop through the columns
    for (let x = 0; x < size; x++) {
      // if the sum of the x and y coordinates is even,
      board += (x + y) % 2 === 0
      // add a space
      ? " "
      // otherwise, add a hash
      : "#"

    }
    // add a newline character to the end of each row
    board += "\n"
  }

  return board;
}

export default chessboard;
