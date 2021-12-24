import ApiService from './api.service'

const AuthService = {
    checkAuth(token) {
        if (token) {
            return ApiService.get('/accounts/profile/', {
                headers: {
                    'Authorization': `Token ${token}`
                },
            });
        }

        return ApiService.get('/accounts/profile/');
    },

    GetMe(){
        return ApiService.get('/accounts/profile/');
    },

    LoginOrSignUp(phone_number,to_register){
        return ApiService.post('/accounts/send-code/', {phone_number,to_register});
    },

    Login(phone_number,code) {
        return ApiService.post('/accounts/login/', {phone_number,code});
    },

    Register(phone_number,code,full_name) {
        return ApiService.post('/accounts/register/', {phone_number,code,full_name});
    },



};

export default AuthService;
