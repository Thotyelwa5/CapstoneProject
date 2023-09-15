
 <template>
    <div>
      <nav class="navbar navbar-expand-lg bg-body-tertiary justify-content-center fixed-top">
        <div class="container-fluid ">
          <router-link class="nav-link" to="/"><img src="https://i.postimg.cc/h4r9BGbk/inkcascade.png" alt="logo"  width="90" height="90" border-radius="90"></router-link>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul class="nav-links navbar-nav navbar-left">
               <li class="mx-3"><router-link class="text" to="/">Home</router-link></li> 
                <li class="mx-3"><router-link class="text" to="/about">About</router-link></li>
                <li class="mx-3"><router-link class="text" to="/books">Books</router-link></li>
                <li class="mx-3"><router-link class="text" to="/cart">Cart</router-link></li>
                <li class="mx-3"><router-link class="text" to="/contact">Contact Us</router-link></li>
                <li class="mx-3"><router-link class="text" to="/user">Profile</router-link></li>
                <li class="mx-3"><router-link class="text" to="/admin">Admin</router-link></li>
                </ul>
                <div class="d-flex login-signup">
                  <router-link class="login-button mx-3" v-if="!isLoggedIn" to="/login">Login</router-link>
                  <button v-else @click="logout">Logout</button>
                  <li class="mx-3"><router-link :to="{ name: 'register' }" class="join-button" v-if="!isLoggedIn">Sign Up</router-link></li> 
                </div>
            </div>   
          </div>   
      </nav>
    </div>
  </template>
  
<script>
export default {
  computed: {
    
    isLoggedIn() {
      const userDataJSON = localStorage.getItem("userData");
      return !!userDataJSON;
      
    },
    userFirstName() {
      const userDataJSON = localStorage.getItem("userData");
      if (userDataJSON) {
        const userData = JSON.parse(userDataJSON);
        return userData.result.firstName || ""; 
      }
      return "";
    },
    userLastName() {
      const userDataJSON = localStorage.getItem("userData");
      if (userDataJSON) {
        const userData = JSON.parse(userDataJSON);
        return userData.result.lastName || "";
      }
      return "";
    },
  },
  methods: {
    logout() {
      this.$store.dispatch("logout");
      localStorage.removeItem("userData");
      this.$router.push("/");
      window.location.reload();
    },
  },
  }

</script>
  
  <style scoped>
  @import url('https://fonts.googleapis.com/css2?family=Anton&family=Exo+2&family=Lora:ital,wght@0,700;1,500&family=Montserrat:ital,wght@1,100&family=Playfair+Display&display=swap');
  .login-button{
    text-align: right;
  }
  .text{
    text-decoration: none;
    color:black;
  }
  .text:hover{
    background-color: antiquewhite;
  }
  .navbar{
    background-color: #FFE5AD !important;
  }
  .nav-links{
    display: flex;
    list-style: none;
    justify-content: space-between;
    align-items: center;
    text-transform: uppercase;
    text-decoration: none;
  }
  .login-button {
    background-color: transparent;
    border: 1.5px solid #f2f5f7;
    border-radius: 2em;
    padding: 0.6rem 0.8rem;
    font-size: 1rem;
    cursor: pointer;
    
  }
  .login-signup {
    margin-left: 25% !important;
    list-style-type: none;
  }
  .nav-links {
    margin-left: 20% !important;
  }
  .login-button:hover {
    color: #131418;
    background-color: #f2f5f7;
    border: 1.5px solid #f2f5f7;
    transition: all ease-in-out 350ms;
  }
  
  .join-button {
    color: #131418;
    background-color: transparent;
    border: 1.5px solid #61DAFB;
    border-radius: 2em;
    padding: 0.6rem 0.8rem;
    font-size: 1rem;
    cursor: pointer;
  }
  
  .join-button:hover {
    color: #f2f5f7;
    background-color: transparent;
    border: 1.5px solid #f2f5f7;
    transition: all ease-in-out 350ms;
  }
  #button {
    font-size: 22px;
    border: none;
    outline: none;
    background-color: transparent;
    position: relative;
    cursor: pointer;
  }
  </style>