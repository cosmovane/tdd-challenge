/*
  Rules of TDD
  1. DO NOT write production code if there are no tests
  2. Only write the MINIMUM test case to satisfy the requirement
  3. Only write enough production code, the MINIMUM to satisfy the test
*/

const challenge2 = require('./challenge2')

describe("challenge2", () => {
  it("for each letter, should return the next letter in alphabetical order", () => {
    expect(challenge2('korinver')).toEqual('lpsjowfs')
    expect(challenge2('zorro')).toEqual('apssp')
  })

  describe("if the parameter upperCase is true", () => {
    it("should return vowels in upper case", () => {
      expect(challenge2('korinver', true)).toEqual('lpsjOwfs')
      expect(challenge2('zorro', true)).toEqual('Apssp')
    })
  })
})