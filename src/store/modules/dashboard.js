import router from "../../router";
import DashboardService from "./../../services/api/dashboard.service";
import storage from "../../services/local-storage";


const actions = {

    // get profile
    // !get profile


    // get all faqs
    async getAllFaqs({commit}) {
        try {
            const {data} = await DashboardService.GetAllFaqs();
            commit('GET_ALL_FAQS_SUCCESS', data);
        } catch (e) {
            const data = e.response.data;
            commit('GET_ALL_FAQS_FAILURE', data);
        }
    },
    // !get all faqs

    // get all products
    async getAllProducts({commit}) {
        try {
            commit('GET_ALL_PRODUCTS_TRIGGER');
            const {data} = await DashboardService.GetAllproducts();
            commit('GET_ALL_PRODUCTS_SUCCESS', data);
        } catch (e) {
            const data = e.response.data;
            commit('GET_ALL_PRODUCTS_FAILURE', data);
        }
    },
    // !get all products

    // get products by category
    async getProductsByCategory({
        commit
    }, payload) {
        const {id} = payload;
        try {
            commit('GET_ALL_PRODUCTS_TRIGGER');
            const {data} = await DashboardService.GetProductsByCategory(id);
            commit('GET_PRODUCTS_BY_CATEGORY_SUCCESS', data);
        } catch (e) {
            const data = e.response.data;
            commit('GET_PRODUCTS_BY_CATEGORY_FAILURE', data);
        }
    },
    // !get products by category

    // get products by search
    async getProductsBySearch({
        commit
    }, payload) {
        const {query} = payload;
        try {
            commit('GET_PRODUCTS_BY_SEARCH_TRIGGER');
            const {data} = await DashboardService.GetProductsBySearch(query);
            commit('GET_PRODUCTS_BY_SEARCH_SUCCESS', data);
        } catch (e) {
            const data = e.response.data;
            commit('GET_PRODUCTS_BY_SEARCH_FAILURE', data);
        }
    },
    // !get products by search

    // get one product
    async getOneProduct({
        commit
    }, payload) {
        const {prodId} = payload;
        try {
            commit('GET_ONE_PRODUCT_TRIGGER');
            const {data} = await DashboardService.GetOneProduct(prodId);
            commit('GET_ONE_PRODUCT_SUCCESS', data);
        } catch (e) {
            const data = e.response.data;
            commit('GET_ONE_PRODUCT_FAILURE', data);
        }
    },
    // !get one product

    // get all categories
    async getAllCategories({commit}) {
        try {
            const {data} = await DashboardService.GetAllCategories();
            commit('GET_ALL_CATEGORIES_SUCCESS', data);
        } catch (e) {
            const data = e.response.data;
            commit('GET_ALL_CATEGORIES_FAILURE', data);
        }
    },
    // !get all categories

    // get all flows
    async getAllFlows({commit}) {
        try {
            const {data} = await DashboardService.GetAllFlows();
            commit('GET_ALL_FLOWS_SUCCESS', data);
        } catch (e) {
            const data = e.response.data;
            commit('GET_ALL_FLOWS_FAILURE', data);
        }
    },
    // !get all flows

    // create flow
    async createFlow({
        commit
    }, payload) {
        const {productId} = payload;
        try {
            commit('CREATE_FLOW_TRIGGER');
            const {data} = await DashboardService.CreateFlow(productId);
            commit('CREATE_FLOW_SUCCESS', data);
        } catch (e) {
            const data = e.response.data;
            commit('CREATE_FLOW_FAILURE', data);
        }
    },
    // !create flow

      // delete flow
      async deleteFlow({
        commit
    }, payload) {
        const {flowId} = payload;
        try {
            commit('DELETE_FLOW_TRIGGER');
            const {data} = await DashboardService.DeleteFlow(flowId);
            commit('DELETE_FLOW_SUCCESS', data);
        } catch (e) {
            const data = e.response.data;
            commit('DELETE_FLOW_FAILURE', data);
        }
    },
    // !delete flow

    // change profile info
    async changeProfileInfo({
        commit
    }, payload) {
        const {full_name, data: {
                token
            }} = payload;
        try {
            commit("CHANGE_PROFILE_INFO_TRIGGER");
            const {data} = await DashboardService.ChangeProfileInfo(full_name);
            commit('CHANGE_PROFILE_INFO_SUCCESS', {data, token});
            this.dispatch('auth/getMe');
        } catch (e) {
            const data = e.response.data;
            commit('CHANGE_PROFILE_INFO_FAILURE', data);
        }
    },
    // !change profile info

    // send sms code
    async sendSmsCode({
        commit
    }, payload) {
        const {full_name, phone_number} = payload;
        const to_register = true;
        try {
            commit('SEND_SMS_CODE_TRIGGER');
            const {data} = await DashboardService.SendSmsCode(phone_number, to_register);
            console.log("code in phone change", data);
            commit('SEND_SMS_CODE_SUCCESS', {phone_number, full_name});
        } catch (e) {
            const data = e.response.data;
            commit('SEND_SMS_CODE_FAILURE', data);
        }
    },
    // !send sms code

    // change phone number
    async changePhoneNumber({
        commit
    }, payload) {
        const {code, phone_number, full_name} = payload;
        try {
            commit("CHANGE_PHONE_NUMBER_TRIGGER");
            const {data} = await DashboardService.ChangePhoneNumber(phone_number, code);
            commit('CHANGE_PHONE_NUMBER_SUCCESS', data);
            this.dispatch('dashboard/changeProfileInfo', {full_name, data});
        } catch (e) {
            const data = e.response.data;
            commit('CHANGE_PHONE_NUMBER_FAILURE', data);
        }
    },
    // !change phone number

    // add card number
    async addCardNumber({
        commit
    }, payload) {
        const {card_number} = payload;
        try {
            commit("ADD_CARD_NUMBER_TRIGGER");
            const {data} = await DashboardService.AddCardNumber(card_number);
            commit('ADD_CARD_NUMBER_SUCCESS', data);
            this.dispatch('auth/getMe');
        } catch (e) {
            const data = e.response.data;
            commit('ADD_CARD_NUMBER_FAILURE', data);
        }
    },
    // !add card number

    // get product statistics
    async getProductStatistics({commit}) {
        try {
            const {data} = await DashboardService.GetProductStatistics();
            console.log("data", data)
            commit('GET_PRODUCT_STATISTICS_SUCCESS', data);
        } catch (e) {
            const data = e.response.data;
            commit('GET_PRODUCT_STATISTICS_FAILURE', data);
        }
    },
    // !get product statistics

    // get product orders statistics
    async getProductOrdersStatistics({commit}) {
        try {
            const {data} = await DashboardService.GetProductOrdersStatistics();
            commit('GET_PRODUCT_ORDERS_STATISTICS_SUCCESS', data);
        } catch (e) {
            const data = e.response.data;
            commit('GET_PRODUCT_ORDERS_STATISTICS_FAILURE', data);
        }
    },
    // !get product orders statistics

    // create transaction
    async createTransaction({
        commit
    }, payload) {
        try {
            const {amount} = payload;
            commit('CREATE_TRANSACTION_TRIGGER');
            const {data} = await DashboardService.CreateTransaction(amount);
            commit('CREATE_TRANSACTION_SUCCESS', data);
            this.dispatch('dashboard/getTransactionList')
        } catch (e) {
            const data = e.response.data;
            commit('CREATE_TRANSACTION_FAILURE', data);
        }
    },
    // !create transaction

     // get transaction list
     async getTransactionList({
        commit
    }) {
        try {
            const {data} = await DashboardService.GetTransactionList();
            commit('GET_TRANSACTIONS_LIST_SUCCESS', data);
        } catch (e) {
            const data = e.response.data;
            commit('GET_TRANSACTIONS_LIST_FAILURE', data);
        }
    },
    // !get transaction list

    // get orders list
    async getOrdersList({
        commit
    }) {
        try {
            const {data} = await DashboardService.GetOrdersList();
            commit('GET_ORDERS_LIST_SUCCESS', data);
        } catch (e) {
            const data = e.response.data;
            commit('GET_ORDERS_LIST_FAILURE', data);
        }
    },
    // !get orders list

}

const mutations = {

    // get all faqs
    GET_ALL_FAQS_SUCCESS: (state, data) => {
        state.faqs.data = data;
        state.faqs.isFetched = true;
    },

    GET_ALL_FAQS_FAILURE: (state, data) => {
        console.log(data);
        state.faqs.data = [];
        state.faqs.isFetched = true;
    },
    GET_ALL_FAQS_TRIGGER: (state) => {
        state.faqs.data = [];
        state.faqs.isFetched = false;
    },
    // !get all faqs

    // get all products
    GET_ALL_PRODUCTS_SUCCESS: (state, data) => {
        state.products.data = data;
        state.products.isFetched = true;
    },

    GET_ALL_PRODUCTS_FAILURE: (state, data) => {
        console.log(data);
        state.products.data = [];
        state.products.isFetched = true;
    },
    GET_ALL_PRODUCTS_TRIGGER: (state) => {
        state.products.data = [];
        state.products.isFetched = false;
    },
    // !get all products

     // get one product
     GET_ONE_PRODUCT_SUCCESS: (state, data) => {
        state.product.data = data;
        state.product.isFetched = true;
    },

    GET_ONE_PRODUCT_FAILURE: (state, data) => {
        console.log(data);
        state.product.error = data;
        state.product.isFetched = true;
    },
    GET_ONE_PRODUCT_TRIGGER: (state) => {
        state.product.data = {};
        state.product.error = "";
        state.product.isFetched = false;
    },
    // !get one product

    // get  products by category
    GET_PRODUCTS_BY_CATEGORY_SUCCESS: (state, data) => {
        state.products.data = data;
        state.products.isFetched = true;
    },

    GET_PRODUCTS_BY_CATEGORY_FAILURE: (state, data) => {
        console.log(data);
        state.products.data = [];
        state.products.isFetched = true;
    },

    GET_PRODUCTS_BY_CATEGORY_TRIGGER: (state) => {
        state.products.data = [];
        state.products.isFetched = false;
    },
    // !get  products by category

    // get  products by search
    GET_PRODUCTS_BY_SEARCH_SUCCESS: (state, data) => {
        state.products.data = data;
        state.products.isFetched = true;
    },

    GET_PRODUCTS_BY_SEARCH_FAILURE: (state, data) => {
        console.log(data);
        state.products.data = [];
        state.products.isFetched = true;
    },

    GET_PRODUCTS_BY_SEARCH_TRIGGER: (state) => {
        state.products.data = [];
        state.products.isFetched = false;
    },
    // !get  products by search

    // get all categories
    GET_ALL_CATEGORIES_SUCCESS: (state, data) => {
        state.categories.data = data;
        state.categories.isFetched = true;
    },

    GET_ALL_CATEGORIES_FAILURE: (state, data) => {
        console.log(data);
        state.categories.data = [];
        state.categories.isFetched = true;
    },

    GET_ALL_CATEGORIES_TRIGGER: (state) => {
        state.categories.data = [];
        state.categories.isFetched = false;
    },
    // !get all categories

    // get all flows
    GET_ALL_FLOWS_SUCCESS: (state, data) => {
        state.flows.data = data;
        state.flows.isFetched = true;
    },

    GET_ALL_FLOWS_FAILURE: (state, data) => {
        console.log(data);
        state.flows.data = [];
        state.flows.isFetched = true;
    },

    GET_ALL_FLOWS_TRIGGER: (state) => {
        state.flows.data = [];
        state.flows.isFetched = false;
    },
    // !get all flows
    // create flow
    CREATE_FLOW_SUCCESS: (state, data) => {
        state.flow.data = data;
        state.flow.isFetched = true;
    },

    CREATE_FLOW_FAILURE: (state, data) => {
        console.log(data);
        state.flow.error = data;
        state.flow.isFetched = true;
    },
    CREATE_FLOW_TRIGGER: (state) => {
        state.flow.data = {};
        state.flow.error = {};
        state.flow.isFetched = false;
    },
    // !create flow

     // delete  flow
     DELETE_FLOW_SUCCESS: (state, data) => {
        state.flowDelete.data = data;
        state.flowDelete.isFetched = true;
    },

    DELETE_FLOW_FAILURE: (state, data) => {
        console.log(data);
        state.flowDelete.error = data;
        state.flowDelete.isFetched = true;
    },
    DELETE_FLOW_TRIGGER: (state) => {
        state.flowDelete.data = "";
        state.flowDelete.error = "";
        state.flowDelete.isFetched = false;
    },
    // !delete flow

    // change profile info
    CHANGE_PROFILE_INFO_SUCCESS: (state, {data, token}) => {
        state.profile.data = data;
        state.profile.isFetched = true;
        storage.set('token', token);
        router.push('/profile')
    },

    CHANGE_PROFILE_INFO_FAILURE: (state, data) => {
        console.log(data);
        state.profile.error = data;
        state.profile.isFetched = true;
    },
    CHANGE_PROFILE_INFO_TRIGGER: (state) => {
        state.profile.data = {};
        state.profile.error = "";
        state.profile.isFetched = false;
    },
    // !change profile info

    // send sms code
    SEND_SMS_CODE_SUCCESS: (state, {full_name, phone_number}) => {
        state.sms.data = {
            full_name,
            phone_number
        };
        state.sms.isFetched = true;
        router.push(`/profile-change/confirm-code/${
            btoa(full_name)
        }/${
            btoa(phone_number)
        }`)
    },

    SEND_SMS_CODE_FAILURE: (state, data) => {
        console.log(data);
        state.sms.error = data;
        state.sms.isFetched = true;
    },

    SEND_SMS_CODE_TRIGGER: (state) => {
        state.sms.data = {};
        state.sms.error = "";
        state.sms.isFetched = false;
    },
    // !send sms code

    // change phone number
    CHANGE_PHONE_NUMBER_SUCCESS: (state, data) => {
        state.phone.data = data;
        state.phone.isFetched = true;

    },

    CHANGE_PHONE_NUMBER_FAILURE: (state, data) => {
        console.log(data);
        state.phone.error = data;
        state.phone.isFetched = true;
    },
    CHANGE_PHONE_NUMBER_TRIGGER: (state) => {
        state.phone.data = {};
        state.phone.error = "";
        state.phone.isFetched = false;
    },
    // !change phone number

    // add card number
    ADD_CARD_NUMBER_SUCCESS: (state, data) => {
        state.card.data = data;
        state.card.isFetched = true;
        router.push('/profile')
    },

    ADD_CARD_NUMBER_FAILURE: (state, data) => {
        console.log(data);
        state.card.errors = data;
        state.card.isFetched = true;
    },

    ADD_CARD_NUMBER_TRIGGER: (state) => {
        state.card.data = {};
        state.card.error = "";
        state.card.isFetched = false;
    },
    // !add card number

    // get product statistics
    GET_PRODUCT_STATISTICS_SUCCESS: (state, data) => {
        state.productStatistics.data = data;
        state.productStatistics.isFetched = true;
    },

    GET_PRODUCT_STATISTICS_FAILURE: (state, data) => {
        console.log(data);
        state.productStatistics.data = data;
        state.productStatistics.isFetched = true;
    },

    GET_PRODUCT_STATISTICS_TRIGGER: (state) => {
        state.productStatistics.data = [];
        state.productStatistics.isFetched = false;
    },
    // !get product statistics

    // get product orders statistics
    GET_PRODUCT_ORDERS_STATISTICS_SUCCESS: (state, data) => {
        state.productOrdersStatistics.data = data;
        state.productOrdersStatistics.isFetched = true;
    },

    GET_PRODUCT_ORDERS_STATISTICS_FAILURE: (state, data) => {
        console.log(data);
        state.productOrdersStatistics.data = {};
        state.productOrdersStatistics.isFetched = true;
    },

    GET_PRODUCT_ORDERS_STATISTICS_TRIGGER: (state) => {
        state.productOrdersStatistics.data = {};
        state.productOrdersStatistics.isFetched = false;
    },
    // !get product orders statistics

    // create transaction
    CREATE_TRANSACTION_SUCCESS: (state, data) => {
        state.transaction.data = data;
        state.transaction.isFetched = true;
    },

    CREATE_TRANSACTION_FAILURE: (state, data) => {
        console.log(data);
        state.transaction.error = data;
        state.transaction.isFetched = true;
    },

    CREATE_TRANSACTION_TRIGGER: (state) => {
        state.transaction.error = [];
        state.transaction.data = {};
        state.transaction.isFetched = false;
    },
    // !create transactionf

     // get transactions list
     GET_TRANSACTIONS_LIST_SUCCESS: (state, data) => {
        state.transactions.data = data;
        state.transactions.isFetched = true;
    },

    GET_TRANSACTIONS_LIST_FAILURE: (state, data) => {
        console.log(data);
        state.transactions.data = data;
        state.transactions.isFetched = true;
    },

    GET_TRANSACTIONS_LIST_TRIGGER: (state) => {
        state.transactions.data = [];
        state.transactions.isFetched = false;
    },
    // !get transactions list

     // get orders list
     GET_ORDERS_LIST_SUCCESS: (state, data) => {
        state.orders.data = data;
        state.orders.isFetched = true;
    },

    GET_ORDERS_LIST_FAILURE: (state, data) => {
        console.log(data);
        state.orders.data = data;
        state.orders.isFetched = true;
    },

    GET_ORDERS_LIST_TRIGGER: (state) => {
        state.orders.data = [];
        state.orders.isFetched = false;
    },
    // !get orders list
};

const state = {
    faqs: {
        data: [],
        isFetched: false
    },
    products: {
        data: [],
        isFetched: false
    },
    product: {
        data: {},
        error:"",
        isFetched: false
    },
    categories: {
        data: [],
        isFetched: false
    },
    flows: {
        data: [],
        isFetched: false
    },
    flow: {
        data: {},
        error: {},
        isFetched: false
    },
    flowDelete:{
        data: "",
        error: "",
        isFetched: false
    },
    profile: {
        data: {},
        error:"",
        isFetched: false
    },
    sms: {
        data: {},
        error: "",
        isFetched: false
    },
    phone: {
        data: {},
        error: "",
        isFetched: false
    },
    card: {
        data: {},
        error: "",
        isFetched: false
    },
    productStatistics: {
        data: [],
        isFetched: false
    },
    productOrdersStatistics: {
        data: [],
        isFetched: false
    },
    transaction: {
        data: {},
        error: [],
        isFetched: false
    },
    transactions: {
        data: [],
        isFetched: false
    },
    orders: {
        data: [],
        isFetched: false
    }

};

const getters = {}


const dashboard = {
    namespaced: true,
    actions,
    mutations,
    state,
    getters
}

export default dashboard;
