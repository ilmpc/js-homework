/**
 * Задача #1
 *
 * Реализовать класс Animal, конструктор которого будет принимать параметр name и добавлять его к экземпляру класса.
 * Далее, реализовать два класса: Cat, Dog. Они должны быть унаследованы от класса Animal.
 * В эти классы необходимо добавить геттер phrase, который будет возвращать для класса
 * Cat - 'meow', а для класса Dog - 'wow'.
 * В класс Animal добавить метод say, который будет возвращать:
 * '{name} says {phrase}', где {name} - имя животного, а {phrase} - вызов геттера.
 *
 * const tom = new Cat('Tom');
 * tom.say(); // Tom says meow
 *
 * const snoop = new Dog('Snoop');
 * snoop.say(); // Snoop says wow
 */

class Animal {
  /** Ваш код */
}

class Cat {
  /** Ваш код */
}

class Dog {
  /** Ваш код */
}

exports.Cat = Cat;
exports.Dog = Dog;

/**
 * Задача #2
 *
 * Реализовать класс Clock. В качестве параметров можно передавать объект options,
 * в котором можно передавать интервал (tickTimeout), через который будет вызываться
 * функция обратного вызова (по умолчанию интервал должен быть установлен через 1000мс).
 * Для вызова функции обратного вызова через N миллисекунд использовать функцию setInterval.
 *
 * const clock = new Clock({ tickTimeout: 2000 });
 * clock.start(() => console.log(new Date().getSeconds()));
 * // 9
 * // 11
 * // 13
 * // ...
 * clock.stop();
 */
class Clock {
  /** Ваш код */
}

exports.Clock = Clock;

/**
 * Задача #3
 *
 * Объявите класс Cuboid, который должен получать три аргумента: длина, ширина, высота.
 * Класс должен иметь геттер surfaceArea(), который возвращает поверхность всего параллелепипеда и геттер volume(),
 * который подсчитывает его объем. Класс Cube является подклассом класса Cuboid.
 * Функция конструктора Cube должна принимать только один аргумент - длину
 * и использовать это значение для установки длины, ширины и высоты.
 * Подсчитайте объем и поверхность любого куба.
 *
 * const cuboid = new Cuboid(1, 2, 3);
 *
 * console.log(cuboid.surfaceArea); // 22
 * console.log(cuboid.volume); // 6
 *
 * const cube = new Cube(2);
 *
 * console.log(cube.surfaceArea); // 24
 * console.log(cube.volume); // 8
 */

class Cuboid {
  constructor() {
    /** Ваш код */
  }

  get surfaceArea() {
    /** Ваш код */
  }

  get volume() {
    /** Ваш код */
  }
}

class Cube extends Cuboid {
  /** Ваш код */
}

exports.Cuboid = Cuboid;
exports.Cube = Cube;