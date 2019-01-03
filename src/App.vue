<template>
    <div id="app">
        <top-nav></top-nav>
        <!--<Cube colour="About">></Cube>-->
        <!--<main>
            <header><div id="header-hero"></div></header>
            <div class="cube">
                <div class="shadow"></div>
                <div class="sides">
                    <div class="back"></div>
                    <div class="top"></div>
                    <div class="left"></div>
                    <div class="front"></div>
                    <div class="right"></div>
                    <div class="bottom"></div>
                </div>
            </div>
        </main>-->
        <!-- route outlet -->
        <!-- component matched by the route will render here -->
        <transition name="slide-fade">
            <router-view></router-view>
        </transition>

    </div>
</template>

<script>
//import Home from './pages/Home.vue'
import TopNav from './components/TopNav.vue'
import Cube from './components/Cube.vue'
//import NavLink from './components/NavLink.vue'

export default {
  name: 'app',
  components: {
    //Home,
    TopNav,
    Cube,
    //NavLink
  },
    data: function () {
        return {}
  }
}
</script>

<style>
   
    /*
        Transitions
    */
    /* Enter and leave animations can use different */
    /* durations and timing functions.              */
    .slide-fade-enter-active {
        transition: all .6s ease;
    }

    .slide-fade-enter, .slide-fade-leave-to
    /* .slide-fade-leave-active below version 2.1.8 */ {
        transform: translateX(10px);
        opacity: 0;
    }


    :root {
        --red: #e66958;
        --grey: #bfc4ca;
        --lightGrey: #dbdde0;
        --navy: #373a46;
        --blue: #1f77fa;
    }

    .navy { background-color: var(--navy); }
    .grey { background-color: var(--lightGrey); }
    .lightGrey { background-color: var(--grey); }
    .blue { background-color: var(--blue); }

    .navy-font {color: var(--navy); }
    .grey-font { color: var(--lightGrey); }
    .lightGrey-font { color: var(--grey); }
    .blue-font { color: var(--blue); }
    .black-font { color: black; }


    #app {

        font-family: 'Raleway', 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        /*color: #2c3e50;*/
        margin: 20px;
        margin-top: 40px;
    }

    html {
        overflow-y: scroll;
    }

    body {
        /*font-size: 18px;*/
        color: var(--navy) !important;
    }

    i {
        font-size: 54px;
    }

    .page {
        margin-top: 2vh;
        text-align: left;
    }

        .page .title {
            margin-bottom: 22px;
            color: var(--grey);
        }

    /* Mobile first queries */


    /* Larger than mobile */

    @media (min-width: 400px) {
    }


    /* Larger than phablet */

    @media (min-width: 550px) {
    }


    /* Larger than tablet */

    @media (min-width: 750px) {
    }


    /* Larger than desktop */

    @media (min-width: 1000px) {
    }


    /* Larger than Desktop HD */

    @media (min-width: 1200px) {
        h1 {
            /*font-size: 4rem;*/
        }
    }

    canvas {
        height: 100vh;
        z-index: -10;
        position: fixed;
        top: 0px;
    }

    a {
        color: #bbbbc4;
        text-decoration: none;
        -o-transition: .5s;
        -ms-transition: .5s;
        -moz-transition: .5s;
        -webkit-transition: .5s;
        transition: .5s;
    }

        a:hover {
            color: #fc3565;
        }

    h1 {
        color: var(--navy);
        padding-bottom: 0px;
    }

    .skills h1, .experiences h1 {
        color: var(--grey);
    }

    h2 {
        color: var(--blue);
        /*font-size: 3rem;
        font-weight: bold;*/
        margin: 0px;
        padding: 0px;
        margin-bottom: 5px;
    }

    h4 {
        font-size: 2rem;
    }

    .row.top {
        padding-bottom: 1rem;
    }

    ul {
        text-align: justify;
    }

    .pulled h1 {
        /*color: var(--navy);*/
        font-size: 3rem;
    }

    .pulled ul {
        font-size: 16px;
        color: var(--navy);
    }

    .footer {
        padding-top: 5rem;
    }

        .footer p {
            color: var(--navy);
            font-size: 1.2rem;
        }

    .visit {
        color: white;
        font-size: 12px;
        background: #32333a;
        width: 146px;
        padding: 6px;
        border-radius: 10px;
        position: fixed;
        right: 20px;
    }

    .blurb {
        margin-top: 10px;
        text-align: justify;
        text-justify: inter-word;
        font-size: 16px;
    }
</style>
