import axios from 'axios';
// import Cookies from 'js-cookie'
// import userAPI from './user.api';

const httpClient = axios.create({
    baseURL: process.env.VUE_APP_BASE_URL,
    timeout: 5000,
    headers: {
        'Content-type': 'application/json',
        //'X-CSFRToken': Cookies.get('csrftoken')
    }
});

// const authInterceptor = config => {
//     config.headers['Authorization'] = userAPI.getAccessToken();
//     return config;
// };

// httpClient.interceptors.request.use(authInterceptor);

export default httpClient