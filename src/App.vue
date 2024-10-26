<script lang="ts">
import "/node_modules/flag-icons/css/flag-icons.min.css";

export default {
  data: () => ({
    lists: [
      { text: 'Home', link: '/' },
      { text: 'About', link: '/about' },
      { text: 'Services', link: '/services' },
      { text: 'Contact', link: '/contact' }
    ],

    items: [
      { title: 'EN', icon: 'fi fi-gb fis' },
      { title: 'DE', icon: 'fi fi-de fis' },
      { title: 'CN', icon: 'fi fi-cn fis' },
      { title: 'VN', icon: 'fi fi-vn fis' },
    ],
    selectedItem: { title: 'EN', icon: 'fi fi-gb fis' },
    mobileStatus: false,
  }),

  methods: {
    isActive(link: string) {
      // Check if the current link is the active one
      return window.location.pathname === link; // Use pathname for route matching
    },

    selectItem(item) {
      this.selectedItem = item;
    },

    mobileMenu() {
      this.mobileStatus = !this.mobileStatus;
    },

    exitMobileMenu() {
      this.mobileStatus = false;
    }
  }
}
</script>

<template>
  <section id="main">

    <div id="header">
      <a href="#" class="logo">LOGO</a>
    </div>
    
    <nav>
      <ul :class="{ menu: true, 'active-menu': isMobileMenuOpen }">
        <li v-for="(list, l) in lists" :key="l" :class="{ active: isActive(list.link) }">
          <a :href="list.link">{{ list.text }}</a>
        </li>
      </ul>

      <div class="toggle" @click="mobileMenu"></div>
    </nav>

    <!--language-->
    <v-menu open-on-hover>
        <v-list>
          <v-list-item v-for="(item, index) in items" :key="index" @click="selectItem(item)">
            <v-list-item-title>{{ item.title }}<span :class="item.icon"></span></v-list-item-title>
          </v-list-item>
        </v-list>

        <template v-slot:activator="{ props }">
          <v-btn class="lang" color="#292929" v-bind="props" variant="text" size="large">
            {{ selectedItem.title }}
            <span :class="selectedItem.icon"></span>
          </v-btn>
        </template>

      </v-menu>
      
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
  letter-spacing: 2px;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  padding: 10px 50px;
  box-shadow: 2px 2px 12px rgba(0, 0, 0, 0.05);
  z-index: 1;
}

#main.header-scrolled {
  box-shadow: 0px 2px 15px rgba(0, 0, 0, 0.1);
  padding: 12px 0;
}

#main.header-inner-pages {
  box-shadow: 0px 2px 15px rgba(0, 0, 0, 0.1);
}

#main .logo {
  font-size: 25px;
  font-weight: bold;
  color: #292929;
  font-family: Poppins;
}

#main .logo img {
  max-height: 40px;
}

nav {
  padding: 0;
}

nav ul {
  display: flex;
}

nav li a {
  padding: 10px 15px;
  color: #6c707c;
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
  background-color: #292929;
  color: #FFF !important;
  transition: all ease 0.4s;
}

nav .lang,
nav .lang:focus {
  padding: 8px 25px;
  margin-left: 30px;
  border-radius: 4px;
  font-weight: 400;
  color: #fff;
}

nav .lang:hover,
nav .lang:focus:hover {
  color: #fff;
}

nav .dropdown ul {
  display: block;
  position: absolute;
  left: 14px;
  top: calc(100% + 30px);
  margin: 0;
  padding: 10px 0;
  z-index: 99;
  opacity: 0;
  visibility: hidden;
  background: #ffffff;
  box-shadow: 0px 0px 30px rgba(127, 137, 161, 0.25);
  transition: 0.3s;
}

nav .dropdown ul li {
  min-width: 200px;
}

nav .dropdown ul a {
  padding: 10px 20px;
  font-size: 15px;
  text-transform: none;
  font-weight: 400;
}

nav .dropdown ul a i {
  font-size: 12px;
}

nav .dropdown ul a:hover,
nav .dropdown ul .active:hover,
nav .dropdown ul li:hover>a {
  color: #ec9a29;
}

nav .dropdown:hover>ul {
  opacity: 1;
  top: 100%;
  visibility: visible;
}

nav .dropdown .dropdown ul {
  top: 0;
  left: calc(100% - 30px);
  visibility: hidden;
}

nav .dropdown .dropdown:hover>ul {
  opacity: 1;
  top: 0;
  left: 100%;
  visibility: visible;
}

@media (max-width: 1366px) {
  nav .dropdown .dropdown ul {
    left: -90%;
  }

  nav .dropdown .dropdown:hover>ul {
    left: -100%;
  }
}

.fi.fis {
  width: 2em !important;
  margin: 5px 0px;
}

@media(max-width:1190px) {
  #main {
    background-size: 1150px !important;
  }
}

@media(max-width:970px) {
  #main {
    background-image: none !important;
  }
}

@media(max-width:900px) {
  .toggle {
    display: block;
  }

  .toggle:before {
    content: '\f0c9';
    font-family: fontAwesome;
    line-height: 0px;
    margin-left: -30px;
  }

  .toggle.active:before {
    content: '\f00d' !important;

  }

  nav {
    padding: 10px 30px;
  }

  nav ul {
    position: absolute;
    width: 100%;
    height: auto;
    box-sizing: border-box;
    background-color: #0F0F0F;
    top: 50px;
    left: 0;
    transition: 0.5s;
    overflow: hidden;
    display: none !important;
    border: 3px solid #1F1F1F;
  }

  nav ul li a {
    border-bottom: 1px solid rgba(255, 255, 255, 0.10);
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

  .active-menu {
    display: block !important;
  }

  nav ul li a:hover {
    background-color: rgba(27, 29, 32, 0.15);

  }
}
</style>
