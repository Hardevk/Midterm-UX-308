import { calculateTotal } from './functions.js';

describe("Tests total value calculation of coins", function() {

  it("test 0 coins", function() {
    const total = calculateTotal(0, 0, 0, 0, 0);
    expect(total).toBe(0);
  });

  it("test 1 of each coin", function() {
    const total = calculateTotal(1, 1, 1, 1, 1);
    expect(total).toBe(3.40);
  });

  it("test multiple coins", function() {
    const total = calculateTotal(10, 5, 4, 3, 2);
    expect(total).toBe(9.00); 
  });

});
