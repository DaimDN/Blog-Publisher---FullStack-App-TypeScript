import axios from 'axios'


const api : any = axios.create({
    baseURL: '/api',
    headers: {
      'Content-Type': 'application/json'
    }

})