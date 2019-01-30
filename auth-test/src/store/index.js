// import basics
import Vue from 'vue';
import Vuex from 'vuex';
// import modules
import user from './modules/user';
import auth from './modules/auth';

// use vuex in vue
Vue.use(Vuex);

// define store and export it
export default new Vuex.Store({
    // define modules in the store
    modules: {
        user,
        auth
    }
});