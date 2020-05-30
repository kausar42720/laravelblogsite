
require('./bootstrap');

window.Vue = require('vue');


// moment js support
import moment from 'moment'
Vue.filter('timeformat', (arg)=>{
  return moment(arg).format("MMM Do YY"); 
})

// vuex supports
import Vuex from 'vuex'

// index.js file import here
import storeData from "./store/index"
Vue.use(Vuex);

const store = new Vuex.Store(
  storeData
);

// import Vue from 'vue'
import VueRouter from 'vue-router';

Vue.use(VueRouter);

// external routes file included here
import { routes } from './routes';

// Vue.component('example-component', require('./components/ExampleComponent.vue').default);

// global vue components
Vue.component('admin-home', require('./components/admin/AdminHome.vue').default);
Vue.component('admin-main', require('./components/admin/AdminMaster.vue').default);


// v-from
import { Form, HasError, AlertError } from 'vform'
Vue.component(HasError.name, HasError)
Vue.component(AlertError.name, AlertError)
// window.from this for use form galobaly use from.
window.Form = Form;


// Sweet Alert 2
import Swal from 'sweetalert2'
window.Swal = Swal;

const Toast = Swal.mixin({
  toast: true,
  position: 'top-end',
  showConfirmButton: false,
  timer: 3000,
  timerProgressBar: true,
  onOpen: (toast) => {
    toast.addEventListener('mouseenter', Swal.stopTimer)
    toast.addEventListener('mouseleave', Swal.resumeTimer)
  }
})
window.Toast = Toast;

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

const router = new VueRouter({
    routes, // short for `routes: routes`
    // mode is use for 0
    mode:'history'
});

const app = new Vue({
    el: '#app',
    router,
    store
});