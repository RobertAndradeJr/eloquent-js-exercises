/* 
1. Looping A Triangle

Write a loop that makes seven calls to console.log to output the following triangle:

#
##
###
####
#####
######
#######

It may be useful to know that you can find the length of a string by writing .length after it.

    let abc = "abc"
    console.log(abc.length)
    // → 3
*/

/**
 * Outputs a triangle of `#` characters to the console
 * where the length of each line equals its 1-based index.
 *
 * @param {number} lines - The number of lines in the triangle.
 */
const loopingATriangle = (lines: number = 7) => {
  Array.from({ length: lines }, (_, i) => {
    const str = '#'.repeat(i + 1)
    console.log(str)
  })
}

export default loopingATriangle
