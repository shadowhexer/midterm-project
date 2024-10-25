<script setup lang="ts">
import TheWelcome from '../components/LoginDesktop.vue'
import Header from '../components/Header.vue'
</script>

<template>
  <main>
    <!-- <TheWelcome /> -->

    <!--name--------------------------->
    <div class="name">
      <!--hello------->
      <p>Hello</p>
      <!--name--->
      <h1>I'm <font color="#17d1ac">James</font> Kamerun</h1>
      <!--details--------------->
      <p class="details">In this Video I am gonna show you how to create a personal website with all pages.After
        Watching this tutorial you will be able to craete website like this</p>
      <!--cv button-------------------->
      <a href="#" class="cv-btn">Download Cv</a>


    </div>
    <!--social---------------->
    <div class="social">
      <a href="#"><i class="fab fa-facebook-f"></i></a>
      <a href="#"><i class="fab fa-twitter"></i></a>
      <a href="#"><i class="fab fa-instagram"></i></a>
      <a href="#"><i class="fab fa-youtube"></i></a>
    </div>
  </main>
</template>

<style scoped>
.name {
  font-family: calibri;
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

.cv-btn {
  width: 200px;
  height: 45px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #292929;
  color: #FFFFFF;
}

.cv-btn:hover {
  background-color: #131313;
  transition: all ease 0.5s;
}

.black-line {
  align-self: end;
  width: 50%;
  height: 15%;
  margin-bottom: 4em;
  position: absolute;
  bottom: 0px;
  left: -3%;
  border-right: 1px solid rgba(41, 41, 41, 0.30);
}

.black-line::after {
  content: ' ';
  position: absolute;
  width: 0;
  height: 0;
  border-style: solid;
  border-width: 11px 11px 0 11px;
  border-color: #292929 transparent transparent transparent;
  right: -.7em;
  bottom: -2px;
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
  font-size: 14px;
}

.social a:hover i {
  color: #17d1ac;
  transition: all ease 0.5s;
}
</style>
