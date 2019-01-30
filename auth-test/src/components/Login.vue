<template>
    <div class="formComp">
        <img alt="Vue logo" src="../assets/logo.png">
        <h3>login to the site</h3>
        <form @submit.prevent="login">
            <input v-model="username" type="text" placeholder="username">
            <input v-model="password" type="password" placeholder="password">
            <input type="submit" value="ENTER">
        </form>
    </div>
</template>

<script>
// import auth request action type
import {AUTH_REQUEST} from '../store/actions/auth.js';

export default {
    name: "login",    
    data(){
        return {
            username:'sam',
            password: '1234'
        }
    },
    methods: {
        login: function(){
            console.log('login submited');   
            const {username,password} = this;
            this.$store.dispatch(AUTH_REQUEST,{username, password})
            .then(()=>{
                console.log('login component method , then fired ( redirecting part )');
                this.$router.push('/')
            })         
        }
    },
}
</script>

<style>
    .formComp{
        width: 60%;
        margin: 0 auto;
        border: 1px solid #eee;
        padding: 10px;
    }

    .formComp form{
        display: flex;
        flex-direction: column;
        justify-content: center;
    }

    .formComp form input {
        margin: 5px 0;
        padding: 10px;
        text-align: center;
    }

    .formComp form input[type="submit"]{
        cursor: pointer;
        transition: all .2s;
        border: 1px solid #ccc;
    }

    .formComp form input[type="submit"]:hover{
        background: #eee;
        box-shadow: 0 2px 3px #ccc;
    }
</style>


