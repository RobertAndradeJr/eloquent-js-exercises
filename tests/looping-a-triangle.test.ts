import loopingATriangle from '../src/looping-a-triangle'

describe("loopingATriangle function", () => {
  let spy: jest.SpyInstance;

  beforeEach(() => {
    // mock console.log to prevent output in terminal
    spy = jest.spyOn(console, 'log').mockImplementation(() => {});
  });

  afterEach(() => {
    spy.mockRestore();
  });

  it("should be called 7 times", () => {
    loopingATriangle();
    expect(spy).toHaveBeenCalledTimes(7);
  });

  const triangle = [
    '#',
    '##',
    '###',
    '####',
    '#####',
    '######',
    '#######'
  ]

  triangle.forEach((str, i) => {
    it(`should be called with ${str}`, () => {
      loopingATriangle();
      expect(spy).toHaveBeenNthCalledWith(i + 1, str);
    })
  })
})
