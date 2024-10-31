<script setup lang="ts">
    import img1 from '@/assets/PicsArt_08-24-07.14.53.jpg';
    import img2 from '@/assets/Picsart_23-10-19_22-07-33-623.jpg'
    import img3 from '@/assets/Picsart_24-09-11_07-01-12-866_cropped.jpg'
</script>

<script lang="ts">
    export default { name: 'ServicesView' }
</script>

<template>
    <!--services-------------------->
    <v-container class="w-100 h-screen d-flex my-10" jusdtify="center" align="center" id="services">
        <!--heading-------------->
        <v-row justify="center" class="text-center ma-5">
            <v-col cols="12">
                <p class="text-h3 ma-0 text-black">Services</p>
                <p class="text-subtitle-1 text-grey ma-0">Here are some services we provide for you.</p>
            </v-col>
        </v-row>
        <!--services-box-container--------->
        <v-row justify="center" align-content-center class="ma-5 d-flex flex-md-wrap" width="350px" height="500px">
            <!--box-1---------------->
            <v-col cols="12" md="4">
                <v-card class="s-box d-flex text-center rounded-lg overflow-hidden" align="center" outlined>
                    <!--img------------->
                    <v-img class="w-100 h-75" :src="img1">
                        <p class="s-type text-white">Front-End</p>
                    </v-img>
                    <!--text----------------->
                    <v-card-text class="w-100 h-33 text-center justify-center align-center">
                        <p class="ma-0 text-subtitle-1 text-xs-subtitle-2 text-white overflow-x-hidden">I still have no idea what to put here so instead, I put Chelsea as a placeholder. If in any case the photo as well as this description has not changed after I submit this project, then most likely I forgot about this task. Pardon for the inconvenience.</p>
                    </v-card-text>
                </v-card>
            </v-col>
            <v-col cols="12" md="4">
                <v-card class="s-box d-flex text-center rounded-lg overflow-hidden" align="center" outlined>
                    <!--img------------->
                    <v-img class="w-100 h-70" :src="img2">
                        <p class="s-type text-white">Back-End</p>
                    </v-img>
                    <!--text----------------->
                    <v-card-text class="w-100 h-33 text-center justify-center align-center">
                        <p class="ma-0 text-subtitle-1 text-xs-subtitle-2 text-white overflow-x-hidden">I'm still planning what to put in here. Maybe a game info perhaps? Or my game concepts and ideas? If that's the case, then I have to create probably an extra page or simply a modal after clicking the card.</p>
                    </v-card-text>
                </v-card>
            </v-col>
            <!--box-3---------------->
            <v-col cols="12" md="4">
                <v-card class="s-box d-flex text-center rounded-lg overflow-hidden" align="center" outlined>
                    <!--img------------->
                    <v-img class="w-100 h-70" :src="img3">
                        <p class="s-type text-white">Design</p>
                    </v-img>
                    <!--text----------------->
                    <v-card-text class="w-100 h-33 text-center justify-center align-center">
                        <p class="ma-0 text-subtitle-1 text-xs-subtitle-2 text-white overflow-x-hidden">You can actually use the Feedback form in the Contact Tab to email me about your idea(s). It is a fully functional feedback form that uses an API to forward your responses to me as emails.</p>
                    </v-card-text>
                </v-card>
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

.s-box {
    background-color: #2B2B2B;
    flex-direction: column;
    box-shadow: 2px 2px 12px rgba(0, 0, 0, 0.1);
}

.s-box:hover {
    transform: translateY(-10px);
    transition: all ease 0.3s;
}

.v-card-text {
    background-color: #1E1E1E;
    display: flex;
}

.v-card-text p {
    font-family: calibri;
    display: block;
    display: -webkit-box;
    max-width: 80%;
    -webkit-line-clamp: 4;
    -webkit-box-orient: vertical;
    text-overflow: ellipsis;
}

.s-type {
    font-family: calibri;
    background-color: #151515;
    padding: 10px 15px;
    position: absolute;
    top: 0px;
    left: 50%;
    transform: translateX(-50%);
    font-size: 18px;
    border-radius: 0px 0px 10px 10px;
    box-shadow: 2px 2px 12px rgba(0, 0, 0, 0.2);
}

@media(max-width:1190px) {

    #services {
        height: auto;
    }

    .s-box {
        flex-grow: 1;
    }

    .s-b-img img {
        object-fit: cover;
    }

}

@media(max-width:400px) {
    .s-box {
        width: 100%;
        height: 400px;
    }
}
</style>