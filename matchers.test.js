test('测试A是A', () => {
  expect('A').toBe('A')
})

// failed
// test('测试严格相等', () => {
//   const a = { number: '007' }
//   expect(a).toBe({ number: '007' })
// }) 

test('测试严格相等', () => {
  const a = { number: '007' }
  expect(a).toEqual({ number: '007' })
})

test('测试严格相等', () => {
  const a = { number: '007' }
  expect(a).toStrictEqual({ number: '007' })
})

// 不能是 undefined
test('toBeNull测试', () => {
  const a = null
  expect(a).toBeNull()
})

test('toBeUndefined测试', () => {
  const a = undefined
  expect(a).toBeUndefined()
})

test('toBeDefined测试', () => {
  const a = 'test'
  expect(a).toBeDefined()
})

// failed
// test('toBeTruthy 测试', () => {
//   const a = 0
//   expect(a).toBeTruthy()
// })

test('toBeFalsy 测试', () => {
  const a = 0
  expect(a).toBeFalsy()
}) 