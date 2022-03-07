import axios from 'axios';

export default () => {
    return axios.create({
        baseURL: 'http://localhost:3333/api',
        timeout: 3000,  
    })
}