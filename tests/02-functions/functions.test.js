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
  it('should set context and sum params', () => {
    function returnContext () {
      return this
    }
    returnContext.sum = 0
    
    const fakeBind = bind(sum, returnContext, 12)
    expect(fakeBind()).toEqual(12)

    const fakeBind05 = bind(sum, returnContext, 5, 10, 8)
    expect(fakeBind05(3, 1)).toEqual(27)

    const fakeBind1 = bind(sum, returnContext, null)
    expect(fakeBind1()).toEqual(null)

    const fakeBind2 = bind(sum, returnContext)
    expect(fakeBind2()).toBeUndefined()
  })
})

describe('function sum', () => {
  it('should return undefined on this.sum', () => {
    try {
      const result = sum(2, 3)
    } catch (e) {
      expect(e).toBeDefined()
    }
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
})
