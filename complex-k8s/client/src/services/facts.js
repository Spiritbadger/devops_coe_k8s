import axios from 'axios'

const baseUrl = 'http://localhost:5000/api/facts'

const getRandom = (id) => {
  const request = axios.get(`${baseUrl}/${id}`)
  return request.then(response => response.data.content)
}

export default { getRandom }
