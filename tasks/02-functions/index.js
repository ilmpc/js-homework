/**
 * Задача #1
 * Напишите функцию sum, которая работает так: sum(a)(b) = a + b
 * sum(1)(2) // 3
 * sum(5)(-1) // 4
 */

exports.sum = function(a) {
  /** Ваш код */
};


/**
 * Задача #2
 * Написать функцию которая считает и возвращает количество своих вызовов
 *  function counter() {

    }
 let func = counter();
 *  func(); //выведет 1
 *  func(); //выведет 2
 *  func(); //выведет 3
 */

exports.counter = function() {
  /** Ваш код */
};

/**
 * Задача #3
 * Напишите функцию, которая последовательно выводит в консоль числа от 1 до 20,
 * c интервалом между числами 100 мс. То есть, весь вывод должен занимать 2000 мс,
 * в течение которых каждые 100 мс в консоли появляется очередное число.
 */

exports.printNumbersInterval = function() {
  /** Ваш код */
};

/**
 * Задача #4
 * Сделайте то же самое, что в задаче #1,
 * но с использованием рекурсивного setTimeout вместо setInterval
 */

exports.printNumbersTimeout = function() {
  /** Ваш код */
};

/**
 * Задача #5
 * Напишите функцию-декоратор logger, который возвращает обёртку,
 * логгирующую переданные аргументы в консоль.
 * Например:

 function sum(a, b) {
   return a + b;
 }

 sum = logger(sum)

 sum(2, 3) // в консоль выведет 2,3
 sum(3, 1) // в консоль выведет 3,1

 * Подсказка: вы должны использовать call или apply в этой задаче
 */

exports.logger = function(func) {
  /** Ваш код */
};
