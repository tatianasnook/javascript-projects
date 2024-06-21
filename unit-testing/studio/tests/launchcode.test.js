
const launchcode = require('../index.js');

describe("Testing launchcode", function(){

  test("should return 'nonprofit' for organization key", () => {
    expect(launchcode.organization).toBe('nonprofit');
  });

  test("should return 'Jeff' for executiveDirector key", () => {
    expect(launchcode.executiveDirector).toBe('Jeff');
  });

  test("should return 100 for percentageCoolEmployees key", () => {
    expect(launchcode.percentageCoolEmployees).toBe(100);
  })
  
  test('should return one or all "Web Development", "Data Analysis", "Liftoff"', () => {
    expect(launchcode.programsOffered.includes('Web Development')).toBe(true);
    expect(launchcode.programsOffered.includes('Data Analysis')).toBe(true);
    expect(launchcode.programsOffered.includes('Liftoff')).toBe(true);
    expect(launchcode.programsOffered.length).toBe(3);
  });

  test("launchOutput() should return 'Launch!' when number divisible by 2", () => {
    expect(launchcode.launchOutput(4)).toBe('Launch!');
  });

  test("launchOutput() should return 'Rocks!' when number divisible by 5", () => {
    expect(launchcode.launchOutput(5)).toBe('Rocks!');
  });

  test("launchOutput() should return 'LaunchCode!' when number divisible by 2 and 3", () => {
    expect(launchcode.launchOutput(6)).toBe('LaunchCode!');
  });

  test("launchOutput() should return 'Code Rocks!' when number divisible by 3 and 5", () => {
    expect(launchcode.launchOutput(15)).toBe('Code Rocks!');
  });

  test("launchOutput() should return 'Launch Rocks! (CRASH!!!!)' when number divisible by 2 and 5", () => {
    expect(launchcode.launchOutput(10)).toBe('Launch Rocks! (CRASH!!!!)');
  });

  test("launchOutput() should return 'LaunchCode Rocks!' when number divisible by 2,3 and 5", () => {
    expect(launchcode.launchOutput(30)).toBe('LaunchCode Rocks!');
  });

  test("launchOutput() should return 'Rutabagas! That doesn't work.' when number not divisible by 2,3 and 5", () => {
    expect(launchcode.launchOutput(7)).toBe("Rutabagas! That doesn't work.");
  });
});