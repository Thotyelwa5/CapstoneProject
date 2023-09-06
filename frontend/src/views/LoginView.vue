<template>
    <form @submit.prevent="login" class="mt-5 pt-5">
      <input
        type="text"
        v-model="form.emailAdd"
        placeholder="Email"
        autocomplete="username"
      />
      <input
        type="password"
        v-model="form.userPass"
        placeholder="Password"
        autocomplete="current-password"
      />
      <button type="submit">Login</button>
      <p v-if="loginError" class="error-message">{{ loginError }}</p>
    </form>
  </template>
  <script>
  import { mapActions } from "vuex";
  export default {
    data() {
      return {
        form: {
          emailAdd: "",
          userPass: "",
        },
        loginError: null,
      };
    },
    methods: {
      ...mapActions(["loginUser"]),
      async login() {
    try {
      const response = await this.loginUser({
        emailAdd: this.form.emailAdd,
        userPass: this.form.userPass,
      });
      console.log("Response from server:", response); 
      if (response && response.token) {
        const token = response.token;
        this.$cookies.set("userToken", token);
        this.$router.push("/");
      } else {
        
        this.loginError = "Login failed: Unexpected response format";
        console.error("Login failed: Unexpected response format", response);
      }
    } catch (error) {
      if (error.response && error.response.status === 401) {
        
        this.loginError = "Invalid email or password. Please try again.";
      } else {
        
        this.loginError = "An error occurred during login. Please try again later.";
        // console.error("Login failed:", error);
      }
    }
  }
    },
  };
  </script>
  <style scoped>
  .error-message {
    color: red;
    margin-top: 10px;
  }
  </style>