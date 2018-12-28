<template>
    <!--style="height:500px;"-->
    <main>
        <!--<header><div id="header-hero-"></div></header>-->
        <header><div :id="divId"></div></header>
    </main>
</template>
<script>
    //import routes from '../routes.js'
    //console.log('routes: ', routes);

    //var routes = require('../routes.js');
    //var cubesJs = require('../../public/cubes.js');
    //var cubes = require('../../public/cubes.js')
    import { createCubeComponent } from '../../public/cubes.js'
    //import createCubeComponent from '../../public/cubes.js'
    //console.log('abc test: ', routes.abc);

    export default {
        name: 'Cube',
        props: {
            colour: {
                type: String,
                required: true
            },
            id: {
                type: String,
                required: true
            }
        },
        data: function () {
            return {
                divId: "header-hero-" + this.id
            }
        },
        created: function () {
            // `this` points to the vm instance
            console.log('cube component instance created')
            //require('../../public/cubes.js')

            createCubeComponent(this.id);
        }
    }
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    main {
        display: inline-block;
    }

    .hero-name {
        width: 100%;
        text-align: left;
    }

    .name {
        font-size: 9em;
        line-height: .8em;
    }

    .last-name {
        color: var(--blue);
    }
</style>
