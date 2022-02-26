import axios, { AxiosResponse } from 'axios'

const API_ENDPOINT = process.env.REACT_APP_API_ENDPOINT

interface authHeaderInterface {
    (): object
}

// SETUP AUTH
const authHeader: authHeaderInterface = () => ({
    'X-Api-Key': process.env.REACT_APP_API_KEY,
    // 'Authorization': 'Bearer ' + window.localStorage.getItem("Authorization")
})

const client = axios.create({
  baseURL: API_ENDPOINT,
  headers: {
    'Content-Type': 'application/json'
  }
})

export class DataService {
  static get(path = ''): Promise<AxiosResponse> {
    return client({
      method: 'GET',
      url: path,
      headers: { ...authHeader() }
    })
  }

  static post(path = '', data = {}, optionalHeader = {}): Promise<AxiosResponse> {
    return client({
      method: 'POST',
      url: path,
      data,
      headers: { ...authHeader(), ...optionalHeader }
    })
  }

  static patch(path = '', data = {}): Promise<AxiosResponse> {
    return client({
      method: 'PATCH',
      url: path,
      data: JSON.stringify(data),
      headers: { ...authHeader() }
    })
  }

  static put(path = '', data = {}): Promise<AxiosResponse> {
    return client({
      method: 'PUT',
      url: path,
      data: JSON.stringify(data),
      headers: { ...authHeader() }
    })
  }

  static delete(path = '', data = {}): Promise<AxiosResponse> {
    return client({
      method: 'DELETE',
      url: path,
      data: JSON.stringify(data),
      headers: { ...authHeader() }
    })
  }
}

client.interceptors.request.use(config => {
  const requestConfig = config
  const { headers } = config
  requestConfig.headers = {
    ...headers,
    ...authHeader()
  }

  return requestConfig
})

client.interceptors.response.use(
  response => response,
  err => {
    return Promise.reject(err.response)
  }
)