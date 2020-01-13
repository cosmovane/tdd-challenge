  
/*
  Rules of TDD
  1. DO NOT write production code if there are no tests
  2. Only write the MINIMUM test case to satisfy the requirement
  3. Only write enough production code, the MINIMUM to satisfy the test
*/

const palyndrome = require('./palyndrome')

describe("palyndrome", () => {
  it("should return true if the given word is a  palyndrome, otherwise it returns false", () =>{
    expect(palyndrome('ada')).toBeTruthy()
    expect(palyndrome('pelu')).toBeFalsy()
  })

  it("should ignore uppercase", () => {
  expect(palyndrome('Ada')).toBeTruthy()
  expect(palyndrome('Ana')).toBeTruthy()
  })

  it("should return true if the given sentence is a  palyndrome", () => {
  expect(palyndrome('Anita lava la tina')).toBeTruthy()
  expect(palyndrome('Y la culpa no era mia')).toBeFalsy()
  })
})