import AuthService from "../../services/api/auth.service";
import has from "lodash/has";
import router from "./../../router";
import storage from "./../../services/local-storage";
import get from "lodash/get";
import isNil from "lodash/isNil";


const actions = {

    

    // get me
    async getMe({
        commit
    }) {
        try {
            const {data} = await AuthService.GetMe();
            commit('GET_ME_SUCCESS', data);
        } catch (e) {
            const data = e.response.data;
            commit('GET_ME_FAILURE', data);
        }
    },
    // !get me

    // login or signup
    async loginOrSignUp({
        commit
    }, payload) {
        try {
            const {phone: phone_number} = payload;
            const to_register = 0;
            commit("LOGIN_OR_SIGNUP_TRIGGER");
            const {data} = await AuthService.LoginOrSignUp(phone_number, to_register);
            console.log("CODE", data);
            commit('LOGIN_OR_SIGNUP_SUCCESS', {data, phone_number});
        } catch (e) {
            const data = e.response.data;
            commit('LOGIN_OR_SIGNUP_FAILURE', data);
        }
    },
    // !login or signup


    // login
    async login({
        commit
    }, payload) {
        try {
            const {phone: phone_number, code} = payload;
            commit('LOGIN_TRIGGER');
            const {data} = await AuthService.Login(phone_number, code);
            commit('LOGIN_SUCCESS', data);
        } catch (e) {
            const data = e.response.data;
            commit('LOGIN_FAILURE', data);
        }
    },
    // !login

    // register
    async register({
        commit
    }, payload) {
        try {
            const {name, phone: phone_number} = payload;
            const to_register = 1;
            commit("REGISTER_TRIGGER");
            const {data} = await AuthService.LoginOrSignUp(phone_number, to_register);
            console.log("code in register", data)
            commit('REGISTER_SUCCESS', {name, phone_number});
        } catch (e) {
            const data = e.response.data;
            commit('REGISTER_FAILURE', data);
        }
    },
    // !register

    // confirm
    async confirm({
        commit
    }, payload) {
        try {
            const {phone: phone_number, code, name: full_name} = payload;
            commit("CONFIRM_TRIGGER");
            const {data} = await AuthService.Register(phone_number, code, full_name);
            commit('CONFIRM_SUCCESS', data);
        } catch (e) {
            const data = e.response.data;
            commit('CONFIRM_FAILURE', data);
        }
    },
    // !confirm


};

const mutations = {
   

     // get me
     GET_ME_SUCCESS: (state, data) => {
        state.auth.data = data;
        state.auth.isFetched = true;
    },

    GET_ME_FAILURE: (state, data) => {
        state.auth.error = data;
        state.auth.isFetched = true;
    },
    GET_ME_TRIGGER: (state) => {
        state.auth.isFetched = false;
    },
    // !get me

    // login or signup
    LOGIN_OR_SIGNUP_SUCCESS: (state, {data, phone_number}) => {
        state.loginOrSignUp.data = data;
        state.loginOrSignUp.isFetched = true;
        if (get(data, 'registered')) {
            router.push(`/login/${
                btoa(phone_number)
            }`);
        } else {
            router.push(`/register/${
                btoa(phone_number)
            }`);
        }

    },
    LOGIN_OR_SIGNUP_FAILURE: (state, data) => {
        state.loginOrSignUp.error = data;
        state.loginOrSignUp.isFetched = true;
    },
    LOGIN_OR_SIGNUP_TRIGGER: (state) => {
        state.loginOrSignUp.error = "";
        state.loginOrSignUp.isFetched = false;
    },
    // !login or signup

    // login
    LOGIN_SUCCESS: (state, {token, user}) => {
        const data = user;
        state.login.data = data;
        state.login.isFetched = true;
        storage.set('token', token);
        router.push('/dashboard');
        
    },

    LOGIN_FAILURE: (state, data) => {
        state.login.error = data;
        state.login.isFetched = true;
    },

    LOGIN_TRIGGER: (state) => {
        state.login.error = "";
        state.login.isFetched = false;
    },
    // !login

    // register
    REGISTER_SUCCESS: (state, {name, phone_number}) => {
        state.register.data = {
            name,
            phone_number
        };
        state.register.isFetched = true;
        router.push(`/confirm/${
            btoa(phone_number)
        }/${
            btoa(name)
        }`);
    },

    REGISTER_FAILURE: (state, data) => {
        state.register.error = data;
        state.register.isFetched = true;
    },
    REGISTER_TRIGGER: (state) => {
        state.register.error = "";
        state.register.isFetched = false;
    },
    // !register

    // confirm
    CONFIRM_SUCCESS: (state, {token, user}) => {
        state.confirm.data = user;
        state.confirm.isFetched = true;
        storage.set('token', token);
        router.push('/dashboard');
        
    },

    CONFIRM_FAILURE: (state, data) => {
        state.confirm.error = data;
        state.confirm.isFetched = true;
    },

    CONFIRM_TRIGGER: (state) => {
        state.confirm.error = "";
        state.confirm.isFetched = false;
    },
    // !confirm

}


const state = {
    auth: {
        data: "",
        error: "",
        isFetched: false
    },
    loginOrSignUp: {
        data: "",
        error: "",
        isFetched: false
    },
    login: {
        data: "",
        error: "",
        isFetched: false
    },
    register: {
        data: "",
        error: "",
        isFetched: false
    },
    confirm: {
        data: "",
        error: "",
        isFetched: false
    }
};

const getters = {}


const auth = {
    namespaced: true,
    actions,
    mutations,
    state,
    getters
}

export default auth;
