
   <template>
    <div class="d-flex justify-content-center align-items-center mb-5">
      <div class="container">
        <div class="btn">
          <button class="login" @click="toggleForm('login')">Login</button>
          <button class="signup" @click="toggleForm('signup')">Signup</button>
        </div>
  
        <div class="form-section">
          <login v-if="activeForm === 'login'" />
          <register v-else-if="activeForm === 'signup'" />
        </div>
        
        <p v-if="registrationError" class="error">{{ registrationError }}</p>
      </div>
    </div>
  </template>
  
  <script>
  import Login from '@/components/LoginComp.vue'; 
  import Register from '@/components/RegisterComp.vue'
  
  export default {
  data() {
    return {
      activeForm: 'login',
      registrationError: null,
    };
  },
  components: {
    Login,
    Register,
  },
  methods: {
    toggleForm(form) {
      this.activeForm = form;
      this.registrationError = null;
    },
  },
};
  </script>
   <style scoped>
   * {
     margin: 0;
     padding: 0;
     box-sizing: border-box;
   }
   
   body {
     height: 100vh;
     width: 100vw;
     display: flex;
     justify-content: center;
     align-items: center;
     flex-direction: column;
     gap: 30px;
     background-color: rgb(231, 231, 231);
   }
   
   header {
     width: 100%;
     display: flex;
     flex-direction: column;
     align-items: center;
     justify-content: center;
     gap: 8px;
   }
   
   
   
   .title {
     font-weight: 400;
     letter-spacing: 1.5px;
   }
   
   .container {
     height: 600px;
     width: 500px;
     margin-top: 200px;
     background-color: white;
     box-shadow: 8px 8px 20px rgb(128, 128, 128);
     position: relative;
     overflow: hidden;
   }
   
   .btn {
     height: 60px;
     width: 300px;
     margin: 20px auto;
     box-shadow: 10px 10px 30px rgb(254, 215, 188);
     border-radius: 50px;
     display: flex;
     justify-content: space-around;
     align-items: center;
   }
   
   .login,
   .signup {
     font-size: 22px;
     border: none;
     outline: none;
     background-color: transparent;
     position: relative;
     cursor: pointer;
   }
   
   .slider {
     height: 60px;
     width: 150px;
     border-radius: 50px;
     background-image: linear-gradient(to right, rgb(255, 195, 110), rgb(255, 146, 91));
     position: absolute;
     top: 20px;
     left: 100px;
     transition: all 0.5s ease-in-out;
   }
   
   .moveslider {
     left: 250px;
   }
   
   .form-section {
     height: 500px;
     width: 1000px;
     padding: 20px 0;
     display: flex;
     position: relative;
     transition: all 0.5s ease-in-out;
     left: 0px;
   }
   
   .form-section-move {
     left: -500px;
   }
   
   .login-box,
   .signup-box {
     height: 100%;
     width: 500px;
     display: flex;
     flex-direction: column;
     align-items: center;
     justify-content: center;
     padding: 0px 40px;
   }
   
   
   .login-box {
     gap: 50px;
   }
   
   .signup-box {
     gap: 30px;
   }
   
   .ele {
     height: 80px;
     width: 400px;
     outline: none;
     border: none;
     color: rgb(77, 77, 77);
     background-color: rgb(240, 240, 240);
     border-radius: 50px;
     padding-left: 30px;
     font-size: 18px;
   }
   
   .clkbtn {
     height: 60px;
     width: 200px;
     border-radius: 50px;
     background-image: linear-gradient(to right, rgb(255, 195, 110), rgb(255, 146, 91));
     font-size: 22px;
     border: none;
     cursor: pointer;
     margin-bottom: 20px;
   }
   
   /* For Responsiveness of the page */
   
   @media screen and (max-width: 650px) {
     .container {
       height: 600px;
       width: 300px;
     }
   
     .title {
       font-size: 15px;
     }
   
     .btn {
       height: 50px;
       width: 200px;
       margin: 20px auto;
     }
   
     .login,
     .signup {
       font-size: 19px;
     }
   
     .slider {
       height: 50px;
       width: 100px;
       left: 50px;
     }
   
     .moveslider {
       left: 150px;
     }
   
     .form-section {
       height: 500px;
       width: 600px;
     }
   
     .form-section-move {
       left: -300px;
     }
   
     .login-box,
     .signup-box {
       height: 100%;
       width: 300px;
     }
   
     .ele {
       height: 50px;
       width: 250px;
       font-size: 15px;
     }
   
     .clkbtn {
       height: 50px;
       width: 130px;
       font-size: 19px;
     }
   }
   
   @media screen and (max-width: 320px) {
     .container {
       height: 600px;
       width: 250px;
     }
   
     .heading {
       font-size: 30px;
     }
   
     .title {
       font-size: 10px;
     }
   
     .btn {
       height: 50px;
       width: 200px;
       margin: 20px auto;
     }
   
     .login,
     .signup {
       font-size: 19px;
     }
   
     .slider {
       height: 50px;
       width: 100px;
       left: 27px;
     }
   
     .moveslider {
       left: 127px;
     }
   
     .form-section {
       height: 500px;
       width: 500px;
     }
   
     .form-section-move {
       left: -250px;
     }
   
     .login-box,
     .signup-box {
       height: 100%;
       width: 250px;
     }
   
     .ele {
       height: 50px;
       width: 220px;
       font-size: 15px;
     }
   
     .clkbtn {
       height: 50px;
       width: 130px;
       font-size: 19px;
     }
   }
   </style> 
  