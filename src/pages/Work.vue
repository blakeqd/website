<template>
    <div class="page work">
        <div class="container">
            <div class="title-container">
                <h1 class="title">Work</h1>
                <Cube colour="About" id="work"></Cube>
            </div>
            <!-- in your header -->
            <link rel="stylesheet" href="https://cdn.rawgit.com/konpa/devicon/df6431e323547add1b4cf45992913f15286456d3/devicon.min.css">

            <div class="row">
                <div class="one-third column project grey">
                    <div class="heading navy-font">Personal Website</div>
                    <div class="link navy-font"><a href="https://www.linkedin.com/in/blake-quebec-4984a67b/" target="_blank">View code</a></div>
                    <div class="heading">
                        <i class="devicon-vuejs-plain-wordmark colored"></i>
                    </div>
                    A personal website I put together to showcase who I am. You are on this site right now! I used this project as a learning experience for the javascript framework Vue.js.
                </div>
                <div class="one-third column project lightGrey">
                    <div class="heading navy-font">Money Mgmt</div>
                    <div class="link in-dev navy-font">In progress</div>
                    <div class="heading">
                        <i class="devicon-vuejs-plain-wordmark colored"></i>
                        <i class="devicon-sequelize-plain colored"></i>
                        <i class="devicon-nodejs-plain colored"></i>
                    </div>
                    Dashboard for viewing your monthly budget. Currently in development, being built with Vue.js, Node.js (Express) and Sequelize.
                </div>
                <div class="one-third column project grey">
                    <div class="heading navy-font">Innisfil Health Partners</div>
                    <div class="link navy-font"><a href="http://innhealth.ca" target="_blank">View project</a></div>
                    <div class="heading">
                        <i class="devicon-html5-plain-wordmark colored"></i>
                        <i class="devicon-jquery-plain-wordmark colored"></i>
                        <i class="devicon-bootstrap-plain-wordmark colored"></i>
                    </div>
                    
                    A landing page where you can find details about a new health centre in Innisfil. Created using the Bootstrap CSS framework, jQuery, and HTML.
                </div>
            </div>
            <div class="row">
                <div class="one-third column project lightGrey">
                    <div class="heading navy-font">Tic Tac Toe</div>
                    <div class="link navy-font"><a href="https://www.linkedin.com/in/blake-quebec-4984a67b/" target="_blank">View code</a></div>
                    <div class="heading">
                        <i class="devicon-react-original-wordmark"></i>
                        <i class="devicon-typescript-plain colored"></i>
                    </div>

                    Simple Tic Tac Toe game created using React and TypeScript.
                </div>
                <div class="one-third column project grey">
                    <div class="heading navy-font">Steganographic Communication</div>
                    <div class="link navy-font"><a href="https://www.linkedin.com/in/blake-quebec-4984a67b/" target="_blank">View code</a></div>
                    <div class="heading">
                        <i class="devicon-java-plain-wordmark colored"></i>
                    </div>

                    My undergraduate thesis project. I built an Android app which allowed users to embed messages in images using steganographic methods.
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    import Cube from '../components/Cube.vue'

    export default {
        name: 'Work',
        props: {
        },
        components: {
            Cube,
        }
    }
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .project {
        min-height: 330px;
        /*min-height: 250px;*/
        height:100%;
        margin-bottom: 4%;
        box-shadow: 0px 1px 5px 1px rgba(0,0,0,0.10);
        padding: 20px 25px;
        opacity: .85;
        text-align: center;
    }

    .heading {
        font-weight: bold; 
        text-align: center;
        margin-bottom: 5px;
    }

    h1 {
        display: inline-block;
    }

    .page .title {
        margin-bottom: 0;
    }

    h1.title {
        margin-right: 12px;
    }

    .title-container {
        display: inline-flex;
        align-items: center;
        margin-bottom: 22px;
    }

    /* cube */
    .work main {
        margin-top: 5px;
    }

    .link {
        font-size: 14px;
        color: var(--blue);
        text-decoration: underline;
        margin-bottom: 10px;
    }

    .link.in-dev {
        text-decoration: none;
        color: var(--navy);
    }

    .link a {
        color: var(--blue);
    }

    i {
        margin-right: 5px;
    }
</style>
