import { fetchData1 } from './fetchData1.js'

test('FetchData1 测试', () => {
  return fetchData1().then((response) => {
    expect(response.data).toEqual({
      success: true
    })
  })
})