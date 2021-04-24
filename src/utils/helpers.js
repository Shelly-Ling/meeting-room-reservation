import axios from 'axios'

const baseURL = "http://localhost:3003"

export const apiHelper = axios.create({ baseURL })