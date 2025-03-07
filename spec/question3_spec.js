import { calculateCubeVolume } from './functions.js';

describe("Tests cube volume calculation", function() {

  it("test small cube", function() {
    const volume = calculateCubeVolume(5);  
    expect(volume).toBe(125);  
  });

  it("test medium cube", function() {
    const volume = calculateCubeVolume(10);  
    expect(volume).toBe(1000);  
  });

  it("test large cube", function() {
    const volume = calculateCubeVolume(15);  
    expect(volume).toBe(3375);  
  });

});