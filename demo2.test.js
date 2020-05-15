import { person1, person2 } from './demo2'

test('100岁', () => {
  expect(person1(100)).toBe('期颐')
})

test('30岁', () => {
  expect(person2(30)).toBe('而立')
})  