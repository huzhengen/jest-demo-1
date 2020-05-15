import { fetchData } from './fetchData.js'

test('fetchData 测试', (done) => {
  fetchData((data) => {
    expect(data).toEqual({
      success: true
    })
    done()
  })
})