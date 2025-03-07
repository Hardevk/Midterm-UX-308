import { calculateGymCost } from './functions.js';

describe("Tests gym membership cost calculation with discounts based on friends signed up", function() {

  it("test 0 friends", function() {
    const totalCost = calculateGymCost(80, 0);  
    expect(totalCost).toBe(80);  
  });

  it("test 1 friend", function() {
    const totalCost = calculateGymCost(80, 1);  
    expect(totalCost).toBe(76); 
  });

  it("test 2 friends", function() {
    const totalCost = calculateGymCost(80, 2);  
    expect(totalCost).toBe(72); 
  });

  it("test 3 friends", function() {
    const totalCost = calculateGymCost(80, 3);  
    expect(totalCost).toBe(68); 
  });

  it("test 4 friends", function() {
    const totalCost = calculateGymCost(80, 4); 
    expect(totalCost).toBe(68); 
  });

});