<template>
    <div v-if="isAuthenticated" class="Dashboard">
        <h1>WELCOME TO THE DASHBOARD</h1>
        <p>test test test test test test test test test test </p>
    </div>    
</template>

<script>
import {mapGetters} from 'vuex';
export default {
    name: "Dashboard",
    computed: {
        ...mapGetters(['isAuthenticated','authStatus'])
    }
}
</script>

<style>
    .Dashboard{
        text-align: center;
    }
</style>

