<template>
    <div class="registration">
      <h2>Register</h2>
      <form @submit.prevent="registerUser">
        <div class="form-group">
          <label for="firstName">First Name:</label>
          <input
            type="text"
            id="firstName"
            v-model="form.firstName"
            required
            class="input"
          />
        </div>
        <div class="form-group">
          <label for="lastName">Last Name:</label>
          <input
            type="text"
            id="lastName"
            v-model="form.lastName"
            required
            class="input"
          />
        </div>
        <div class="form-group">
          <label for="gender">Gender:</label>
          <input type="text" id="gender" v-model="form.gender" class="input" />
        </div>
        <div class="form-group">
          <label for="userDOB">Date of Birth:</label>
          <input type="date" id="userDOB" v-model="form.userDOB" class="input" />
        </div>
        <div class="form-group">
          <label for="userRole">User Role:</label>
          <input
            type="text"
            id="userRole"
            v-model="form.userRole"
            class="input"
          />
        </div>
        <div class="form-group">
          <label for="emailAdd">Email:</label>
          <input
            type="email"
            id="emailAdd"
            v-model="form.emailAdd"
            required
            class="input"
          />
        </div>
        <div class="form-group">
          <label for="userPass">Password:</label>
          <input
            type="password"
            id="userPass"
            v-model="form.userPass"
            required
            class="input"
          />
        </div>
        <div class="form-group">
          <label for="profileUrl">Profile URL:</label>
          <input
            type="text"
            id="profileUrl"
            v-model="form.profileUrl"
            class="input"
          />
        </div>
        <button type="submit">Register</button>
      </form>
      <p v-if="registrationError" class="error">{{ registrationError }}</p>
    </div>
  </template>
  <script>
  export default {
    data() {
      return {
        form: {
          firstName: "",
          lastName: "",
          gender: "",
          userDOB: "",
          userRole: "",
          emailAdd: "",
          userPass: "",
          profileUrl: "",
        },
        registrationError: null,
      };
    },
    methods: {
      async registerUser() {
        this.registrationError = null;
        try {
          const response = await this.$store.dispatch("registerUser", this.form);
          this.$router.push("/login");
        } catch (error) {
          this.registrationError =
            "Registration failed. Please check your inputs and try again.";
        }
      },
    },
  };
  </script>
  <style scoped>
  .registration {
    max-width: 400px;
    margin: 0 auto;
    padding: 20px;
    border: 1px solid #ccc;
    border-radius: 5px;
  }
  .form-group {
    margin-bottom: 15px;
  }
  label {
    display: block;
    font-weight: bold;
  }
  .input {
    width: 100%;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
    font-size: 16px;
  }
  button {
    background-color: #007BFF;
    color: #fff;
    border: none;
    border-radius: 5px;
    padding: 10px 20px;
    cursor: pointer;
  }
  .error {
    color: red;
    margin-top: 10px;
  }
  </style>