import axios from 'axios';
import config from '../../config';
import storage from './../local-storage';

const request = axios.create({
    baseURL: config.API_ROOT,
    params: {
        _f: 'json'
    },
    headers: {
        common: {
            Accept: 'application/json',
            'Content-Type': 'application/json; charset=utf-8'
        }
    }
});

request.interceptors.request.use(function (config) {
    if (! config.headers.Authorization) {
        const token = storage.get('token');
        if (token) {
            config.headers.Authorization = `Token ${token}`;
        }
    }
    return config;
}, function (error) {
    console.log("AAAAAAAAAAA")
    
    return Promise.reject(error);
});

request.interceptors.response.use(
    (response) => {
        return response
    },
    async(error) => {
        if(error.request.status === 401|| error.request.status === 403 ){
            console.log("error")
            storage.remove('token');
            this.$router.push('/')
            throw error
        }
        throw error
    }
);

export default request;
