/**
 * Задача #1
 *
 * Реализуйте и экспортируйте по умолчанию функцию search,
 * которая принимает на вход document и имя тега, а возвращает массив из всех элементов,
 * соответствующих этому тегу. (без использования getElementsByTagName)
 */
export function search (element, tagName = '') {
  const founded = []
  if (!tagName) { return founded }

  tagName = tagName.toUpperCase()
  const takeAll = tagName === '*'
  const queue = new Queue()
  queue.push(element)

  while (queue.length > 0) {
    const node = queue.shift()
    if ((takeAll && node.tagName) || node.tagName === tagName) {
      founded.push(node)
    }
    queue.concat(Array.from(node.children))
  }

  return founded
}

class Queue {
  constructor () {
    this._inputStack = []
    this._outputStack = []
  }

  push (...items) {
    Array.prototype.push.apply(this._inputStack, items)
  }

  concat (items) {
    Array.prototype.push.apply(this._inputStack, items)
  }

  shift () {
    if (this._outputStack.length === 0) {
      this._outputStack = this._inputStack.reverse()
      this._inputStack = []
    }
    return this._outputStack.pop()
  }

  get length () {
    return this._inputStack.length + this._outputStack.length
  }
}

/**
 * Задача #2
 *
 * Реализуйте функцию normalize, которая нормализует имена классов для всех элементов на странице.
 * В данном случае это означает, что происходит преобразование всех классов, написанных с использованием kebab нотации,
 * в camelCase нотацию: text-center => textCenter
 *
 * Самый простой способ найти все элементы в документе – document.body.getElementsByTagName('*')
 */
export function normalize (localDocument) {
  const elements = Array.from(localDocument.getElementsByTagName('*'))
  elements
    .forEach((el) => {
      if (el.className) {
        el.className = convertClassesStringToCamelCase(el.className)
      }
    })
}

function capitalize (str) {
  return str.charAt(0).toUpperCase() + str.slice(1)
}

function kebabToCamelCase (str) {
  return str
    .split('-')
    .filter((el) => !!el)
    .map((el, ind) => ind === 0 ? el : capitalize(el))
    .join('')
}

function convertClassesStringToCamelCase (str) {
  return str
    .split(' ')
    .filter((el) => !!el)
    .map(kebabToCamelCase)
    .join(' ')
}

export const _testable = { capitalize: capitalize, kebabToCamelCase: kebabToCamelCase, convertClassesStringToCamelCase: convertClassesStringToCamelCase }
