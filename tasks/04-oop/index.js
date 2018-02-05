/**
 * Задача #1
 *
 * Реализовать класс Animal конструктор которого будет принимать параметр name и добавлять его к экземпляру класса.
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
 * Создать абстрактный класс AbstractAccumulator, при создании экземпляра которого должен выкидываться Error.
 * Также, он должен проверять что метод read в классе наследнике переопределен.
 * На вход в конструктор должен принимать value (со значением по умолчанию - 0).
 * Далее в нем создать метод read, который при вызове должен выкидывать Error.
 * Создать два новых класса WrongAccumulator и Accumulator и унаследовать их от AbstractAccumulator.
 * В WrongAccumulator мы ничего не переопределяем, просто наследуемся.
 * В Accumulator необходимо переопределить метод read,
 * которому на вход поступает value и его необходимо прибавить к this.value.
 *
 * new AbstractAccumulator(); // Error
 * new WrongAccumulator(); // Error
 *
 * const accumulator = new Accumulator();
 *
 * accumulator.read(12);
 * accumulator.read(1);
 * accumulator.read(5);
 *
 * console.log(accumulator.value); // 18
 */

class AbstractAccumulator {
  /** Ваш код */
}

class WrongAccumulator {
  /** Ваш код */
}

class Accumulator {
  /** Ваш код */
}

exports.AbstractAccumulator = AbstractAccumulator;
exports.WrongAccumulator = WrongAccumulator;
exports.Accumulator = Accumulator;
