<script lang="ts">
export default {
  data: () => ({
    lists: [
      { text: 'Home', link: '/' },
      { text: 'About', link: '/about' },
      { text: 'Services', link: '/services' },
      { text: 'Contact', link: '/contact' }
    ]
  }),

  methods: {
    isActive(link: string) {
      // Check if the current link is the active one
      return window.location.pathname === link; // Use pathname for route matching
    }
  }
}
</script>

<template>
  <section id="main">
    <nav>
      <a href="#" class="logo">LOGO</a>

      <div class="toggle"></div>
      <ul class="menu">
        <li v-for="(list, l) in lists" :key="l" :class="{ active: isActive(list.link) }">
          <a :href="list.link">{{ list.text }}</a>
        </li>
      </ul>

      <!--language-->
      <a href="#" class="lang">En</a>
    </nav>
  </section>

  <router-view /> <!-- This line is equivalent to <RouterLink to="/"> </RouterLink> -->
</template>

<style>
body {
  background: #f6f5f7;
  margin: 0px;
  padding: 0px;
}

ul {
  list-style: none;
}

a {
  text-decoration: none;
}

#main {
  padding: 30px 50px;
  position: relative;
  width: 100%;
  /* height: 100vh; */
  box-sizing: border-box;
  background-size: 1330px;
  background-position: right bottom;
  background-repeat: no-repeat;
  background-image: url("../images/bg.png");
  background-color: #edf1fd;
}

nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-transform: uppercase;
  font-weight: 600;
  letter-spacing: 2px;
  font-family: calibri;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  box-sizing: border-box;
  padding: 10px 50px;
  background-color: #F4F7FF;
  box-shadow: 2px 2px 12px rgba(0, 0, 0, 0.05);
  z-index: 1;
}

.menu {
  display: flex;
}

.menu li a {
  padding: 10px 15px;
  color: #6c707c;
  font-size: 12px;

}

.lang {
  color: #292929;
}

.logo {
  font-size: 25px;
  font-weight: bold;
  color: #292929;
  font-family: Poppins;
}

.toggle {
  display: none;
}

.active a,
.menu li a:hover {
  background-color: #292929;
  color: #FFF !important;
  font-weight: bold;
  transition: all ease 0.4s;
}
</style>
