<template>
    <v-card class="s-box d-flex text-center rounded-lg overflow-hidden" align="center" outlined>
        <!--img------------->
        <v-img class="w-100 h-75" :src="image">
            <p class="s-type text-white">Front-End</p>
        </v-img>
        <!--text----------------->
        <v-card-text class="w-100 h-33 text-center justify-center align-center">
            <p class="ma-0 text-subtitle-1 text-xs-subtitle-2 text-white overflow-x-hidden">{{ caption }}</p>
        </v-card-text>
    </v-card>
</template>

<script lang="ts">
export default {
    name: "ServiceCard",
    props: {
        image: {
            type: String,
            required: true
        },
        caption: {
            type: String,
            required: true
        }
    }
}
</script>

<style scoped>
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

.s-box {
    background-color: #2B2B2B;
    flex-direction: column;
    box-shadow: 2px 2px 12px rgba(0, 0, 0, 0.1);
}

.s-box:hover {
    transform: translateY(-10px);
    transition: all ease 0.3s;
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

    .s-box {
        flex-grow: 1;
    }

    .v-img__img--contain {
        object-fit: cover !important;
    }

}

@media(max-width:400px) {
    .s-box {
        width: 100%;
        height: 400px;
    }
}
</style>