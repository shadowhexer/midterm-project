<script setup lang="ts">
import Header from './components/Header.vue'
// import TurnstileVerification from './components/TurnstileVerification.vue';
</script>

<template>
  <!-- <TurnstileVerification /> -->
  <Header />
  <main>
    <router-view /> <!-- This line is equivalent to <RouterLink to="/"> </RouterLink> -->
  </main>
</template>

<style>
body {
  background: #f6f5f7;
}
</style>