<template>
    <div class="nav-el"
         v-bind:href="href"
         v-bind:class="{ active: isActive }"
         v-on:click="go">
        <router-link :to="href">{{name}}</router-link>
    </div>
</template>

<script>
    export default {
        name: 'NavLink',
        props: {
          href: {
            type:String,
            required: true
            },
            name: {
                type: String,
                required: true
            }
        },
        data: function () {
            return {
                isActive: this.$route.path == this.href
            }
        },
        computed: {
            
        },
        methods: {
            go() {
                return false;
            }
        },
        watch: {
            $route(to) {
                this.isActive = to.path == this.href
            }
        } 
    }
</script>

<style scoped>
    .active {
        border-bottom: 5px solid var(--navy);
        border-radius: 5px;
        padding-bottom: 2px;
    }

    .nav-el {
        display: inline-block;
        margin-right: 20px;
        font-size: 20px;
    }

    a {
        text-decoration: none;
        color: unset;
    }

    a:hover{
        color: var(--blue);
    }
</style>
