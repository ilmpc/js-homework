/**
 * @jest-environment node
 */

import { sequence, bind, sum, createStorage } from '../../tasks/02-functions'

describe('function sequence', () => {
  it('should return function generator', () => {
    const generator = sequence()
    const generator1 = sequence(7, 1)
    const generator2 = sequence(4)

    expect(generator).toEqual(expect.any(Function))
    expect(generator1).toEqual(expect.any(Function))
    expect(generator2).toEqual(expect.any(Function))

    expect(generator()).toBe(1)
    expect(generator1()).toBe(8)
    expect(generator2()).toBe(5)

    expect(generator()).toBe(2)
    expect(generator1()).toBe(9)
    expect(generator2()).toBe(6)

    expect(generator()).toBe(3)
    expect(generator1()).toBe(10)
    expect(generator2()).toBe(7)
  })

  it('should work with not a number', () => {
    const generator = sequence(null)
    expect(generator).toEqual(expect.any(Function))

    expect(generator()).toBe(1)
    expect(generator()).toBe(2)
    expect(generator()).toBe(3)
  })
})

describe('function bind', () => {
  function returnContext (...nums) {
    if (!nums.length) return this
    return this + nums.reduce((acc, el) => acc + el)
  }
  it('should set context to function', () => {
    const fakeBind = bind(returnContext, 12)
    expect(fakeBind()).toEqual(12)

    const fakeBind1 = bind(returnContext, null)
    expect(fakeBind1()).toEqual(null)

    const fakeBind2 = bind(returnContext)
    expect(fakeBind2()).toBeUndefined()
  })
  it('should set context and pass parameters', () => {
    const fakeBind3 = bind(returnContext, 5, 5)
    expect(fakeBind3()).toEqual(10)

    const fakeBind4 = bind(returnContext, '5', 5)
    expect(fakeBind4()).toEqual('55')
  })
})

describe('function sum', () => {
  it('should return undefined if no context set', () => {
    expect(() => sum(2, 3)).toThrow()
  })

  it('should return valide result', () => {
    const fakeSum = sum.bind({ sum: 0 }, 2, 3)

    expect(fakeSum()).toEqual(5)
    expect(fakeSum(3, 4)).toEqual(12)

    const fakeSum1 = sum.bind({ sum: 10 })

    expect(fakeSum1()).toEqual(10)
    expect(fakeSum1(null)).toEqual(10)
  })
})

describe('function storage', () => {
  it('should set value to array and return array of string', () => {
    const storage = createStorage()
    expect(storage).toEqual(expect.any(Function))

    expect(storage()).toEqual(expect.any(Array))
    expect(storage()).toEqual([])

    storage('Hello')
    storage('Hey')

    expect(storage()).toEqual(['Hello', 'Hey'])

    const storage1 = createStorage()
    storage1(1)
    storage1(2)

    expect(storage1()).toEqual(['1', '2'])

    const storage2 = createStorage()
    storage2(null)
    storage2(2)

    expect(storage2()).toEqual(['null', '2'])
  })
  it('storage should not changed after changing returned array', () => {
    const storage = createStorage()
    const lines = ['Hi', 'There', 'Are you ok?']
    lines.forEach((el) => storage(el))
    expect(storage()).toEqual(lines)
    const returnedArray = storage()
    returnedArray.pop()
    expect(storage()).toEqual(lines)
  })
})
