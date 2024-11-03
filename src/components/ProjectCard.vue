<script lang="ts">
import type { PropType } from 'vue';
import { defineComponent } from 'vue';

export default defineComponent({
    name: "ServiceCard",
    props: {
        image: {
            type: String,
            required: true
        },
        title: {
            type: String,
            required: true
        },
        caption: {
            type: String,
            required: true
        },
        buttons: {
            type: Array as PropType<{ label: string; source: string; style: string; }[]>,
            required: true
        }
    },

    data: () => ({
        showModal: false,
        isTouchMode: false
    }),

    mounted() {
        this.isTouchMode = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    }
})
</script>

<template>
    <v-card class="s-box d-flex text-center rounded-lg overflow-hidden" align="center" outlined
        @click="showModal = true">
        <!--img------------->
        <v-img 
            class="w-100 h-75" 
            :src="image" 
            :aspect-ratio="1"
            width="300"
            cover
        >
            <p class="s-type text-white">{{ title }}</p>
        </v-img>
        <!--text----------------->
        <v-card-text class="w-100 h-33 d-flex text-center justify-center align-center">
            <p class="ma-0 text-subtitle-2 text-white overflow-hidden">{{ caption }}</p>
        </v-card-text>

        <v-dialog v-model="showModal" max-width="500">
            <v-card class="scroll-container">
                <v-hover v-slot:default="{ props: hoverProp, isHovering }">
                    <v-img 
                        :class="['w-100', 'h-75', 'position-relative', {'blur': isHovering || isTouchMode}]" 
                        :src="image"
                        :aspect-ratio="1"
                        v-bind="hoverProp"
                        width="300"
                        cover
                    >
                        <p class="s-type text-white">{{ title }}</p>
                    </v-img>
                    
                    <v-btn 
                        v-for="(button, index) in buttons"
                        v-bind="hoverProp" 
                        :key="index"
                        :class="['position-absolute', 'rounded-xl', isHovering || isTouchMode ? 'opacity-100' : 'opacity-0']"
                        :href="button.source" 
                        :style="button.style"
                        :disabled="button.source === ''"
                        :color="button.source == '' ? 'grey' : 'white'"
                        target="__blank"
                        variant="outlined"
                        size="large"
                        min-width="60%"
                    >
                        {{ button.label }}
                    </v-btn>
                </v-hover>

                <v-card-text class="d-flex h-auto text-center justify-center align-center pa-4">
                    <p class="text-body-1 font-weight-medium text-white overflow-hidden">{{ caption }}</p>
                </v-card-text>
            </v-card>
        </v-dialog>
    </v-card>
</template>

<style scoped>
.v-card-text {
    background-color: #1E1E1E;
}

.v-card-text p {
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    letter-spacing: 0.5px !important;
}

/* Has no backward compatibility on certain old browsers */
.v-card-text p:not(.v-dialog p) {
    display: -webkit-box;
    max-width: 80%;
    -webkit-line-clamp: 4;
    line-clamp: 4;
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
    -webkit-text-fill-color: rgb(47, 255, 47);
    -moz-text-decoration-color: rgb(47, 255, 47);
    text-decoration-color: rgb(47, 255, 47);
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

.v-btn {
    transform: translate(-50%, 0) scale(1); /* Start with initial scale */
    padding: 8px 12px;
    cursor: pointer;
    transition: opacity 0.5s ease, transform 0.2s ease;
    background-color: #ebebeb2f;
}

.v-btn:hover {
    transform: translate(-50%, 0) scale(1.1); /* Combine both translate and scale */
}


.blur {
    filter: brightness(90%) blur(5px) ; /* Adjust the blur intensity */
    transition: filter 0.5s ease-in-out; /* Smooth transition for the blur effect */
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