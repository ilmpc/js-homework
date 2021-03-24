/**
 * @jest-environment node
 */

import { _testable } from '../../tasks/05-dom-events/dom/dom.js'

describe('dom', () => {
  it('should capitalize', () => {
    expect(_testable.capitalize('text')).toBe('Text')
    expect(_testable.capitalize('1ext')).toBe('1ext')
    expect(_testable.capitalize('q')).toBe('Q')
    expect(_testable.capitalize('Cap')).toBe('Cap')
    expect(_testable.capitalize('')).toBe('')
  })
  it('should convert kebab to camelCase', () => {
    expect(_testable.kebabToCamelCase('alreadyCamelCase')).toBe('alreadyCamelCase')
    expect(_testable.kebabToCamelCase('kebab-case')).toBe('kebabCase')
    expect(_testable.kebabToCamelCase('-kebab-case')).toBe('kebabCase')
    expect(_testable.kebabToCamelCase('-kebab-case-')).toBe('kebabCase')
    expect(_testable.kebabToCamelCase('-kebab')).toBe('kebab')
    expect(_testable.kebabToCamelCase('kebab-')).toBe('kebab')
    expect(_testable.kebabToCamelCase('kebab')).toBe('kebab')
  })
  it('should convert string with kebab-case classes to camelCase', () => {
    expect(_testable.convertClassesStringToCamelCase('kebab-case')).toBe('kebabCase')
    expect(_testable.convertClassesStringToCamelCase('   kebab-case')).toBe('kebabCase')
    expect(_testable.convertClassesStringToCamelCase('   camelCase')).toBe('camelCase')
    expect(_testable.convertClassesStringToCamelCase('some-t   camelCase')).toBe('someT camelCase')
    expect(_testable.convertClassesStringToCamelCase('some-t -sase ')).toBe('someT sase')
    expect(_testable.convertClassesStringToCamelCase('left-   -center-  -sase ')).toBe('left center sase')
    expect(_testable.convertClassesStringToCamelCase('left-   -center-kase  -sase ')).toBe('left centerKase sase')
    expect(_testable.convertClassesStringToCamelCase('')).toBe('')
    expect(_testable.convertClassesStringToCamelCase('-')).toBe('')
    expect(_testable.convertClassesStringToCamelCase('---')).toBe('')
  })
})
