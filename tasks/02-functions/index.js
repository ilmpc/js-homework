/**
 * Задача #1
 *
 * Напишите функцию sequence(start, step), которая принимает два параметра:
 * начальное значение и шаг. По умолчанию начальное значение равно 0, а шаг 1.
 * При вызове данной функции возвращается функция-"генератор", которая при каждом
 * вызове возвращает число, измененное на переданный шаг. Генераторов можно
 * создать сколько угодно.
 */

export function sequence (start = 0, step = 1) {
  return function () {
    start += step
    return start
  }
}

/**
 * Задача #2
 *
 * Напишите свою функцию bind, которая привязывает контекст к функции суммирования.
 * Функция суммирования возвращает сумму всех переданных аргрументов,
 * а в качестве начального значения используется this.sum
 */

export function sum (...args) {
  return args.reduce((acc, el) => acc + el, this.sum)
}

export function bind (func, context, ...boundArgs) {
  return function (...args) {
    return func.apply(context, [...boundArgs, ...args])
  }
}

/**
 * Задача #3
 *
 * Напишите функцию, которая возвращает хранилище строк. Если вызвать «хранилище»,
 * передав аргумент, то переменная должна сохраниться в хранилище, если без —
 * вывести в консоль содержимое «хранилища». Принимаем за хранилище обычный массив.
 */

export function createStorage () {
  const storage = []
  return function (...args) {
    if (args.length === 0) {
      return [...storage]
    } else {
      args.forEach(el => storage.push(String(el)))
      // 1 или 2?
      // Array.prototype.push.apply(storage, args.map(String))
    }
  }
}
