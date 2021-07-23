import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';

import TheNoSidebar from "./layouts/TheNoSidebar";
import TheDefault from "./layouts/TheDefault";

import Vuelidate from "vuelidate";
import Notifications from 'vue-notification'
import VeeValidate from 'vee-validate';
import VueApexCharts from 'vue-apexcharts'
import axiosSetup from "./helpers/interceptors";

// call the axios setup method here
import VueTreeList from 'vue-tree-list'
 
Vue.use(VueTreeList)
Vue.use(VueApexCharts)
Vue.config.productionTip = false
Vue.use(VeeValidate);

import VueHtmlToPaper from 'vue-html-to-paper';

const options = {
    name: '_blank',
    specs: [
        'fullscreen=yes',
        'titlebar=yes',
        'scrollbars=yes'
    ],
    styles: [
        'https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css',
        'https://unpkg.com/kidlat-css/css/kidlat.css',

    ],
    timeout: 1000, // default timeout before the print window appears
    autoClose: true, // if false, the window will not close after printing
    windowTitle: window.document.title, // override the window title
}

Vue.use(VueHtmlToPaper, options);

import money from 'v-money'
const money_option= {
        decimal: ',',
        thousands: ' ',
        prefix: ' ',
        suffix: ' ',
        precision: 0,
        masked: false
}

Vue.use(money, money_option)
Vue.component('default-layout', TheDefault)
Vue.component('no-sidebar-layout', TheNoSidebar)
Vue.component('apexchart', VueApexCharts)
Vue.use(Notifications)
Vue.use(Vuelidate);

import router from './routes/index'
import store from './store/index'
axiosSetup()
const app = new Vue({
  vuetify,
  store,
  router,
  render: h => h(App)
}).$mount('#app')

store.$app = app;
