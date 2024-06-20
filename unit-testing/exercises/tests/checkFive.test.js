const checkFive = require('../checkFive');

describe("checkFive", function(){
  test("returns 'num is less than 5' when num < 5", function(){
    let output = checkFive(2)
    expect(output).toBe("2 is less than 5.")
  });

  test("returns 'num is equal to 5' when num === 5", function(){
    let output = checkFive(5)
    expect(output).toBe("5 is equal to 5.")
  });

  test("returns 'num is greater than 5' when other conditions are not true", function(){
    let output = checkFive(7)
    expect(output).toBe("7 is greater than 5.")
  });
})
