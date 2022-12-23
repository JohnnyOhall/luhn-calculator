const assert = require('chai').assert;
const {check} = require('../check');

describe('Luhn Algorithm check, TRUE return on valid numbers', () => {
  it('Checks if invalid CC #: 518116237047543 is false', () => {
    assert.isFalse(check(518116237047543))
  });
  it('Checks if valid IMEI: 356955884039103 is true', () => {
    assert.isTrue(check(356955884039103))
  });
});
