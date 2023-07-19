import chessboard from '../src/chessboard'

describe('tests chessboard function', () => {
  it('should create a 2x2 chessboard', () => {
    const expectedBoard = " #\n# \n";
    expect(chessboard(2)).toBe(expectedBoard);
  });

  it('should create a 4x4 chessboard', () => {
    const expectedBoard = " # #\n# # \n # #\n# # \n";
    expect(chessboard(4)).toBe(expectedBoard);
  });

  it('should create an 8x8 chessboard', () => {
    const expectedBoard = " # # # #\n# # # # \n # # # #\n# # # # \n # # # #\n# # # # \n # # # #\n# # # # \n";
    expect(chessboard(8)).toBe(expectedBoard);
  });
});
