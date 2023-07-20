import FizzBuzz from '../../src/chapter-2/fizz-buzz'

describe('FizzBuzz', () => {
  let spy: jest.SpyInstance
  let spyCalls: any[]

  beforeAll(() => {
    spy = jest.spyOn(console, 'log').mockImplementation(() => {})
    FizzBuzz()
    spyCalls = spy.mock.calls
  })

  afterAll(() => {
    spy.mockRestore()
  })

  it('should use console.log to print all the numbers from 1 to 100', () => {
    expect(spy).toHaveBeenCalledTimes(100)
    expect(spy).toHaveBeenLastCalledWith('Buzz')
  })

  it('should print "Fizz" instead of the number, for numbers divisible by 3', () => {
    expect(spyCalls[2][0]).toBe('Fizz')
    expect(spyCalls[5][0]).toBe('Fizz')
  })

  it('should print "Buzz" for numbers divisible by 5 (and not 3)', () => {
    expect(spyCalls[4][0]).toBe('Buzz')
    expect(spyCalls[9][0]).toBe('Buzz')
  })

  it('should print "FizzBuzz" for numbers divisible by 3 and 5', () => {
    expect(spyCalls[14][0]).toBe('FizzBuzz')
    expect(spyCalls[29][0]).toBe('FizzBuzz')
  })

  it('should print the number itself for other numbers', () => {
    expect(spyCalls[0][0]).toBe(1)
    expect(spyCalls[2][0]).toBe('Fizz') // 3 is replaced by 'Fizz'
    expect(spyCalls[3][0]).toBe(4)
  })
})
