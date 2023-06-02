import axios from 'axios'

export const api = axios.create({
  baseURL: 'http://localhost:3333',
  // Pega a URL do backend (onde está o banco de dados).
})
