test('toMatch匹配器', () => {
  const str = "张三，李四，王五"
  expect(str).toMatch('王五')
})

test('toMatch匹配器', () => {
  const str = "张三，李四，王五"
  expect(str).toMatch(/李四/)
})

test('toContain匹配器', () => {
  const arr = ['张三', '李四', '王五']
  expect(arr).toContain('李四')
})

// Set函数可以接受一个数组（或者具有 iterable 接口的其他数据结构）作为参数，用来初始化。
test('toContain匹配器', () => {
  // const arr = ['张三', '李四', '王五']
  // const data = new Set(arr)
  const data = new Set();
  data.add('张三');
  data.add('李四')
  expect(data).toContain('李四')
})

const throwNewErrorFunc = () => {
  throw new Error('this is a new error')
}

test('toThrow匹配器', () => {
  expect(throwNewErrorFunc).toThrow()
})

const throwNewErrorFunc1 = () => {
  throw new Error('this is a new error')
}

test('toThrow匹配器', () => {
  expect(throwNewErrorFunc1).toThrow('this is a new error')
})