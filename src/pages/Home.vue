<template>
    <div class="page home">
        <div class="container">
            <div class="row">
                <div class="three columns">
                    <span style="color: white;">.</span>
                </div>
                <div class="six columns">
                    <HeroName />
                </div>
                <div class="three columns">
                    <span style="color: white;">.</span>
                </div>
                
            </div>
            <div class="row blurb">
                <div class="three columns">
                    <span style="color: white;">.</span>
                </div>
                <div class="six columns">
                    <div class="text">
                        Hello world! I'm a software developer who was raised in the frozen depths of Northern Ontario. I obtained an undergraduate degree in computer science from Laurentian University. Since graduating, I've decided to remain in the North spending my days building software. When not working on side projects, I can be found in the gym or cheering for the Toronto Raptors.
                    </div>
                </div>
                <div class="three columns">
                    <span style="color: white;">.</span>
                </div>
                
            </div>
            <div class="row cta cta-button">
                <div class="three columns cta-button">
                    <!--<a class="button" href="http://getskeleton.com">test</a>-->
                    <router-link class="button more" :to="'/about'">More</router-link>
                </div>
            </div>
            <div class="row cta-button" style="margin-top:5px;">
                <div class="three columns cube-button">
                    <Cube colour="About" id="heroname"></Cube>
                </div>
            </div>

        </div>
    </div>
</template>
<script>
    import HeroName from '../components/HeroName.vue'
    import Cube from '../components/Cube.vue'

    export default {
        name: 'Home',
        props: {
        },
        components: {
            HeroName,
            Cube
        }
    }
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .page.home {
        /*position: absolute;
        top: 30vh;
        left: 10vh;*/
        position: relative;
        top: 5em;
    }
    
    .cta {
        margin-top: 5em;
    }

    /*.cube-home {
        margin-right: 25px;
    }*/

    .home .cube-button {
        display: flex;
        justify-content: center;
        margin-bottom: 25px;
    }

    .home .cta-button {
        display: flex;
        justify-content: center;
    }

    .cube {
        left: 0 !important;
    }

    .blurb {
        margin-top: 5em;
    }

    .button.more {
        color: var(--navy);
        border-color: var(--navy);
    }

</style>
