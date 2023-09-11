<template>
    <header :class="{ sticky: isSticky }">
      <div class="nav-bar">
        <a href="#" class="logo">LOGO</a>
  
        <div class="navigation" :class="{ active: isNavigationActive }">
          <div class="nav-items">
            <i class="uil uil-times nav-close-btn" @click="closeNavigation"></i>
            <router-link to="/">Home</router-link>
            <router-link to="/about">About</router-link>
            <router-link to="/books">Books</router-link>
            <router-link to="/contact">Contact</router-link>
            <router-link to="/admin">Admin</router-link>
            <router-link to="/user">User</router-link>
          </div>
        </div>
        <div class="icons">
          <router-link to="/cart" class="btn">
            <i class="fas fa-cart-shopping"></i></router-link>
            <router-link to="/register" class="btn"><i class="fa-solid fa-user">
            </i></router-link>
        </div>
        <i class="fa-solid fa-bars"  @click="openNavigation"></i>
      </div>
    </header>
  </template>
  
  <script>
  export default {
    data() {
      return {
        isSticky: false,
        isNavigationActive: false
      };
    },
    methods: {
      openNavigation() {
        this.isNavigationActive = true;
      },
      closeNavigation() {
        this.isNavigationActive = false;
      },
      handleScroll() {
        this.isSticky = window.scrollY > 0;
      }
    },
    mounted() {
      window.addEventListener("scroll", this.handleScroll);
    },
    beforeDestroy() {
      window.removeEventListener("scroll", this.handleScroll);
    }
  };
  </script>
  
  <style scoped>
  
  :root{
      --white-color: #fff;
      --dark-color: #222;
      --body-bg-color: #fff; 
      --section-bg-color: #202834;
      --navigation-item-hover-color: #3b5378;
      
      --text-shadow: 0 5px 25px rbga(0, 0, 0, 0.1);
      --box-shadow: 0 5px 25px rgb(0 0 0 / 20%);
  
      --scroll-bar-color: #fff;
      --scroll-thumb-color: #282f4e;
      --scroll-thumb-hover-color: #454f6b;
  }
  
  header{
      z-index: 999;
      position: fixed;
      width: 100%;
      height: calc(5rem + 1rem);
      top: 0;
      left: 0;
      display: flex;
      justify-content: center;
      transition: 0.5s ease;
      transition-property: height, background;
  }
  
  header.sticky{
      height: calc(2.5rem + 1rem);
      background: black;
      backdrop-filter: blur(20px);
      border-bottom: 2px solid rgba(255, 255, 255, 0.1);
  }
  
  .nav-bar{
      display: flex;
      align-items: center;
      justify-content: space-between;
      width: 100%;
      padding: 0 200px;
      transition: 0.3s ease;
  }
  
  .nav-close-btn, .nav-menu-btn{
      display: none;
  }
  
  .nav-bar .logo{
      color: #fff;
      font-size: 1.8em;
      font-weight: 600;
      letter-spacing: 2px;
      text-decoration: none;
      text-shadow: 0 5px 25px rbga(0, 0, 0, 0.1);
  }
  
  .navigation .nav-items a{
      color: black;
      font-size: 1em;
      text-decoration: none;
      text-shadow: 0 5px 25px rbga(0, 0, 0, 0.1);
  }
  
  .navigation .nav-items a i{
      display: none;
  }
  
  .icons i{
      margin-inline: 5px;
      color: #fff;
      font-size: 1em;
      text-decoration: none;
      text-shadow: 0 5px 25px rbga(0, 0, 0, 0.1);
  }
  
  .navigation .nav-items a:not(:last-child){
      margin: 45px;
  }
  /*===== HEADER  =====*/
  
  @media screen and (max-width: 785px){
      .nav-bar{
          padding: 25px 20px;
      }
      /*===== NAVIGATION MENU  =====*/
      .nav-menu-btn{
          display: block;
          color: var(--white-color);
          font-size: 1.5em;
          cursor: pointer;
      }
      .nav-close-btn{
          display: block;
          color: var(--dark-color);
          position: absolute;
          top: 0;
          right: 0;
          font-size: 1.5em;
          margin: 10px;
          cursor: pointer;
          transition: 0.3s ease;
      }
      .navigation{
          z-index: 99999;
          position: fixed;
          width: 100%;
          height: 100vh;
          top: 0;
          left: 0;
          background: #FFE5AD;
          display: flex;
          justify-content: center;
          align-items: center;
          visibility: hidden;
          opacity: 0;
          transition: 0.3s ease;
      }
      .navigation.active{
          visibility: visible;
          opacity: 1;
      }
      .navigation .nav-items{
          position: relative;
          background: var(--white-color);
          width: 400px;
          /* height: 500px; */
          max-width: 400px;
          display: grid;
          place-content: center;
          /* margin: 20px; */
          /* padding: 40px; */
          border-radius: 20px;
          box-shadow: var(--box-shadow);
          transform: translateY(-80px);
          transition: 0.3s ease;
      }
      .navigation.active .nav-items{
          transform: translateY(0);
      }
      .navigation .nav-items a{
          color: var(--dark-color);
          font-size: 1em;
          margin: 40px;
          transition: 0.3s ease;
      }
      .navigation .nav-items a:hover{
          color: var(--navigation-item-hover-color);
      }
      .navigation .nav-items a i{
          display: inline-block;
          font-size: 1.3em;
          margin-right: 5px;
      }
  }
  </style>

  <!-- <template>
    <div>
      <body>
        <nav>
            <div class="logo">
                <img src="logo.svg" alt="Logo Image">
            </div>
            <div class="hamburger" @click="toggleNav">
              <router-link to="/">Home</router-link>
              <router-link to="/about">About</router-link>
              <router-link to="/books">Books</router-link>
              <router-link to="/contact">Contact Us</router-link>
              <router-link to="/cart">Cart</router-link>
              <router-link to="/admin">Admin</router-link>
              <router-link to="/user">User</router-link>
                <li><button class="login-button" href="#">Login</button></li>
                <li><button class="join-button" href="#">SignUp</button></li>
            </div>
            <ul class="nav-links" :class="{ 'open': isNavOpen }"></ul>
            <ul class="nav-links">
              <router-link to="/">Home</router-link>
              <router-link to="/about">About</router-link>
              <router-link to="/books">Books</router-link>
              <router-link to="/contact">Contact Us</router-link>
              <router-link to="/cart">Cart</router-link>
              <router-link to="/admin">Admin</router-link>
              <router-link to="/user">User</router-link>
                <li><button class="login-button" href="#">Login</button></li>
                <li><button class="join-button" href="#">SignUp</button></li>
            </ul>
      </nav>
    </body>
    </div>
  </template>
  
  <script>
export default {
  data() {
    return {
      isNavOpen: false,
    };
  },
  methods: {
    toggleNav() {
      this.isNavOpen = !this.isNavOpen;
    },
  },
};
</script>
  
  <style scoped>
  *{
    margin: 0;
    padding: 0;
    color: #f2f5f7;
    font-family: sans-serif;
    letter-spacing: 1px;
    font-weight: 300;
}
/* Add responsive styles for small screens */
@media screen and (max-width: 800px) {
  nav {
    height: auto;
    flex-direction: column;
  }

  .hamburger {
    display: block;
  }

  .nav-links {
    position: relative;
    height: auto;
    clip-path: none;
    -webkit-clip-path: none;
    flex-direction: column;
    background: transparent;
    pointer-events: all;
  }

  .nav-links li {
    opacity: 1;
    transition: none;
  }

  .nav-links li.fade {
    opacity: 1;
  }

  .toggle .line1 {
    transform: rotate(-45deg) translate(-5px, 6px);
  }

  .toggle .line2 {
    width: 0;
  }

  .toggle .line3 {
    transform: rotate(45deg) translate(-5px, -6px);
  }
}
body{
    overflow-x: hidden;
}
nav{
    height: 6rem;
    width: 100vw;
    background-color: #131418;
    box-shadow: 0 3px 20px rgba(0, 0, 0, 0.2);
    display: flex;
    position: fixed;
    z-index: 10;
}

/*Styling logo*/
.logo{
    padding:1vh 1vw;
    text-align: center;
}
.logo img {
    height: 5rem;
    width: 5rem;
}

/*Styling Links*/
.nav-links{
    display: flex;
    list-style: none; 
    width: 88vw;
    padding: 0 0.7vw;
    justify-content: space-evenly;
    align-items: center;
    text-transform: uppercase;
}
.nav-links li a{
    text-decoration: none;
    margin: 0 0.7vw;
}
.nav-links li a:hover {
    color: #61DAFB;
}
.nav-links li {
    position: relative;
}
.nav-links li a::before {
    content: "";
    display: block;
    height: 3px;
    width: 0%;
    background-color: #61DAFB;
    position: absolute;
    transition: all ease-in-out 250ms;
    margin: 0 0 0 10%;
}
.nav-links li a:hover::before{
    width: 80%;
}

/*Styling Buttons*/
.login-button{
    background-color: transparent;
    border: 1.5px solid #f2f5f7;
    border-radius: 2em;
    padding: 0.6rem 0.8rem;
    margin-left: 2vw;
    font-size: 1rem;
    cursor: pointer;

}
.login-button:hover {
    color: #131418;
    background-color: #f2f5f7;
    border:1.5px solid #f2f5f7;
    transition: all ease-in-out 350ms;
}
.join-button{
    color: #131418;
    background-color: #61DAFB;
    border: 1.5px solid #61DAFB;
    border-radius: 2em;
    padding: 0.6rem 0.8rem;
    font-size: 1rem;
    cursor: pointer;
}
.join-button:hover {
    color: #f2f5f7;
    background-color: transparent;
    border:1.5px solid #f2f5f7;
    transition: all ease-in-out 350ms;
}

/*Styling Hamburger Icon*/
.hamburger div{
    width: 30px;
    height:3px;
    background: #f2f5f7;
    margin: 5px;
    transition: all 0.3s ease;
}
.hamburger{
    display: none;
}

/*Stying for small screens*/
@media screen and (max-width: 800px){
    nav{
        position: fixed;
        z-index: 3;
    }
    .hamburger{
        display:block;
        position: absolute;
        cursor: pointer;
        right: 5%;
        top: 50%;
        transform: translate(-5%, -50%);
        z-index: 2;
        transition: all 0.7s ease;
    }
    .nav-links{
        position: fixed;
        background: #131418;
        height: 100vh;
        width: 100%;
        flex-direction: column;
        clip-path: circle(50px at 90% -20%);
        -webkit-clip-path: circle(50px at 90% -10%);
        transition: all 1s ease-out;
        pointer-events: none;
    }
    .nav-links.open{
        clip-path: circle(1000px at 90% -10%);
        -webkit-clip-path: circle(1000px at 90% -10%);
        pointer-events: all;
    }
    .nav-links li{
        opacity: 0;
    }
    .nav-links li:nth-child(1){
        transition: all 0.5s ease 0.2s;
    }
    .nav-links li:nth-child(2){
        transition: all 0.5s ease 0.4s;
    }
    .nav-links li:nth-child(3){
        transition: all 0.5s ease 0.6s;
    }
    .nav-links li:nth-child(4){
        transition: all 0.5s ease 0.7s;
    }
    .nav-links li:nth-child(5){
        transition: all 0.5s ease 0.8s;
    }
    .nav-links li:nth-child(6){
        transition: all 0.5s ease 0.9s;
        margin: 0;
    }
    .nav-links li:nth-child(7){
        transition: all 0.5s ease 1s;
        margin: 0;
    }
    li.fade{
        opacity: 1;
    }
}

.toggle .line1{
    transform: rotate(-45deg) translate(-5px,6px);
}
.toggle .line2{
    transition: all 0.7s ease;
    width:0;
}
.toggle .line3{
    transform: rotate(45deg) translate(-5px,-6px);
}
  </style>

  <template>
    <div>
      <nav id="main-navbar" class="navbar navbar-default navbar-fixed-top">
        <div class="container navbar-container">
          <div class="navbar-header">
            <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
              <span class="sr-only">Toggle navigation</span>
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
            </button>
            <a class="navbar-brand" href="#">Logo</a>
          </div>
          <div id="navbar" class="navbar-collapse collapse">
            <ul class="nav navbar-nav navbar-right">
              <router-link to="/">Home</router-link>
              <router-link to="/about">About</router-link>
              <router-link to="/books">Books</router-link>
              <router-link to="/contact">Contact Us</router-link>
              <router-link to="/cart">Cart</router-link>
              <router-link to="/admin">Admin</router-link>
              <router-link to="/user">User</router-link>
            </ul>
          </div>
          <div class="top-social">
            <ul id="top-social-menu">
              <li><a href="#">Sign Up</a></li>
              <li><a href="#">Login</a></li>
            </ul>
          </div>
        </div>
      </nav>
  
    </div>
  </template>
  
  <script>
    export default {
      
    }
  </script>
  
  <style scoped>
  
/* # General
================================ */

body {
  font-family: "Open Sans", Helvetica, sans-serif;
}

/* # Header, Main Menu
================================ */

.navbar {
  opacity: 0.8;
  margin-bottom: 0;
  background-color: #fff;
  transition: all 0.2s ease-out;
}

.navbar-container {
	position: relative;
}

.navbar .navbar-nav li a {
  font-size: 14px;
  text-transform: uppercase;
  color: #2E1C05;
  transition: all 0.2s ease-out;
}

.navbar-brand {
  font-size: 25px;
  transition: all 0.2s ease-out;
}

.navbar-scroll {
  opacity: 1;
}

#top-social-menu {
  display: none;
}


@media (min-width: 768px) {
  .navbar {
    height: 120px;
  }

  .navbar-nav>li>a {
    padding: 0;
    margin-top: 35px;
    margin-left: 50px;
    line-height: 70px;
  }

  .navbar-brand {
    font-size: 28px;
    padding: 0;
    height: 120px;
    line-height: 120px;
  }

  #top-social-menu {
    display: initial;
  }

  /* Navbar when scrolled */

  .navbar-scroll {
    height: 70px;
  }

  .navbar-scroll #top-social-menu {
    display: none;
    transition: all 0.2s ease-out;
  }

  .navbar-scroll .navbar-brand {
    height: 70px;
    line-height: 70px;
  }

  .navbar-scroll .navbar-nav>li>a {
    opacity: 1;
    padding: 0;
    margin-top: 0;
  }
}

/* # Hover Link Effect
================================ */
@media (min-width: 768px) {
  .navbar-nav>li>a::after {
    position: absolute;
    top: 80%;
    left: 0;
    width: 100%;
    height: 1px;
    background: #2E1C05;
    content: '';
    opacity: 0;
    transition: height 0.3s, opacity 0.3s, transform 0.3s;
    transform: translateY(-10px);
  }

  .navbar-nav>li>a:hover::after,
  .navbar-nav>li>a:focus::after {
    height: 2px;
    opacity: 1;
    transform: translateY(0px);
  }
}

/* # Social menu
================================ */

#top-social-menu {
  position: absolute;
  top: 7px;
  right: 0;
  font-size: 12px;
  z-index: 101;
  padding-right: 0px;
  list-style: none;
  color: #2E1C05;
  transition: all 0.2s ease-out;
}

#top-social-menu li {
  float: left;
  padding: 10px 15px;
}

#top-social-menu li:last-child {
  padding-right: 0;
}

#top-social-menu li a {
  text-decoration: none;
  color: #2E1C05;
}

#top-social-menu li a:hover {
  text-decoration: none;
  color: #543A1A;
}

#top-social-menu i {
 	font-size: 16px;
  
  transition: all 0.2s ease-in;
}

#top-social-menu i:hover {
  text-decoration: none;
  color: #543A1A;
}

/* # Section Full Width Image
================================ */

.full-width-img {
  background: url('http://res.cloudinary.com/do5ht5y0y/image/upload/v1501322753/bg-cp-header_zps4ghnoxc7_zx2ayd.jpg') no-repeat center center;
  background-size: cover;
  text-align: center;
  padding-top: 100px;
  height: 450px;
  color: #fff;
}

.box {
	background: rgba(0, 0, 0, 0.4);
  border: 3px solid #000;
  color: #fff;
  text-align: center;
  margin-top: 10px;
  padding: 10px 20px;
}

.subheading-text {
  list-style: none;
  font-size: 35px;
  line-height: 50px;
}

@media (min-width: 768px) {

  .full-width-img {
    padding-top: 110px;
    height: 1000px;
  }

  .subheading-text {
    font-size: 50px;
    line-height: 70px;
  }

  .box {
    margin-top: 100px;
    padding: 80px 20px;
  }
}
/* # Section Black, White
================================ */

.section-black,
.section-white {
	padding: 50px 0;
	color: #fff;
	line-height: 1.7;
}

.section-black h3,
.section-white h3 {
	margin-bottom: 60px;
}

.section-black p,
.section-white p {
  margin-bottom: 60px;
}

.section-black {
	background: linear-gradient(#363437, #121112);
}

.section-white {
	background: linear-gradient(#ffffff, #f3f3f3);
  color: #0e0d0e;
}
  </style> -->