<template>
        <div class="hero-name">
            <div class="name">
                <!--<div class="first-name">Blake</div>-->
                <!--<Cube colour="About" id="heroname"></Cube>-->
                <!--<div class="last-name">Quebec</div>-->
                <h1 class="first-name">
                    <span class="blue-font">B</span>
                    <span class="navy-font">L</span>
                    <span class="navy-font">A</span>
                    <span class="navy-font">K</span>
                    <span class="navy-font">E</span>
                </h1>
                <!--<Cube colour="About" id="heroname"></Cube>-->
                <h1 class="last-name">
                    <span class="blue-font">Q</span>
                    <span class="navy-font">U</span>
                    <span class="navy-font">E</span>
                    <span class="navy-font">B</span>
                    <span class="navy-font">E</span>
                    <span class="navy-font">C</span>
                </h1>
            </div>
        </div>
</template>
<script>
    import Cube from './Cube.vue'

    export default {
        components: {
            Cube,
        },
        name: 'HeroName',
        props: {
        },
        data: function () {
            return {
            }
        },
    }
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .hero-name {
        /*width: 100%;*/
        text-align: left;
    }

    .name {
        /*font-size: 9em;*/
        line-height: .8em;
    }

    .first-name {
        display: inline-block;
    }

    .last-name {
        /*color: var(--blue);*/
    }

    h1 {
        line-height: .9;
        margin-bottom: 0;
    }

    /* Larger than tablet */
    @media (min-width: 750px) {
        h1 {
            font-size: 4em;
        }
    }

    /* Larger than desktop */
    @media (min-width: 1000px) {
        h1 {
            font-size: 6em;
        }
    }

    @media (min-width: 1200px) {
        h1 {
            font-size: 8em;
        }
    }


</style>
