<script setup lang="ts">
  const modelImage = new URL('@/assets/Picsart_23-04-07_20-07-57-249%20[problembo.com]%20(1)%20(1).png', import.meta.url).href;
</script>

<script lang="ts">
import SvgIcon from '@jamescoyle/vue-icon';
import { mdiFacebook, mdiTwitter, mdiReddit, mdiYoutube } from '@mdi/js';

export default {
  name: "HomeView",
  components: {
    SvgIcon
  },
  data: () => ({
    socialLinks: [
      { icon: mdiFacebook, url: "https://facebook.com/ar.manlangit10", color: "#3b5998" },
      { icon: mdiTwitter, url: "https://x.com/Chelz_4L", color: "#1da1f2" },
      { icon: mdiReddit, url: "https://reddit.com/user/Chelz4L", color: "#FF4500" },
      { icon: mdiYoutube, url: "https://youtube.com/@hexer-chan5303", color: "#ff0000" }
    ]
  })
};
</script>

<template>

    <v-container fluid>
      <!-- Main Section -->
      <v-row id="home" class="overflow-hidden" align="center" justify="center">
        
        <!-- Text Section -->
        <v-col cols="12" md="6">
          <div class="intro position-absolute w-50">
            <p class="text-h6 text-black">Hey there!</p>
            <h1 class="name text-h3 my-3">It's <span style="color: green">Austin</span> Rey</h1>
            <p class="text-subtitle-1">
              Welcome to this page. I don't have much thing to say but, how about a tour around here? This page is meant for compliance on the IT110 Midterm Exam so not all components are well optimised. Anyway, enjoy yourself.
            </p>
            <br>
            <p class="text-subtitle-1">Oh, watch out for the other project. I heard it's called 
              <span class="font-weight-bold" style="color: rgb(238 255 0 / 20%);">OnlyCorn</span>.</p>
          </div>
        </v-col>

        <!-- Image Section -->
        <v-col class="home-model d-none d-xs-flex d-sm-none d-md-flex">
          <v-img
            :src="modelImage"
            class="rounded-circle"
            alt="model"
            max-width="50%"
            contain
          />
        </v-col>
        
      </v-row>

      <!-- Social Media Links -->
      <v-row class="social position-absolute d-flex" align="center" justify="center">
        <v-btn icon 
          v-for="(link, index) in socialLinks" 
          :key="index"
          variant="text"
          :href="link.url" 
          target="_blank"
          >
          <v-icon :color="link.color" size="x-large">
            <svg-icon 
              type="mdi" 
              :path="link.icon"
            />
          </v-icon>
        </v-btn>
      </v-row>
    </v-container>

</template>

<style scoped>
#home p {
  font-family: 'Trebuchet MS', sans-serif !important;
  color: #6c707c;
}

.home-model {
  max-width: 100%; /* Allows the image to shrink on smaller screens */
  max-height: 100%;
  object-fit: cover !important;
  background-size: cover;
}

.intro {
  left: 20%;
  top: 50%;
  transform: translate(-20%, -50%);
}

.name {
  font-family: Poppins;
  letter-spacing: 3px;
  color: #292929;
}


.social {
  left: 50px;
  bottom: 50px;
}

.social a {
  margin: 6px 12px;

}

.social a:hover i {
  color: green !important;
  transition: all ease 0.2s;
}

@media (min-height: 1080px) and (min-width: 1920px) {
  .home-model {
    position: fixed !important;
    width: 2000px;
    height: 1000px;
    left: 50%;
    margin-top: 200px;
    }
}

@media (min-height: 975px) {
  .home-model {
    position: fixed !important;
    width: 2000px;
    height: 1000px;
    left: 50%;
    margin-top: 170px;
    }
}

@media (min-height: 900px) and (max-height: 975px) {
  .home-model {
    position: fixed !important;
    width: 2000px;
    height: 1000px;
    left: 50%;
    margin-top: 30px;
    }
}

@media (min-width: 1400px) and (max-width: 1921px) {
  .home-model {
    position: fixed !important;
    width: 2000px;
    height: 900px;
    left: 50%;
    margin-top: 20px;
    }
}

@media (min-width: 1190px) and (max-width: 1400px) {
  .home-model {
    position: fixed !important;
    width: 2000px;
    height: 600px;
    left: 50%;
    margin-top: 130px;
    }
}

@media (min-width: 1024px) and (max-width:1190px){
	.home-model {
    position: fixed !important;
    width: 950px;
    height: 500px;
    left: 55%;
    margin-top: 255px;
  }

  .intro{
		left: 20%;
		top: 50%;
		transform: translate(-10%,-50%);
	}
}

@media (min-width: 960px) and (max-width: 1023.9px) {

  .home-model {
    position: fixed !important;
    width: 950px;
    height: 500px;
    left: 55%;
    margin-top: 860px;
  }

}

@media(max-width:960px){
  
	.intro{
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
		left: 50%;
		transform: translate(-50%,-50%);
	}
}

@media(max-width:600px){
	.social{
    display: block;
		left: 30px;
		transform: translateX(-10px);
	}
}

@media (max-height: 850px) {
  .intro {
    overflow-y:visible;
    margin-top: 50px;
  }
}
</style>
