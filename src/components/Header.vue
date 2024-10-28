<script lang="ts">
import "/node_modules/flag-icons/css/flag-icons.min.css";
import SvgIcon from '@jamescoyle/vue-icon';
import { mdiMenu } from '@mdi/js';

export default {
  name: "my-component",
  components: {
    SvgIcon
  },

  data: () => ({
    lists: [
      { text: 'Home', link: '/' },
      { text: 'About', link: '/about' },
      { text: 'Services', link: '/services' },
      { text: 'Contact', link: '/contact' }
    ],
    showMobileMenu: false,
    isMobile: false,
    path: mdiMenu
  }),

  mounted() {
    this.checkScreen();
    window.addEventListener("resize", this.checkScreen);
    document.addEventListener("click", this.handleClickOutside);
  },
  beforeDestroy() {
    window.removeEventListener("resize", this.checkScreen);
    document.removeEventListener("click", this.handleClickOutside);
  },

  methods: {
    isActive(link: string) {
      // Check if the current link is the active one
      return window.location.pathname === link; // Use pathname for route matching
    },

    checkScreen() {
      this.isMobile = window.innerWidth <= 800;
    },

    handleClickOutside(event) {
      const dropdown = this.$refs.dropdown;
      if (dropdown && !dropdown.contains(event.target)) {
        this.showMobileMenu = false;
      }
    },
  }
}
</script>

<template>
  <section id="header" ref="dropdown">
    <v-app>
      <v-app-bar :flat="true" color="#242424" app>

        <v-toolbar-title>
          <a href="/" class="logo">ARM</a>
        </v-toolbar-title>

        <nav>
          <ul :class="{ menu: true }">
            <li 
              v-for="(list, l) in lists" 
              :key="l" 
              :class="{ active: isActive(list.link) }"
            >
              <a :href="list.link">{{ list.text }}</a>
            </li>
          </ul>
        </nav>

        <div v-if="isMobile">
          <v-app-bar-nav-icon 
            @click.stop="showMobileMenu = !showMobileMenu" 
            variant="text" color="white"
            size="x-large"
          >
            <svg-icon 
              width="30" 
              height="30" 
              type="mdi" 
              :path="path"
            ></svg-icon>
          </v-app-bar-nav-icon>
        </div>

      </v-app-bar>

      <v-navigation-drawer 
        v-model="showMobileMenu" 
        location="right" 
        temporary 
        :elevation="1"
      >
        <v-list>
          <v-list-item 
            v-for="(list, l) in lists" 
            :key="l" 
            :class="{ active: isActive(list.link) }"
          >
            <a :href="list.link">{{ list.text }}</a>
          </v-list-item>
        </v-list>
      </v-navigation-drawer>
    </v-app>
  </section>
</template>

<style scoped>
ul {
  list-style: none;
}

a {
  text-decoration: none;
}

.v-application__wrap {
    min-height: fit-content !important;
    padding: 0 !important;
    margin: 0 !important;
}

#header {
  box-sizing: border-box;
  background-size: 1330px;
  background-position: right bottom;
  background-repeat: no-repeat;
  transition: all 0.5s;
  background-image: url("C:/Users/HEXER/Pictures/Acer/Picsart_23-10-19_22-07-33-623_wp.jpg");
  background-color: #edf1fd;
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-transform: uppercase;
  position: fixed;
  box-shadow: 2px 2px 12px rgba(0, 0, 0, 0.05);
  z-index: 1;
  letter-spacing: 2px;
}

#header.header-scrolled {
  box-shadow: 0px 2px 15px rgba(0, 0, 0, 0.1);
  padding: 12px 0;
}

#header.header-inner-pages {
  box-shadow: 0px 2px 15px rgba(0, 0, 0, 0.1);
}

#header .logo {
  font-size: 25px;
  font-weight: bold;
  color: #fffdfd;
  font-family: Poppins !important;
  letter-spacing: 2px;
}

#header .logo:hover {
  background-color: #29292900;
  color: rgb(47, 255, 47) !important;
}

nav {
  padding: 0;
}

nav ul {
  display: flex;
}

nav li a {
  padding: 10px 15px;
  color: #bbc3de;
  font-size: 15px;
  margin: 10px 15px;
}

nav a,
nav a:focus {
  display: flex;
  align-items: center;
  justify-content: space-between;
  transition: 0.3s;
  font-weight: bold;
}

nav .active a,
nav li a:hover {
  background-color: #29292900;
  color: rgb(47, 255, 47) !important;
  transition: all ease 0.4s;
}

.lang {
  display: block;
}

.toggle {
  display: none;
}

.fi.fis {
  width: 2em !important;
  margin: 5px 0px;
}

@media (min-width: 801.60px) {
  .v-app-bar {
    top: 0;
    left: 0;
    width: 100%;
    padding: 10px 50px;
  }

  .v-navigation-drawer {
    display: none !important;
    width: 0 !important;
  }
}

@media(max-width:1190px) {
  #header {
    background-size: 1150px !important;
  }
}

@media(max-width:970px) {
  #header {
    background-image: none !important;
  }
}

@media(max-width: 800px) {

  .v-app-bar {
    padding: 0 50px;
    letter-spacing: 2px;
  }

  v-list a {
    color:darkgreen !important;
  }

  nav {
    width: 200px !important;
  }

  nav a,
  nav a:focus {
    display: flex;
    align-items: center;
    justify-content: center !important;
    transition: 0.3s;
    font-weight: bold;
  }

  nav ul {
    display: none !important;
  }

  nav ul li a {
    border-bottom: 1px solid rgba(255, 255, 255, 0.212);
    color: #ffffff !important;
    width: 100%;
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0px !important;
    padding: 0px !important;
  }

  nav ul {
    padding: 0px;
    margin: 0px;
  }

  nav .active a,
  nav li a:hover {
    background-color: #4a4a4a;
    color: #FFF !important;
    transition: all ease 0.4s;
  }

  .active-menu {
    display: block !important;
    right: 0 !important;
  }

  nav ul li a:hover {
    background-color: rgba(27, 29, 32, 0.15);

  }
}

@media (max-width: 432px) {
  .v-app-bar {
    padding: 0 5px;
    letter-spacing: 2px;
  }
}
</style>
