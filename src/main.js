import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueMask from 'v-mask'
import Vuelidate from "vuelidate";
import vClickOutside from 'v-click-outside'
import VueApexCharts from 'vue-apexcharts'
import Clipboard from 'v-clipboard'
import VueSweetalert2 from 'vue-sweetalert2'
import vueNumeralFilterInstaller from 'vue-numeral-filter'
import VueScrollTo from 'vue-scrollto'
import 'sweetalert2/dist/sweetalert2.min.css'
import './assets/css/App.scss'


// sweet alert global options
const options = {
    confirmButtonColor: '#398739',
    cancelButtonColor: '#ff7674'
};
// !sweet alert global options

Vue.use(VueMask);
Vue.use(Vuelidate);
Vue.use(vClickOutside);
Vue.use(VueApexCharts);
Vue.use(Clipboard);
Vue.use(VueSweetalert2, options);
Vue.use(vueNumeralFilterInstaller, { locale: 'en-gb' });
Vue.use(VueScrollTo);


Vue.component('apexchart', VueApexCharts)

Vue.config.productionTip = false;

new Vue({
    store,
    router,
    render: h => h(App)
}).$mount('#app')
