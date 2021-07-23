import axios from 'axios'

export default axios.create({
    // baseURL: 'http://localhost:8088/api'
    baseURL: process.env.VUE_APP_PROJET
})
