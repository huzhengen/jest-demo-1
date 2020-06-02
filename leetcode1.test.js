const { twoSum } = require('./leetcode1.js')

test('success', () => {
  expect(twoSum([2, 7, 11, 15], 9)).toEqual([0, 1])
})