<script>
import SvgIcon from '@jamescoyle/vue-icon';
import { mdiFacebook, mdiTwitter, mdiReddit, mdiYoutube } from '@mdi/js';

export default {
  name: "my-component",
  components: {
    SvgIcon
  },
  data() {
    return {
      modelImage: "./src/assets/Picsart_23-04-07_20-07-57-249%20[problembo.com]%20(1)%20(1).png",
      socialLinks: [
        { icon: mdiFacebook, url: "https://facebook.com/ar.manlangit10", color: "#3b5998" },
        { icon: mdiTwitter, url: "https://x.com/Chelz_4L", color: "#1da1f2" },
        { icon: mdiReddit, url: "https://reddit.com/user/Chelz4L", color: "#FF4500" },
        { icon: mdiYoutube, url: "https://youtube.com/@hexer-chan5303", color: "#ff0000" }
      ]
    };
  }
};
</script>

<template>

    <v-container fluid>
      <!-- Main Section -->
      <v-row class="home" align="center" justify="center">
        
        <!-- Text Section -->
        <v-col cols="12" md="6">
          <div class="name">
            <p>Hey there!</p>
            <h1>It's <span style="color: #17d1ac">Austin</span> Rey</h1>
            <p class="details">
              Welcome to this page. I don't have much thing to say but, how about a tour around here? This page is meant for compliance on the IT110 Midterm Exam so not all components are well optimised. Anyway, enjoy yourself.
            </p>
            <br>
            <p class="details">Oh, watch out for the other project. I heard it's called 
              <span class="font-weight-bold" style="color: rgb(238 255 0 / 20%);">OnlyCorn</span>.</p>
          </div>
        </v-col>

        <!-- Image Section -->
        <v-col cols="12" class="home-model">
          <v-img
            :src="modelImage"
            alt="model"
            max-width="50%"
            contain
          />
        </v-col>
        
      </v-row>

      <!-- Social Media Links -->
      <v-row class="social" align="center" justify="center">
        <v-btn icon v-for="(link, index) in socialLinks" :key="index" :href="link.url" target="_blank">
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

#home {
  display: flex;
  font-family: 'Trebuchet MS', sans-serif;;
}

.name {
  width: 500px;
  position: absolute;
  left: 20%;
  top: 50%;
  transform: translate(-20%, -50%);
}

.name p:nth-child(1),
.name .details {
  color: #6c707c;
  font-size: 16px;
}

.name h1 {
  font-family: Poppins;
  font-size: 40px;
  margin: 0px;
  letter-spacing: 3px;
  color: #292929;
}

.home-model {
  position:fixed !important;
  left: 50%;
}


.social {
  position: absolute;
  left: 50px;
  bottom: 50px;
  display: flex;

}

.social a {
  margin: 6px 12px;

}

.social i {
  color: rgba(18, 17, 17, 0.40);
}

.social a:hover i {
  color: #17d1ac;
  transition: all ease 0.5s;
}

@media(max-width:1190px){
	.home-model img{
		height:400px;
	}
}

@media(max-width:1190px){
	.name{
		left: 10%;
		top: 50%;
		transform: translate(-10%,-50%);
	}
}

@media(max-width:970px){
  .home-model{
		display: none;
	}
  
	.name{
		left: 50%;
		top: 50%;
		transform: translate(-50%,-50%);
	}
}

@media(max-width:600px){
	.name{
		width:60%;
	}

	.social{
		left: 30px;
		transform: translateX(-10px);
	}
}
</style>
