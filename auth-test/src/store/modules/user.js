import {USER_REQUEST, USER_SUCCESS, USER_ERROR} from '../actions/user';
import apiCall from '../../utils/api';
import Vue from 'vue';
import {AUTH_LOGOUT} from '../actions/auth';

const state = {
    status: '',
    profile: {}
}

// getters gives us accesibility to the state slices from components
const getters = {
    getProfile: state => state.profile,
    isProfileLoaded: state => !!state.profile.name
}

// actions triggers 
const actions = {
    [USER_REQUEST]: ({commit,dispatch}) => {
        commit(USER_REQUEST);
        apiCall({
            url: 'user/me'
        })
        .then(res => {
            commit(USER_SUCCESS,res)                        
        })
        .catch(err => {
            commit(USER_ERROR);
            // if resp is unauthorized, logout, to
            dispatch(AUTH_LOGOUT);
        })
    }
}

// The only way to actually change state in a Vuex store is by committing a mutation.
// The handler function is where we perform actual state modifications, and it will receive 
// the state as the first argument
// it can accept a payload as the second argument, in this case --> res
// the property in the mutations object is the 'type'
// Mutations Must Be Synchronous
const mutations = {
    [USER_REQUEST]: (state) => {
        state.status = 'loading'
    },
    [USER_SUCCESS]: (state,res) => {
        console.log('user js module mutations --- respons : ', res);
        state.status = 'success';
        // state.profile = {...res}
        Vue.set(state,'profile',res);
    },
    [USER_ERROR]: (state) => {
        state.status = 'error'
    },
    [AUTH_LOGOUT] : (state) => {
        state.profile = {}
    }
}

export default {
    state,
    getters,
    actions,
    mutations
}