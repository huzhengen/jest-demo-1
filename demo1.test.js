const demo1 = require('./demo1.js')
const { person1, person2 } = demo1

test('100岁', () => {
  expect(person1(100)).toBe('期颐')
})

test('30岁', () => {
  expect(person2(30)).toBe('而立')
})  