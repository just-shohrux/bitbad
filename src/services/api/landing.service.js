import ApiService from './api.service'

const LandingService = {
    GetLandingInfo(key) {
        return ApiService.get(`/s/${key}`);
    },
    GetRegions() {
        return ApiService.get(`/accounts/regions`);
    },
    OrderProduct({...params}) {
        return ApiService.post(`/products/orders/`,{...params});
    },
};

export default LandingService;
