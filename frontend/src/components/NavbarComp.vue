

  <template>
    <div>
      <div v-if="isLoggedIn">
        <p>Welcome back {{ userfirstName }} {{ userlastName }}</p>
      </div>
      <nav class="navbar navbar-expand-lg bg-body-tertiary justify-content-center">
        <div class="container-fluid ">
          <router-link class="nav-link" to="/"><img src="https://i.postimg.cc/h4r9BGbk/inkcascade.png" alt="logo"  width="90" height="90" border-radius="90"></router-link>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul class="nav-links navbar-nav navbar-left">
               <li class="mx-3"><router-link to="/">Home</router-link></li> 
                <li class="mx-3"><router-link to="/about">About</router-link></li>
                <li class="mx-3"><router-link to="/books">Books</router-link></li>
                <li class="mx-3"><router-link to="/cart">Cart</router-link></li>
                <li class="mx-3"><router-link to="/contact">Contact Us</router-link></li>
                <li class="mx-3"><router-link to="/user">Profile</router-link></li>
                <li class="mx-3"><router-link to="/admin">Admin</router-link></li>
                </ul>
                <div class="d-flex login-signup">
                  <li class="mx-3"><router-link to="/login" class="login-button">Login</router-link></li>
                <li class="mx-3"><router-link to="/register" class="join-button">Sign Up</router-link></li> 
                </div>
            </div>   
          </div>   
      </nav>
    </div>
  </template>
  
  <script>
    export default {
      computed: {
        userfirstName() {
      // Get the user's first name from localStorage
      const userDataJSON = localStorage.getItem("userData");
      if (userDataJSON) {
        const userData = JSON.parse(userDataJSON);
        return userData.result.firstName || ""; // Replace 'firstName' with the actual field name
      }
      return "";
    },
    userlastName() {
      const userDataJSON = localStorage.getItem("userData");
      if (userDataJSON) {
        const userData = JSON.parse(userDataJSON);
        return userData.result.lastName || "";
      }
      return "";
    },
  },
    }
  </script>
  
  <style scoped>
  @import url('https://fonts.googleapis.com/css2?family=Anton&family=Lora:ital,wght@1,500&family=Montserrat:ital,wght@1,100&family=Playfair+Display&display=swap');
  .login-button{
    text-align: right;
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
  </style>