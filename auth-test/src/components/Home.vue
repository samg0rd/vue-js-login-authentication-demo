<template>
    <div>
        <div v-if="isAuthenticated">
            <h1>home component</h1>
            <h3>authenticated</h3>
        </div>
        <div v-if="!isAuthenticated && authStatus !== 'loading'">
            <h1>home component</h1>
            <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede.

Donec nec justo eget felis facilisis fermentum. Aliquam porttitor mauris sit amet orci. Aenean dignissim pellentesque felis.

Morbi in sem quis dui placerat ornare. Pellentesque odio nisi, euismod in, pharetra a, ultricies in, diam. Sed arcu. Cras consequat.

Praesent dapibus, neque id cursus faucibus, tortor neque egestas auguae, eu vulputate magna eros eu erat. Aliquam erat volutpat. Nam dui mi, tincidunt quis, accumsan porttitor, facilisis luctus, metus.

Phasellus ultrices nulla quis nibh. Quisque a lectus. Donec consectetuer ligula vulputate sem tristique cursus. Nam nulla quam, gravida non, commodo a, sodales sit amet, nisi.</P>
            <Login />
        </div>
    </div>
</template>

<script>
import Login from './Login';
import {mapGetters} from 'vuex';
export default {
    name: "Home",
    components:{
        Login
    },
    computed: {
        ...mapGetters(['isAuthenticated','authStatus'])
    }
}
</script>

<style>

</style>


