<script setup lang="ts">
    import img from '@/assets/author.jpg'
</script>

<script lang="ts">
    export default { name: 'AboutView' }
</script>

<template>
    <v-container fluid>
        <v-row id="about" class="d-flex w-100 h-100 position-relative" align="center" justify="space-between">
            <v-col class="about-text w-100 text-left mb-5" cols="12" md="7">
                <p class="text-h2 text-green-darken-3 mb-3 font-weight-bold">About this Page</p>
                <p class="text-body-1 font-weight-medium text-black ">
                    This page was created as a personal page meant to comply with the IT110 Midterm Exam.
                    If details here do not change after I finished the whole project means I forgot to change
                    this part. Please forgive me for the inconvenience. This page is also a template from
                    <span class="text-green-darken-3 font-weight-medium">Going-To Internet</span> which I translated to VueJS + Vuetify from native HTML + CSS. Click the
                    button below to visit the site.
                </p>
                <v-btn 
                    color="green" 
                    href="https://www.goingtointernet.com/2020/07/make-personal-website.html"
                    target="_blank" 
                    variant="flat"
                    class="mt-5 rounded-xl"
                >
                    More Details
                </v-btn>
            </v-col>

            <v-col class="about-model" cols="12" md="5">
                <v-img 
                    :src="img" 
                    alt="model"
                    class="model-image rounded-circle mt-12 position-fixed"
                    justify="center"
                    width="400"
                    height="400"
                    cover 
                />
            </v-col>
        </v-row>
    </v-container>
</template>

<style scoped>
#about {
    box-sizing: border-box;
    padding: 50px 5% 0px 5%;
}

p {
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
}

.v-btn {
    width: 180px;
    height: 40px;
}

.about-model {
    object-fit: cover !important;
    -moz-background-size: cover;
    -webkit-background-size: cover;
    -o-background-size: cover;
    background-size: cover;
    transition: transform 1s ease, max-height 1s ease, max-width 1s ease;
}

.model-image {
    max-height: 100%;
    max-width: 100%;
}

.v-btn:hover {
    background-color: #FFFFFF;
    transition: all ease 0.3s;
}

@media (min-width: 1190px) {
    .about-model {
        position: fixed !important;
        width: 500px;
        height: 500px;
        left: 60%;
        margin-bottom: 10px;
        transform: translateX(0);
    }
}

@media (min-height: 1080px) {
    .about-model {
        position: fixed !important;
        width: 1000px;
        height: 900px;
        margin-top: 300px;
    }
}

@media(max-width:1190px) {
    .about-model {
        height: 400px;
    }
}

@media (min-width: 1024px) and (max-width: 1189.9px) {

    .v-row {
        position: fixed;
        padding: 50px 0% 0px 0% !important;
        left: 40%;
    }

    .about-model {
        position: fixed;
        margin-left: 30px;
        margin-top: 650px;
    }

}

@media (min-width: 970px) and (max-width: 1023.9px) {
    .v-row {
        position: fixed;
        padding: 50px 0% 0px 0% !important;
        left: 40%;
        margin-top: 100px;
    }

    .about-model {
        position: fixed;
        margin-left: 30px;
        margin-top: 650px;
    }
}

@media(max-width:970px) {
    .about-model {
        display: none;
    }

    #about {
        display: flex;
        align-content: center;
        justify-content: center;
        margin-top: 30%;
    }

    .about-text {
        width: 90%;
    }
}
</style>