import { fahrenheitToCelsius } from './functions.js';

describe("Tests Fahrenheit to Celsius conversion", function() {

  it("test freezing point", function() {
    const celsius = fahrenheitToCelsius(32); 
    expect(celsius).toBe(0);
  });

  it("test boiling point", function() {
    const celsius = fahrenheitToCelsius(212);
    expect(celsius).toBe(100);
  });

  it("test room temperature", function() {
    const celsius = fahrenheitToCelsius(70); 
    expect(celsius).toBeCloseTo(21.11, 2); 
  });

});