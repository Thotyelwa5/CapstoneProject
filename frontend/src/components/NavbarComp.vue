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
            <router-link to="/register">Register</router-link>
          </div>
        </div>
        <div class="icons">
          <router-link to="/cart" class="btn btn-primary">
            <i class="fas fa-cart-shopping"></i></router-link>
            <router-link to="/login" class="btn btn-primary"><i class="fa-solid fa-user">
            </i></router-link>
        </div>
        <i class="fa-solid far-bars nav-menu-btn" @click="openNavigation"></i>
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
  @import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
  
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
      color: #fff;
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
          background: rgba(0, 0, 0, 0.25);
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