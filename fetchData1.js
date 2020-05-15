import axios from 'axios';

export const fetchData1 = () => {
  return axios.get('http://a.jspang.com/jestTest.json')
}