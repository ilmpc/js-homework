/**
 * Задача #1
 * Добавить вложенное свойство 'c', содержащее строковое значение
 */

const obj = {}
obj.c = 'Hi!'

exports.obj = obj

/**
 * Задача #2
 * Удалить свойство nestedKey из объекта
 */

const objWithNestedKey = {
  key: {
    nestedKey: 'someValue'
  }
}

delete objWithNestedKey.key.nestedKey

exports.objWithNestedKey = objWithNestedKey

/**
 * Задача #3
 * Написать функцию которая принимает строковый аргумент и возвращает его обратную версию.
 * Например для строки 'Я решаю задачу' - вернет 'учадаз юашер Я'
 */

exports.reverseString = function (str) {
  return [...str].reverse().join('')
}

/**
 * Задача #4
 * Написать функцию которая вычисляет дискриминант квадратного уравнения.
 * Квадратное уравнение — это уравнение вида ax2 + bx + c = 0,
 * где коэффициенты a, b и c — произвольные числа.
 * Обратите внимание на порядок передаваемых аргументов в функцию
 */

exports.discriminant = function (a, b, c) {
  return b ** 2 - 4 * a * c
}

/**
 * Задача #5
 * Написать функцию которая сравнивает 2 строки в независимости от регистра.
 * Например, 'java' и 'Java' - идентичные строки.
 */

exports.compareStrings = function (left, right) {
  return left.toLowerCase() === right.toLowerCase()
}

/**
 * Задача #6
 * Написать функцию которая принимает объект и возвращает строку, составленную
 * из значений всех свойств объекта. После каждого значения,
 * кроме последнего нужно добавить пробел.
 */

exports.strFromObjValues = function (obj) {
  return Object.keys(obj).map(key => obj[key]).join(' ')
}

/**
 * Задача #7
 * Написать функцию которая сортирует массив чисел по убыванию
 */

exports.arrSortDesc = function (arr) {
  return arr.sort((a, b) => b - a)
}

/**
 * Задача #8
 * Написать функцию которая принимает массив и возвращает новый массив,
 * состоящий только из первого и последнего элементов исходного массива.
 * Если входящий массив состоит меньше чем из 2 элементов - вернуть его без изменений
 */

exports.getFirstAndLastElements = function (arr) {
  const len = arr.length
  if (len < 2) return arr
  return [arr[0], arr[len - 1]]
}

/**
 * Задача #9
 * Написать функцию которая принимает 2 числа в качестве аргументов
 * И в случае целочисленного деления первого числа на второе возвращает true
 * Иначе false
 */

exports.isIntegerDivisible = function (a, b) {
  return a % b === 0
}

/**
 * Задача #10
 * Написать функцию которая принимает число n в качестве аргумента
 * и возвращает сумму всех нечетных чисел от 1 до n включительно.
 * В этой задаче предположим что n не может быть отрицательным.
 */

exports.calculateAllOddNumbersSum = function (n) {
  return Math.ceil(n / 2) ** 2
}

/**
 * Задача #11
 * Найти количество положительный четных чисел в массиве
 * (нужно написать функцию, которая будет возращать количество)
 */

exports.positiveEvenNumbersCount = function (numbers) {
  // Лучше читается, но предположительно медленее из-за создания нового списка
  // return numbers.filter(el => el > 0 && el % 2 === 0).length
  return numbers.reduce((acc, el) => el > 0 && el % 2 === 0 ? acc + 1 : acc, 0)
}

/**
 * Задача #12
 * Сформировать массив, где каждый элемент которого равен
 * длине строки элемента исходного массива
 */

exports.wordsLength = function (words) {
  return words.map(
    (el) => el.toString().length
  )
}
