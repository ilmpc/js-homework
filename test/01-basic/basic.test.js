const basic = require('../../tasks/01-basic');

describe('basic', () => {
  it('#1 assign property to object', () => {
    let obj = basic.obj;

    expect(obj.c).toBeDefined();
    expect(typeof obj.c).toBe('string');
  });

  it('#2 remove property from object', () => {
    let obj = basic.objWithNestedKey;

    expect(obj.key).toBeDefined();
    expect(typeof obj.key).toBe('object');
    expect(obj.key.nestedKey).toBeUndefined();
  });

  it('#3 reverse string', () => {
    let func = basic.reverseString;

    expect(typeof func('random string')).toBe('string');
    expect(func('random string')).toBe('gnirts modnar');
    expect(func('I like javascript')).toBe('tpircsavaj ekil I');
  });

  it('#4 count discriminant', () => {
    let func = basic.discriminant;

    expect(typeof func(1, 2, 3)).toBe('number');
    expect(func(1, 2, 3)).toBe(-8);
    expect(func(2, 4, 4)).toBe(-16);
    expect(func(2, 16, 32)).toBe(0);
    expect(func(2, 16, 24)).toBe(64)
  });

  it('#5 compare strings without string register', () => {
    let func = basic.compareStrings;

    expect(typeof func('string1', 'string2')).toBe('boolean');
    expect(func('java', 'JavA')).toBeTruthy();
    expect(func('java', 'avaj')).not.toBeTruthy();
    expect(func('STRING', 'STRING')).toBeTruthy();
    expect(func('javaScript', 'JavAScRipT')).toBeTruthy();
    expect(func('javaScrip', 'javaScript')).not.toBeTruthy();
  });

  it('#6 get object and return string with all values', () => {
    let obj1 = {
      a: 'Say',
      b: 'Hello',
      c: 'To',
      d: 'My',
      e: 'Little',
      f: 'Friend'
    };
    let obj2 = {
      a: 'You',
      b: 'Shall',
      c: 'Not',
      d: 'Pass'
    };

    let func = basic.strFromObjValues;

    expect(typeof func(obj1)).toBe('string');
    expect(typeof func(obj2)).toBe('string');
    expect(func(obj1)).toBe('Say Hello To My Little Friend');
    expect(func(obj2)).toBe('You Shall Not Pass');
  });

  it('#7 sort array in descending order', () => {
    let func = basic.arrSortDesc;

    expect(func([1, 2, 3]) instanceof Array).toBe(true);
    expect(func([1, 2, 15])).toEqual([15, 2, 1]);
    expect(func([1, 10, 1000, 100, 2])).toEqual([1000, 100, 10, 2, 1]);
  });

  it('#8 get first and last elements from array', () => {
    let func = basic.getFirstAndLastElements;

    expect(func([1, 2, 3]) instanceof Array).toBe(true);
    expect(func([1, 2, 3, 4, 5, 6, 7])).toEqual([1, 7]);
    expect(func(['Cat', 'caught', 'mouse'])).toEqual(['Cat', 'mouse']);
    expect(func([1])).toEqual([1]);
    expect(func([1, 2])).toEqual([1, 2]);
  });

  it('#9 check if number is divisible', () => {
    let func = basic.isIntegerDivisible;

    expect(typeof func(4, 2)).toBe('boolean');
    expect(func(4, 2)).toBeTruthy();
    expect(func(5, 2)).not.toBeTruthy();
    expect(func(4.4, 2.2)).toBeTruthy();
    expect(func(-4, 2)).toBeTruthy();
  });

  it('#10 calculate all odd numbers sum', () => {
    let func = basic.calculateAllOddNumbersSum;

    expect(typeof func(10)).toBe('number');
    expect(func(10)).toBe(25);
    expect(func(5)).toBe(9);
    expect(func(100)).toBe(2500);
    expect(func(2)).toBe(1);
    expect(func(8888)).toBe(19749136);
  });

  it('#11 find count of positive even numbers in array ', () => {
    let func = basic.positiveEvenNumbersCount;

    expect(typeof func([1, 2, 3, 4, 5, 6])).toBe('number');
    expect(func([1, -1, 2, -2, 3, 8])).toEqual(2);
    expect(func([1, 1, -1])).toEqual(0);

  });

  it('#12 create new array where new element is length of old one', () => {
    let func = basic.wordsLength;

    expect(func(['hello', 'hey', 'hi', 'whats up']) instanceof Array).toBe(true);
    expect(func(['hello', 'hey', 'hi', 'whats up'])).toEqual([5, 3, 2, 8]);
    expect(func(['go to home', ' go to university'])).toEqual([10, 17]);
  });
});
