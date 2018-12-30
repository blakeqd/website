<template>
    <div class="page about">
        <div class="container">
            <!--<Cube colour="About" id="about"></Cube>-->
            <div class="row top">
                <div class="six columns">
                    <h1 class="title">About</h1>
                    <h1 class="name">Blake Quebec</h1>
                    <div class="contact">
                        <h6 class="email">blake.quebec <span class="bot">[at]</span> gmail <span class="bot">[dot]</span> com</h6>
                        <div><a href="https://www.linkedin.com/in/blake-quebec-4984a67b/" target="_blank"><img class="linkedin" src="../assets/linkedin_svg.svg" /></a></div>
                    </div>
                </div>
                <div class="six columns profile-container">
                    <img class="profile" src="../assets/blake.jpg" alt="Avatar">
                </div>
            </div>
            <div class="row">
                <div class="twelve column">
                    <h2 class="job-title">Software Developer</h2>
                    <div class="blurb">
                        <p>
                            My passion is building software that brings you value; whether it be a tool that helps you do your job, saves you time, or gives insight into your data.
                            Software is something that should help make your life easier. 
                            Working primarily on projects in the mining industry, a common requirement I encounter is the need to bring older processes to the digital era. 
                            Instead of capturing data in excel or using pen-and-paper, I have built solutions where data is captured using digital forms and fed into dashboards, reports, and web applications that allow users to analyze the data, study trends, and view metrics.
                        </p> 

                        <p>
                            I have lead the development of software projects consisting of web applications (AngularJS, JQuery, Javascript, ASP.NET), desktop software (.NET Stack), reporting and business intelligence (SQL Server Reporting Services, Business Objects), and database architecture (SQL Server). 
                            I have also worked with customers to gather their expectations and their software requirements, define project scope, and plan development sprints.
                        </p>

                        <p>
                            I have lead the development of software projects consisting of web applications (AngularJS, JQuery, Javascript, ASP.NET), desktop software (.NET Stack), reporting and business intelligence (SQL Server Reporting Services, Business Objects), and database architecture (SQL Server).
                            I have also worked with customers to gather their expectations and their software requirements, define project scope, and plan development sprints.
                        </p>
                    </div>
                </div>
            </div>

            <div class="row skills">
                <div class="one-half column">
                    <div class="skills pulled">
                        <h1>Skills</h1>
                        <Cube colour="About" id="skills"></Cube>
                        <ul>Vue.js</ul>
                        <ul>AngularJS</ul>
                        <ul>C#</ul>
                        <ul>.NET</ul>
                        <ul>Node.js</ul>
                        <ul>SQL</ul>
                    </div>
                </div>

                <div class="one-half column">
                    <div class="experiences pulled">
                        <h1>Experiences</h1>
                        <Cube colour="About" id="experiences"></Cube>
                        <ul>
                            .NET Application development inclduing ASP.NET Core, WPF, and Windows Forms with Dapper and Entity Framework ORMs.
                        </ul>
                        <ul>Web development with Vue.js, AngularJS, JQuery, Javascript, HTML, CSS, and Bootstrap.</ul>
                        <ul>Database development with SQL Server and reporting using SQL Server Reporting Services and SAP's BusinessObjects Web Intelligence.</ul>
                    </div>
                </div>
            </div>

            <div class="footer">
                <p>Layout composed with <a href="http://getskeleton.com/">Skeleton.css</a></p>
            </div>
        </div>
    </div>
</template>
<script>
    import Cube from '../components/Cube.vue'

    export default {
        name: 'About',
        props: {
        },
        components: {
            Cube,
        }
    }
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    h1, h2 {
        margin-bottom: 1rem;
    }
    
    h1 {
        display: inline-block;
    }

    .title {
        display: block;
        margin-bottom: 0;
    }

    .email {
        color: var(--navy);
        font-size: 14px;
        margin-bottom: 8px;
        margin-right: 15px;
    }

    .contact {
        margin-bottom: 1rem;
    }

    .bot {
        color: var(--grey);
    }

    .name {
        margin-top: 5px;
        line-height: 0.9;
    }

    .job-title {
        line-height: 0.9;
    }
    
    .row.skills {
        margin-top: 1em;
    }

    .image-border {
        border-radius: 5px;
    }

    /*.profile {
        background-repeat: no-repeat;
        background-size: contain;
        min-height: 400px;
    }*/

    .profile-container {
        /*width: 100%;*/
        /*height: 400px;*/

        display: flex;
        justify-content: center;
    }

    /* resize images */
    .profile-container img {
        /*width: 100%;
        height: auto;*/
        height: 400px;
        width: auto;

        border-radius: 15px;
    }

    .skills h1, .experiences h1 {
        margin-right: 12px;
    }

    .linkedin {
        width:30px;
        margin-right: 12px;
    }

    .Capa_1 {
        fill: pink;
    }

</style>
