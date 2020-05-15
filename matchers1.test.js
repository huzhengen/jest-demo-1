test('toBeGreaterThan匹配器', () => {
  const count = 10
  expect(count).toBeGreaterThan(9)
})

test('toBeGreaterThanOrEqual匹配器', () => {
  const count = 10
  expect(count).toBeGreaterThanOrEqual(10)
})

// failed
// test('toEqual匹配器', () => {
//   const one = 0.1
//   const two = 0.2
//   expect(one + two).toEqual(0.3)
// })

test('toBeCloseTo匹配器', () => {
  const one = 0.1
  const two = 0.2
  expect(one + two).toBeCloseTo(0.3)
})