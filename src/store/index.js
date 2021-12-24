import Vue from "vue";
import Vuex from "vuex";

// all modules
import home from './modules/home';
import auth from './modules/auth';
import dashboard from './modules/dashboard';
import landing from './modules/landing'

Vue.use(Vuex);

export default new Vuex.Store({
    actions: {},
    mutations: {},
    state: {},
    getters: {},
    modules: {
        home,
        auth,
        dashboard,
        landing
    }
})
