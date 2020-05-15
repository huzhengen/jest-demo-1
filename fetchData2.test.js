import { fetchData2 } from './fetchData2.js'

test('FetchData2 测试', () => {
  expect.assertions(1)  // 断言，必须执行一次expect
  return fetchData2().catch((e) => {
    expect(e.toString().indexOf('404') > -1).toBe(true)
  })
})