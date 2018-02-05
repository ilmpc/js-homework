const oop = require('../../tasks/04-oop');

describe('OOP', () => {
  beforeAll(function() {
    jest.useFakeTimers();
  });

  it('#1 three classes: Animal, Cat, Dog', () => {
    const cat = new oop.Cat('Tom');
    const dog = new oop.Dog('Snoop');

    expect(cat.phrase).toEqual('meow');
    expect(cat.say()).toEqual('Tom says meow');

    expect(dog.phrase).toEqual('wow');
    expect(dog.say()).toEqual('Snoop says wow');
  });

  it('#2 Clock class (with default tickTimeout)', () => {
    const shouldBeCalled = jest.fn();
    const clock = new oop.Clock();

    clock.start(shouldBeCalled);

    jest.runTimersToTime(800);
    expect(shouldBeCalled).not.toHaveBeenCalled();

    jest.runTimersToTime(200);
    expect(shouldBeCalled).toHaveBeenCalled();

    jest.runTimersToTime(900);
    expect(shouldBeCalled).not.toHaveBeenCalledTimes(2);

    jest.runTimersToTime(100);
    expect(shouldBeCalled).toHaveBeenCalledTimes(2);

    jest.runTimersToTime(900);
    clock.stop();

    jest.runTimersToTime(200);
    expect(shouldBeCalled).not.toHaveBeenCalledTimes(3);

    jest.runTimersToTime(2000);
    expect(shouldBeCalled).not.toHaveBeenCalledTimes(3);
  });

  it('#2 clock class (with custom tickTimeout)', () => {
    const shouldBeCalled = jest.fn();
    const clock = new oop.Clock({ tickTimeout: 2000 });

    clock.start(shouldBeCalled);

    jest.runTimersToTime(800);
    expect(shouldBeCalled).not.toHaveBeenCalled();

    jest.runTimersToTime(1200);
    expect(shouldBeCalled).toHaveBeenCalled();

    jest.runTimersToTime(1900);
    expect(shouldBeCalled).not.toHaveBeenCalledTimes(2);

    jest.runTimersToTime(100);
    expect(shouldBeCalled).toHaveBeenCalledTimes(2);

    jest.runTimersToTime(1800);
    clock.stop();

    jest.runTimersToTime(500);
    expect(shouldBeCalled).not.toHaveBeenCalledTimes(3);

    jest.runTimersToTime(2000);
    expect(shouldBeCalled).not.toHaveBeenCalledTimes(3);
  });

  it('#3 three classes: AbstractAccumulator, WrongAccumulator, Accumulator (with default value)', () => {
    const accumulator = new oop.Accumulator();

    accumulator.read(12);

    expect(accumulator.value).toEqual(12);
    expect(() => new oop.WrongAccumulator()).toThrow();
    expect(() => new oop.AbstractAccumulator()).toThrow();
  });

  it('#3 three classes: AbstractAccumulator, WrongAccumulator, Accumulator (with custom value)', () => {
    const accumulator = new oop.Accumulator(5);

    accumulator.read(12);

    expect(accumulator.value).toEqual(17);
  });
});
