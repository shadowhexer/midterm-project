<script setup lang="ts">
    import ProjectCard from '../components/ProjectCard.vue'
    import Img_1 from '@/assets/Planetfall_Preview_12.jpg'
    import Img_2 from '@/assets/Proposed flag.png'
    import Img_3 from '@/assets/coding.jpg'
</script>

<script lang="ts">
    export default { 
        name: 'ProjectsView',
        components: { ProjectCard },
        data: () => ({
            cards: [{
                image: Img_1,
                title: 'Hero Concepts',
                caption: 'I started creating hero concepts for DOTA 2 on 2018 out of boredoom and still doing it on past time. Click the button and it will take you to the website where I stored my concept. The idea is already outdated and I\'m planning if I should create my own website for that.',
                buttons: [
                    { label: 'Grace', source: 'https://dotaconcept.com/hero/6233', style: 'top: 15%; left: 50%;' },
                    { label: 'Hexer', source: 'https://dotaconcept.com/hero/6234', style: 'top: 25%; left: 50%;' },
                    { label: 'Lieah', source: '', style: 'top: 35%; left: 50%;' },
                    { label: 'Szipher', source: '', style: 'top: 45%; left: 50%;' }
                ]
            },
            {
                image: Img_2,
                title: 'Constitution Drafts',
                caption: 'I started to involve myself in politics way back 2019 but I only knew the concept of reform in 2021. From that time, I tried to create various drafts that I think would truly change this country I am in. If you hover over the image, a list of drafts I am currently working on will reveal.',
                buttons: [
                    { label: 'Plurinational Draft', source: 'https://hexers.wixsite.com/plurinational-draft', style: 'top: 30%; left: 50%;' },
                    { label: 'Caraga Region Draft', source: 'https://hexers.wixsite.com/caraga-region-draft', style: 'top: 40%; left: 50%;' }
                ]
            },
            {
                image: Img_3,
                title: 'Coding Projects',
                caption: 'As an IT student, I also work on various academic activities that involves coding. Click the button and you will be taken to my github repository.',
                buttons: [
                    { label: 'Github Projects', source: 'https://github.com/shadowhexer?tab=repositories', style: 'top: 40%; left: 50%;' }
                ]
            }]
        })
    }
</script>

<template>
    <!--services-------------------->
    <v-container class="w-100 h-screen d-flex my-10" jusdtify="center" align="center" id="services">
        <!--heading-------------->
        <v-row justify="center" class="text-center ma-5">
            <v-col cols="12">
                <p class="text-h3 ma-0 text-green-darken-3 font-weight-bold">Projects</p>
                <p class="text-subtitle-1 text-grey ma-0">Here are my current projects I'm working on.</p>
            </v-col>
        </v-row>
        <!--services-box-container--------->
        <v-row justify="center" align-content-center class="ma-5 d-flex flex-md-wrap" width="350px" height="500px">
            <!--box-1---------------->
            <v-col
                v-for="(card, index) in cards"
                :key="index"
                cols="12" 
                md="4"
            >
                <ProjectCard :image="card.image" :title="card.title" :caption="card.caption" :buttons="card.buttons" />
            </v-col>
        </v-row>
    </v-container>

</template>

<style scoped>
#services {
    box-sizing: border-box;
    font-family: calibri;
    flex-direction: column;
    padding-top: 40px;
}

@media(max-width:1190px) {
    #services {
        height: auto;
    }
}
</style>