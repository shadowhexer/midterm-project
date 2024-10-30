<template>
    <v-container fluid>
        <v-row id="about" align="center" justify="center">
            <v-col class="about-text" cols="12">
                <h1>About this Page</h1>
                <p>
                    This page was created as a personal page meant to comply with the IT110 Midterm Exam.
                    If details here do not change after I finished the whole project means I forgot to change
                    this part. Please forgive me for the inconvenience. This page is also a template from
                    Going-To Internet which I translated to VueJS + Vuetify from native HTML + CSS. Click the
                    button below to visit the site.
                </p>
                <v-btn color="green" href="https://www.goingtointernet.com/2020/07/make-personal-website.html"
                    target="_blank" variant="flat" class="button">
                    More Details
                </v-btn>
            </v-col>

            <v-col class="about-model" cols="12">
                <v-img 
                    src="/src/assets/PicsArt_09-05-12.44.56_cropped.jpg" 
                    alt="model"
                    class="rounded-circle"
                    contain />
            </v-col>
        </v-row>
    </v-container>
</template>

<style scoped>
#about {
    width: 100%;
    height: 100%;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 50px 5% 0px 5%;
    position: relative;
}

.about-text {
    font-family: 'Trebuchet MS', sans-serif;
    width: 100%;
    text-align: left;
    margin-bottom: 20px;
}

.about-text h1 {
    font-size: 4rem;
    color: green;
}

.about-text h1,
h2 {
    margin: 0px;
    padding: 0px;
}

.about-text p {
    font-size: 1.1rem;
    color: rgba(0, 0, 0, 0.9);
}

.about-text .button {
    margin-top: 20px;
    width: 180px;
    height: 40px;
    border-radius: 20px;
    border: none;
}

.about-model {
    max-width: 100%;
    max-height: 100%;
    object-fit: cover !important;
    -moz-background-size: cover;
    -webkit-background-size: cover;
    -o-background-size: cover;
    background-size: cover;
    transition: transform 1s ease, max-height 1s ease, max-width 1s ease;
}

.about-text .button:hover {
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

@media (min-width: 1190px) and (min-height: 1080px) {
    .about-model {
        position: fixed !important;
        width: 1000px;
        height: 900px;
        left: 45%;
        margin-top: 200px;
    }
}

@media(max-width:1190px) {
    .about-model {
        height: 400px;
    }
}

@media (min-width: 1024px) and (max-width: 1189.9px) {

    .about-model {
        position: fixed !important;
        width: 900px;
        height: 900px;
        left: 40%;
        margin-top: 160px;
        transform: translateX(10px);
    }
}

@media(min-width: 970px) and (max-width:1023.9px) {
    #about {
        padding: 50px 20% 0px 10%;
        position: absolute;
    }

    .about-model {
        display: none;
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

    .about-text h1 {
        font-size: 4rem;
    }
}
</style>