import axios from "axios";
import md5 from 'md5'

const privateKey = process.env.REACT_APP_PRIVATE_KEY as string 
const publicKey = process.env.REACT_APP_PUBLIC_KEY as string
const baseURL = process.env.REACT_APP_BASE_URL

const ts = new Date().getTime()
const hash = md5(ts+privateKey+publicKey)

const api = axios.create({
  baseURL: baseURL,
  params: {
    ts,
    apikey: publicKey,
    hash,
  }
})

export default api;
