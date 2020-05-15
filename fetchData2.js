import axios from 'axios'

export const fetchData2 = () => {
  return axios.get('http://a.jspang.com/jestTest_error.json')
}