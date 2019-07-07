const chai = require('chai');
const assert = chai.assert;

const nameInverter = require('../nameInverter');

describe('nameInverter', function () {
  it('should return an empty string when passed an empty string', function () {
    const inputName = "";
    const expectedOutput = "";
    assert.equal(nameInverter(inputName), expectedOutput);
  });

  it('should return a single name when passed a single name', function () {
    const inputName = "name";
    const expectedOutput = "name";
    assert.equal(nameInverter(inputName), expectedOutput);
  });

  it('should return a single name without whitespaces when passed a single name with whitespaces', function () {
    const inputName = " name ";
    const expectedOutput = "name";
    assert.equal(nameInverter(inputName), expectedOutput);
  });

  it('it should return lastname, firstname', function () {
    const inputName = "firstname lastname";
    const expectedOutput = "lastname, firstname";
    assert.equal(nameInverter(inputName), expectedOutput);
  });

  it('it should return lastname, firstname - checking extra spaces', function () {
    const inputName = "   firstname    lastname   ";
    const expectedOutput = "lastname, firstname";
    assert.equal(nameInverter(inputName), expectedOutput);
  });

  it('it should return empty when receiving Dr.', function () {
    const inputName = "  Dr.  ";
    const expectedOutput = "";
    assert.equal(nameInverter(inputName), expectedOutput);
  });

  it('return honorific first-name when passed honorific first-name', function () {
    const inputName = "  Dr.  firstname";
    const expectedOutput = "Dr. firstname";
    assert.equal(nameInverter(inputName), expectedOutput);
  });
  it('return a honorific last-name, first-name when passed honorific first-name last-name', function () {
    const inputName = "Dr. first-name last-name";
    const expectedOutput = "Dr. last-name, first-name";
    assert.equal(nameInverter(inputName), expectedOutput);
  });

  it('throw an error when name is undefined', function () {
    const inputName = undefined;
    assert.throws(nameInverter(inputName));
  });

});