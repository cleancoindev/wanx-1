const { expect } = require('chai');

const types = require('../src/lib/types');

describe('address to bytes32 conversion', () => {

  it('should convert address to bytes32', () => {
    const address = '0x9abbd236e46eae3ae230f3284d40f9df4ddb677f';
    const bytes = types.addr2Bytes(address);
    const expected = '0000000000000000000000009abbd236e46eae3ae230f3284d40f9df4ddb677f';

    expect(bytes).to.equal(expected);
  });

  it('should convert uppercase address to bytes32', () => {
    const address = '0x9ABbD236e46EAE3ae230f3284D40f9DF4ddb677F';
    const bytes = types.addr2Bytes(address);
    const expected = '0000000000000000000000009abbd236e46eae3ae230f3284d40f9df4ddb677f';

    expect(bytes).to.equal(expected);
  });

  it('should convert empty address to array of 0s', () => {
    const address = null;
    const bytes = types.addr2Bytes(address);
    const expected = '0000000000000000000000000000000000000000000000000000000000000000';

    expect(bytes).to.equal(expected);
  });

});

describe('number to bytes32 conversion', () => {

  it('should convert number to bytes32', () => {
    const number = 800000000;
    const bytes = types.number2Bytes(number);
    const expected = '000000000000000000000000000000000000000000000000000000002faf0800';

    expect(bytes).to.equal(expected);
  });

});
