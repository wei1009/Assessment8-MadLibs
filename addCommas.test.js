const addCommas = require("./addCommas");

describe("#addCommas", () => {
  test("it is a function", () => {
    expect(typeof addCommas).toBe("function");
  });

  test("imput 1234 to be '1,234'", () => {
    expect (addCommas(1234)).toEqual("1,234")
  })

  test("imput 1000000 to be '1,000,000'", () => {
    expect (addCommas(1000000)).toEqual("1,000,000")
  })

  test("imput 9876543210 to be '9,876,543,210'", () => {
    expect (addCommas(9876543210)).toEqual("9,876,543,210")
  })

  test("imput 6 to be '6'", () => {
    expect (addCommas(6)).toEqual("6")
  })

  test("imput -10 to be '-10'", () => {
    expect (addCommas(-10)).toEqual("-10")
  })

  test("imput -5678 to be '-5,678'", () => {
    expect (addCommas(-5678)).toEqual("-5,678")
  })

});
