// import the basics
import Vue from 'vue';
import Router from 'vue-router';
// import the components u want to load with router
import Home from './components/Home.vue';
import Login from './components/Login.vue';
import Dashboard from './components/Dashboard.vue';
// import the store from vuex
import store from './store';

Vue.use(Router);

export default new Router({
    mode: 'history',
    routes: [
        {
            path: "/",
            name: "home",
            component: Home,            
        },
        {
            path: "/dashboard",
            name: "dashboard",
            component: Dashboard,
            beforeEnter: (to, from, next) => {
                // check if the user is authenticated or not
                if (store.getters.isAuthenticated) {
                    // if authenticated
                  next()
                //   get out and let it go to the dashboard
                  return
                }
                // if not,go to login page
                next('/login')
            }        
        },
        {
            path: "/login",
            name: "login",
            component: Login,
            beforeEnter: (to, from, next) => {
                if (!store.getters.isAuthenticated) {
                    // check if the user is already authenticated or not
                  next()
                    // if the ????????????!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!   
                  return
                }
                next('/')
            }
        },
    ]
})
