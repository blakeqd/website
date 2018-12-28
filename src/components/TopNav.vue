<template>
    <div class="top-nav">
        <nav-link v-bind:href="'/'" name="Home"></nav-link>
        <nav-link v-bind:href="'/about'" name="About"></nav-link>
        <nav-link v-bind:href="'/work'" name="Work"></nav-link>

        <!-- use router-link component for navigation. -->
        <!-- specify the link by passing the `to` prop. -->
        <!-- `<router-link>` will be rendered as an `<a>` tag by default -->
        <!--<router-link to="/">Go to Foo</router-link>-->
        <!--<router-link to="/about">Go to Bar</router-link>-->
    </div>
</template>
<script>
    import NavLink from '../components/NavLink.vue'

    export default {
        name: 'TopNav',
        components: {
            NavLink
        },
        props: {
        },
        data: function () {
            return {
            }
        }
    }
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .top-nav {
        /*background-color: var(--lightGrey);*/
    }
</style>
