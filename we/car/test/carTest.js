const chai = require('chai'); // 1
const assert = chai.assert;

const shouldBuyCar = require('../shouldBuyCar.js'); // 2

describe("#shouldBuyCar()", function () { // 3

  it("should return true if the car is pink", function () { // 4
    const car = {
      color: "pink"
    };
    const shouldBuy = shouldBuyCar(car);
    assert.isTrue(shouldBuy);
  });

});

describe("#shouldBuyCar()", function () { // 3

  it("not pink so check for all the other requests", function () { // 4
    const car = {
      color: "pink"
    };
    const shouldBuy = shouldBuyCar(car);
    assert.isTrue(shouldBuy);
  });
  it("return false if car obj is empty", function () { // 4
    const car = {};
    const shouldBuy = shouldBuyCar(car);
    assert.isFalse(shouldBuy);
  });
  it("should return false if it's a hatchback", function () { // 4
    const car = {
      type: "hatchback"
    };
    const shouldBuy = shouldBuyCar(car);
    assert.isFalse(shouldBuy);
  });
  it("return undefined if car is undefined", function () { // 4
    const car = undefined;
    const shouldBuy = shouldBuyCar(car);
    assert.isUndefined(shouldBuy);
  });
  it("Should return true when, 5 l/km and = $5000", function () { // 4
    const car = {
      litresPer100km: 6,
      price: 5000
    };
    const shouldBuy = shouldBuyCar(car);
    assert.isTrue(shouldBuy);
  });
  it("Should return true when, 11 l/km and = $5000", function () { // 4
    const car = {
      litresPer100km: 11,
      price: 5000
    };
    const shouldBuy = shouldBuyCar(car);
    assert.isTrue(shouldBuy);
  });
  it("Should return false when, 6 l/km and = $6000", function () { // 4
    const car = {
      litresPer100km: 6,
      price: 6000
    };
    const shouldBuy = shouldBuyCar(car);
    assert.isFalse(shouldBuy);
  });
  it("Should return false when, 11 l/km and = $6000", function () { // 4
    const car = {
      litresPer100km: 11,
      price: 6000
    };
    const shouldBuy = shouldBuyCar(car);
    assert.isFalse(shouldBuy);
  });

  it("Should return false when, 3 l/km and = $3000", function () { // 4
    const car = {
      litresPer100km: 3,
      price: 3000
    };
    const shouldBuy = shouldBuyCar(car);
    assert.isFalse(shouldBuy);
  });
  it("Should return false when, 12 l/km and = $3000", function () { // 4
    const car = {
      litresPer100km: 12,
      price: 3000
    };
    const shouldBuy = shouldBuyCar(car);
    assert.isFalse(shouldBuy);
  });


});