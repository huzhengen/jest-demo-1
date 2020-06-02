const { twoSum1,twoSum2,twoSum3,twoSum4,twoSum5 } = require('./leetcode1.js')

test('success', () => {
  expect(twoSum1([2, 7, 11, 15], 9)).toEqual([0, 1])
  expect(twoSum2([2, 7, 11, 15], 9)).toEqual([0, 1])
  expect(twoSum3([2, 7, 11, 15], 9)).toEqual([0, 1])
  expect(twoSum4([2, 7, 11, 15], 9)).toEqual([0, 1])
  expect(twoSum5([2, 7, 11, 15], 9)).toEqual([0, 1])

  expect(twoSum1([4, 4, 11, 15], 8)).toEqual([0, 1])
  expect(twoSum2([4, 4, 11, 15], 8)).toEqual([0, 1])
  expect(twoSum3([4, 4, 11, 15], 8)).toEqual([0, 1])
  expect(twoSum4([4, 4, 11, 15], 8)).toEqual([0, 1])
  expect(twoSum5([4, 4, 11, 15], 8)).toEqual([0, 1])

  // expect(twoSum5([4, 4, 11, 15], 8)).toEqual([10, 1]) // error
})