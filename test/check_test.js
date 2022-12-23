const assert = require('chai').assert;
const {check, byTwo} = require('../check');

describe('Luhn Algorithm check, TRUE return on valid numbers', () => {
  it('Checks if invalid CC #: 518116237047543 is false', () => {
    assert.isFalse(check(518116237047543))
  });
  it('Checks if valid IMEI: 356955884039103 is true', () => {
    assert.isTrue(check(356955884039103))
  });
});

describe('byTwo func, * every other index by 2 starting from right-most index', () => {
  it('Array [1, 1, 1, 1, 1] should return [2, 1, 2, 1, 2]', () => {
    const array = [1, 1, 1, 1, 1];
    byTwo(array, array.length - 1);
    assert.deepEqual(array, [2, 1, 2, 1, 2]);
  })
})