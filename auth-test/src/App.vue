<template>
  <div id="app">
    <Navigation />
    <router-view/>
  </div>
</template>

<script>
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import Navigation from './components/Navigation';

import {USER_REQUEST} from './store/actions/user.js';

export default {
  name: 'app',
  components: {
    Login,
    Dashboard,
    Navigation
  },
  created: function() {
    console.log('app component created hook fired');
    console.log('[app component create1d --- isAuthenticated : ]',this.$store.getters.isAuthenticated);
    
    // its initially false , so this if statement wont do anything when app initially loads
    if(this.$store.getters.isAuthenticated){
      console.log('boogh');
      
      this.$store.dispatch(USER_REQUEST)
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
