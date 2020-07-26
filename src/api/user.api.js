import Vue from 'vue';
import httpClient from './httpClient';
//import router from '@/router/index';

//const END_POINT = '/auth';

const userAPI = {}

userAPI.authenticate = async () => {
    Vue.gAuth.signIn().then(user => {
        console.info('access-token', user.getAuthResponse()['access_token'])
        let payload = {
            'grant_type': 'convert_token',
            'client_id': process.env.VUE_APP_API_AUTH_GOOGLE_CLIENT_ID,
            'client_secret': process.env.VUE_APP_API_AUTH_GOOGLE_CLIENT_SECRET,
            'backend': 'google-oauth2',
            'token': user.getAuthResponse()['access_token']
        }
        
        httpClient.post('/auth/convert-token', payload).then(response => {
            console.info('responsão', response)
            localStorage.setItem('token', response.data)
            // access_token
            // expires_in
            // refresh_token
            // scope
            // token_type
        })
    })
    .catch(error  => {
        print(error)
    })
}

userAPI.getAccessToken = () => {
    return localStorage.getItem('token')
}

export default userAPI