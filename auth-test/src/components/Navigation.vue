<template>
    <div class="navigation">
        <ul>
            <li>
                <router-link to="/">Home</router-link>                
            </li>
            <li v-if="!isAuthenticated">
                <router-link to="/login">Login</router-link>
            </li>
            <li v-if="isAuthenticated" @click="logout">
                <span>logout</span>                
            </li>
        </ul>
    </div>    
</template>

<script>
import {mapGetters, mapState} from 'vuex';
import {AUTH_LOGOUT} from '../store/actions/auth.js';
export default {
    name: "navigation",
    methods: {
        logout: function(){
            console.log('logging out'); 
            this.$store.dispatch(AUTH_LOGOUT).then(()=>this.$router.push('/login'));           
        }
    },
    computed: {
        ...mapGetters(['getProfile','isAuthenticated','isProfileLoaded']),
        ...mapState({
            authLoading: state => state.auth.status === 'loading',
            name: state => `${state.user.profile.title} ${state.user.profile.name}`
        })
    }
}
</script>

<style scoped>
    .navigation ul{
        display: flex;
        justify-content: space-evenly;
    }
    a{
        text-decoration: none;
    }
    li{
        list-style-type: none;
    }
    li,
    a:visited,
    a:active{        
        color: black;
        font-weight: bold;
    }    
    li{
        cursor: pointer;
    }
</style>


