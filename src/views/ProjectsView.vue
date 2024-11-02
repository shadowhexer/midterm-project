<script setup lang="ts">
    import ProjectCard from '../components/ProjectCard.vue'
    import Img_1 from '@/assets/PicsArt_08-24-07.14.53.jpg'
    import Img_2 from '@/assets/Picsart_23-10-19_22-07-33-623.jpg'
    import Img_3 from '@/assets/Picsart_24-09-11_07-01-12-866_cropped.jpg'
</script>

<script lang="ts">
    export default { 
        name: 'ProjectsView',
        components: { ProjectCard },
        data: () => ({
            title_1: 'Front-End',
            title_2: 'Back-end',
            title_3: 'UX/UI',

            caption_1: 'I still have no idea what to put here so instead, I put Chelsea as a placeholder. If in any case the photo as well as this description has not changed after I submit this project, then most likely I forgot about this task. Pardon for the inconvenience.',

            caption_2: 'I\'m still planning what to put in here. Maybe a game info perhaps? Or my game concepts and ideas? If that\'s the case, then I have to create probably an extra page or simply a modal after clicking the card.',

            caption_3: 'You can actually use the Feedback form in the Contact Tab to email me about your idea(s). It is a fully functional feedback form that uses an API to forward your responses to me as emails.'
        })
    }
</script>

<template>
    <!--services-------------------->
    <v-container class="w-100 h-screen d-flex my-10" jusdtify="center" align="center" id="services">
        <!--heading-------------->
        <v-row justify="center" class="text-center ma-5">
            <v-col cols="12">
                <p class="text-h3 ma-0 text-black">Projects</p>
                <p class="text-subtitle-1 text-grey ma-0">Here are my current projects I'm working on.</p>
            </v-col>
        </v-row>
        <!--services-box-container--------->
        <v-row justify="center" align-content-center class="ma-5 d-flex flex-md-wrap" width="350px" height="500px">
            <!--box-1---------------->
            <v-col cols="12" md="4">
                <ProjectCard :image="Img_1" :title="title_1" :caption="caption_1" />
            </v-col>
            <v-col cols="12" md="4">
                <ProjectCard :image="Img_2" :title="title_2" :caption="caption_2" />
            </v-col>
            <!--box-3---------------->
            <v-col cols="12" md="4">
                <ProjectCard :image="Img_3" :title="title_3" :caption="caption_3" />
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