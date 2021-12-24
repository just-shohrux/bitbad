import ApiService from './api.service'

const DashboardService = {
    GetTransactionsHistory() {
        return ApiService.get('/accounts/transactions/');
    },
    GetAllFaqs() {
        return ApiService.get('/accounts/faqs/');
    },
    GetAllproducts() {
        return ApiService.get('/products/');
    },
    GetOneProduct(prodId) {
        return ApiService.get(`/products/${prodId}`);
    },
    GetProductsByCategory(id) {
        return ApiService.get(`/products/?categoryId=${id}`);
    },
    GetProductsBySearch(query) {
        return ApiService.get(`/products/?search=${query}`);
    },
    GetAllCategories() {
        return ApiService.get('/products/categories/');
    },
    GetAllFlows() {
        return ApiService.get('/products/flows/');
    },
    CreateFlow(productId) {
        return ApiService.post(`/products/flows/`, {productId});
    },
    DeleteFlow(flowId) {
        return ApiService.delete(`/products/flows/${flowId}/`);
    },
    ChangeProfileInfo(full_name) {
        return ApiService.patch(`/accounts/profile/`, {full_name});
    },
    SendSmsCode(phone_number, to_register) {
        return ApiService.post(`/accounts/send-code/`, {phone_number, to_register});
    },
    ChangePhoneNumber(phone_number, code) {
        return ApiService.post(`/accounts/change-phone/`, {phone_number, code});
    },
    AddCardNumber(card_number) {
        return ApiService.patch(`/accounts/profile/`, {card_number});
    },
    GetProductStatistics() {
        return ApiService.get(`/products/statistics/`);
    },
    GetProductOrdersStatistics() {
        return ApiService.get(`/products/orders/statistics/`);
    },
    CreateTransaction(amount) {
        return ApiService.post(`/accounts/transactions/`,{amount});
    },
    GetTransactionList() {
        return ApiService.get(`/accounts/transactions/`);
    },
    GetOrdersList() {
        return ApiService.get(`/products/orders`);
    }
};

export default DashboardService
