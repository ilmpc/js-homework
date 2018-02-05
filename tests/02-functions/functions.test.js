const functions = require('../../tasks/02-functions');

describe('functional', () => {

  it('#1 add 2 numbers as sum(a)(b)', () => {
    console.log(functions.sum);
    let func = functions.sum;

    expect(typeof func(1)(1)).toBe('number');
    expect(func(1)(2)).toEqual(3);
    expect(func(5)(-1)).toEqual(4);

  });

  it('#2 function invocation counter', () => {
    let func = functions.counter;
    let counter = func();
    counter();
    counter();
    counter();
    expect(counter()).toEqual(4);
    counter();
    counter();
    expect(counter()).toEqual(7);

    expect(typeof counter()).toBe('number');

  });

  it('#3 print numbers from 1 to 20 in console using setInterval each in 100 ms', () => {

    let func = functions.printNumbersInterval;

    let outputData = '';
    let storeLog = inputs => (outputData += inputs);
    console["log"] = jest.fn(storeLog);

    func();

    expect(setInterval).toHaveBeenCalledTimes(1);

    expect(setInterval).toHaveBeenLastCalledWith(expect.any(Function), 100);

    jest.runOnlyPendingTimers();

    expect(outputData).toBe('1');

    jest.runOnlyPendingTimers();

    expect(outputData).toBe('12');

    jest.runOnlyPendingTimers();

    expect(outputData).toBe('123');

    jest.runAllTimers();

    expect(outputData).toBe('1234567891011121314151617181920');

  });

  it('#4 print numbers from 1 to 20 in console using setTimeout each in 100 ms', () => {

    let func = functions.printNumbersTimeout;

    func();

    let outputData = '';
    let storeLog = inputs => (outputData += inputs);
    console["log"] = jest.fn(storeLog);

    expect(setTimeout).toHaveBeenCalledTimes(1);
    expect(setTimeout).toHaveBeenLastCalledWith(expect.any(Function), 100);

    jest.runOnlyPendingTimers();

    expect(outputData).toBe('1');

    jest.runOnlyPendingTimers();

    expect(outputData).toBe('12');

    jest.runOnlyPendingTimers();

    expect(outputData).toBe('123');

    jest.runAllTimers();

    expect(outputData).toBe('1234567891011121314151617181920');

    expect(setTimeout).toHaveBeenCalledTimes(20);
    expect(setTimeout).toHaveBeenLastCalledWith(expect.any(Function), 100);
  });


  it('#5 log function arguments into console', () => {
    function sum(a, b) {
      return a + b;
    }

    function subtraction(a, b) {
      return a - b;
    }

    let logger = functions.logger;

    sum = logger(sum);

    subtraction = logger(subtraction);

    let outputData = '';
    let storeLog = inputs => (outputData += inputs);
    console["log"] = jest.fn(storeLog);

    sum(2, 3);

    expect(outputData).toBe('2,3');

    outputData = '';

    sum(3, 1);

    expect(outputData).toBe('3,1');

    outputData = '';

    subtraction(4, 2);

    expect(outputData).toBe('4,2');

    outputData = '';

    subtraction(11, 12);

    expect(outputData).toBe('11,12');

  });

});
