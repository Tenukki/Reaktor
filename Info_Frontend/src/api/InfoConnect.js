import axios from 'axios'
const baseUrl = '/api/infos'

let token = null
var config = {}

const setToken = newToken => {
  token = `bearer ${newToken}`
}

const setConfig = () => {
  config = {
    headers: { Authorization: token },
  }
}


const getAll = async () => {
  setConfig()
  const request = await axios.get(baseUrl, config)
  return request.data
}

const create = async newObject => {
  setConfig()
  const request = await axios.post(baseUrl, newObject, config)
  return request.data
}


const poista = async (id) => {
  setConfig()
  const request = await axios.delete(`${baseUrl}/${id}`, config)
  return request.data
}

export default { getAll, create, poista, setToken }