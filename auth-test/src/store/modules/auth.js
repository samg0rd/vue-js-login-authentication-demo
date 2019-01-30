import {AUTH_REQUEST, AUTH_SUCCESS, AUTH_ERROR, AUTH_LOGOUT} from '../actions/auth';
import {USER_REQUEST} from '../actions/user';
import apiCall from '../../utils/api';

const state = {
    token: localStorage.getItem('user-token') || '',
    status: '',
    hasLoadedOnce: false
}

const getters = {
    isAuthenticated: state => !!state.token,
    authStatus: state => state.status
}

const actions = {
    [AUTH_REQUEST]:({commit, dispatch}, user) => {
        console.log('auth request in auth.js moduele');
        return new Promise((resolve,reject)=>{
            // make my status state to LOADING
            commit(AUTH_REQUEST)
            // send the api call
            apiCall({url:'auth', method: 'POST',data: user,})
            .then(res=>{
                console.log('auth.js module , success request response --> ',res);
                
                localStorage.setItem('user-token',res.token);
                // Here set the header of your ajax library to the token value.
                // example with axios
                // axios.defaults.headers.common['Authorization'] = resp.token
                commit(AUTH_SUCCESS,res);
                dispatch(USER_REQUEST);
                resolve(res);
            })
            .catch(err=>{
                commit(AUTH_ERROR,err);
                localStorage.removeItem('user-token');
                reject(err);
            })
        })
    },
    [AUTH_LOGOUT]: ({commit,dispatch}) => {
        return new Promise((resolve,reject)=>{
            commit(AUTH_LOGOUT);
            localStorage.removeItem('user-token');
            resolve();
        })                
    }
}

const mutations = {
    [AUTH_REQUEST]: (state) => {
        state.status = 'loading'
    },
    [AUTH_SUCCESS]: (state,res) => {
        state.status = 'success',
        state.token = res.token,
        state.hasLoadedOnce = true
    },  
    [AUTH_ERROR]: (state) => {
        state.state = 'error',
        state.hasLoadedOnce = true
    },
    [AUTH_LOGOUT]: (state) => {
        state.token = ''
    }
}

export default {
    state,
    getters,
    actions,
    mutations
}