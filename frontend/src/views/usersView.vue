<template>
  <div>
    <div class="wrapper" v-if="user.result" :key="user.result.userID">
      <div class="card">
        <div class="card-body">
          <div class="row">
            <div class="col col-sm-4 left">
              <div class="img">
                <img :src="user.result.profileUrl" alt="User Profile" style="height:100px; border-radius:50%" />
              </div>
              <h4>Name : {{ user.result.firstName }}</h4>
              <p>lastName: {{ user.result.lastName }}</p>
              <p> gender:{{ user.result.gender }}</p>
              <p>userRole: {{ user.result.userRole }}</p>
            </div>
            <div class="col col-sm-8 right">
              <div class="container">
                <h4>DOB:  {{ user.result.userDOB }}</h4>
                <p>emailAdd:  {{ user.result.emailAdd }}</p>
                <p> userPass:  {{ user.result.userPass }}</p>
                <div class="action-buttons">
                  <button class="edit"><i class="fa fa-pencil"></i></button>
                  <button class="delete"><i class="fa fa-trash"></i></button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    id() {
      return this.$route.params.userID;
    },
    user() {
      return this.$store.state.user || JSON.parse(localStorage.getItem("userData"));
    },
  },
  mounted() {
    const userID = this.$route.params.userID;
    this.$store.dispatch("fetchUser", userID);
  },
};
</script>
<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Anton&family=Exo+2&family=Lora:ital,wght@0,700;1,500&family=Montserrat:ital,wght@1,100&family=Playfair+Display&display=swap');
html,body {
    height: 100%;
    padding: 0;
    margin: 0;
    font-size: 16px;
  }
  
  .left .img,
  .card,
  .left button,
  .action-buttons button {
    box-shadow: 3px 3px 6px rgba(0,0,0,0.2);
  }
  
  button {
    transition: 0.3s ease-in-out;
  }
  
  button:hover {
    cursor: pointer;
    transform: scale(1.1);
  }
  
  .wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
   
  }
  
  .card {
    border-radius: .25rem;
    border: none;
    width: 600px;
    height: 300px
  }
  .img{
    width: 600px;
    height: 300px
  }
  
  .card-body {
    padding: 0;
  }
  
  .left {
    background: #FFE5AD;
    text-align: center;
    max-width: 200px;
    max-height: 300px;
    color: #fff;
    border-top-left-radius: .25rem;
    border-bottom-left-radius: .25rem;
    box-shadow: 3px 0 6px rgba(0,0,0,0.2);
  }
  
  .left .img {
    border-radius: 50%;
    width: 100%;
    width: 90px;
    height: 90px;
    background: #E6E6E6;
    margin-top: 1.625rem;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: auto;
    margin-right: auto;
  }
  
  .left .img i {
    font-size: 4rem;
    color: #6C757D;
  }
  
  .left h4 {
    font-size: 1.25rem;
    margin-top: .94rem;
  }
  
  
  .left button {
    font-size: .75rem;
    border-radius: 1.1rem;
    padding: .25rem 1.25rem;
    border: none;
    background: #FFE5AD;
    color: black;
    position: absolute;
    bottom: 1.25rem;
    left: 50%;
    transform: translate(-50%);
  }
  
  .right {
    height: 300px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  
  .right h4 {
    margin-bottom: .93rem;
    font-size: 1.25rem
  }
  
  
  .right h4:not(:first-of-type) {
    margin-top: 2.5rem;
  }
  
  .action-buttons {
    position: absolute;
    top: 1.25rem;
    right: 3rem;
  }
  
  .action-buttons button {
    height: 30px;
    width: 30px;
    border-radius: 4px;
    border: none;
  }
  
  .action-buttons button i {
    color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  
  .edit {
    margin-right: .25rem;
    background: #17A2B8;
  }
  .logout {
    margin-right: .25rem;
    background: #17A2B8;
  }
  
  .delete {
    background: #EE6E73;
  }
  
  @media only screen and (max-width: 500px) {
    
  }
  
</style>