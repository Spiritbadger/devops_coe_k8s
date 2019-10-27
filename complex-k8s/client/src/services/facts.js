import axios from 'axios'

const baseUrl = '/api/facts'

const getRandom = (id) => {
    const request = axios.get(`${baseUrl}/${id}`)
    return request.then(response => response.data.fact_content)
}

export default { getRandom }
