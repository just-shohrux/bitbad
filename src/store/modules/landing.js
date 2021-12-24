import LandingService from "../../services/api/landing.service";


const actions = { // landing product info
    async landing({
        commit
    }, payload) {
        const {landing:key} = payload;
        try {
            const {data} = await LandingService.GetLandingInfo(key);
            commit('LANDING_PRODUCT_INFO_SUCCESS', {data});
        } catch (e) {
            const data = e.response.data;
            commit('LANDING_PRODUCT_INFO_FAILURE', data);
        }
    },
    // !landing product

    // get regions
    async getRegions({commit}) {
        try {
            const {data} = await LandingService.GetRegions();
            commit('GET_REGIONS_SUCCESS', {data});
        } catch (e) {
            const data = e.response.data;
            commit('GET_REGIONS_FAILURE', data);
        }
    },
    // !get regions

    // order product
    async orderProduct({commit},payload) {
        try {
            const {data} = await LandingService.OrderProduct({...payload});
            commit('ORDER_PRODUCT_SUCCESS', {data});
        } catch (e) {
            const data = e.response.data;
            commit('ORDER_PRODUCT_FAILURE', data);
        }
    },
    // order product

};

const mutations = {

    // landing product info
    LANDING_PRODUCT_INFO_SUCCESS: (state, data) => {
        state.landing.data = data;
        state.landing.isFetched = true;
    },

    LANDING_PRODUCT_INFO_FAILURE: (state, data) => {
        state.landing.errors = data;
        state.landing.isFetched = true;
    },

    LANDING_PRODUCT_INFO_TRIGGER: (state) => {
        state.landing.isFetched = false;
    },
    // !landing product info

    // get regions
    GET_REGIONS_SUCCESS: (state, data) => {
        state.regions.data = data;
        state.regions.isFetched = true;
    },

    GET_REGIONS_FAILURE: (state, data) => {
        state.regions.errors = data;
        state.regions.isFetched = true;
    },

    GET_REGIONS_TRIGGER: (state) => {
        state.regions.isFetched = false;
    },
    // !get regions

    // order product
    ORDER_PRODUCT_SUCCESS: (state, data) => {
        state.order.data = data;
        state.order.isFetched = true;
    },

    ORDER_PRODUCT_FAILURE: (state, data) => {
        state.order.errors = data;
        state.order.isFetched = true;
    },

    ORDER_PRODUCT_TRIGGER: (state) => {
        state.order.isFetched = false;
    },
    // !order product


}


const state = {
    landing: {
        data: {},
        errors: null,
        isFetched: false
    },
    regions: {
        data: [],
        errors: null,
        isFetched: false
    },
    order:{
        data: {},
        errors: null,
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
