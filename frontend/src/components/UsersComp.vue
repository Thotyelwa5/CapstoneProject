<template>
    <div class="card-container">
      <div class="card">
        <div class="card__image">
          <img :src="user.profileUrl" alt="User Profile" />
        </div>
        <div class="card__name">
          <p>{{ user.firstName }} {{ user.lastName }}</p>
        </div>
        <p><strong>Email:</strong> {{ user.emailAdd }}</p>
        <p><strong>Gender:</strong> {{ user.gender }}</p>
        <p><strong>Date of Birth:</strong> {{ user.userDOB }}</p>
        <p><strong>User Role:</strong> {{ user.userRole }}</p>
        <div class="card__button" @click="deleteUser(user.userID)">
          <p>Delete User</p>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      user: {
        type: Object,
        required: true,
      },
    },
    methods: {
    async deleteUser(userID ) {
      const confirmed = confirm("Are you sure you want to delete this user?");
      if (confirmed) {
        try {
          await this.$store.dispatch("deleteUser", userID );
          console.log("User deleted successfully!");
        } catch (err) {
          console.error("Error deleting user:", err);
        }
      }
     },
    },
  };
  </script>
  
  <style lang="scss" scoped>
  .card-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }
  
  .card {
    max-height: fit-content;
    width: fit-content;
    flex-basis: calc(25% - 1rem);
    margin-bottom: 2rem;
    background-color: #fff;
    border-radius: 1rem;
    box-shadow: -7px 6px 13px -1px rgba(40, 40, 40, 0.55);
    transition: all 0.3s ease;
  
    &:hover {
      transform: scale(1.05);
      
    }
  
    &__image {
      padding: 2rem;
      padding-bottom: 0;
      width: 100%;
      position: relative;
  
      img {
        border-radius: 1rem;
        width: 50%;
        object-fit: cover;
        transition: all 0.5s ease;
  
        &:hover {
          transform: translateY(-4.5rem) scale(1.05);
        }
      }
    }
  
    p {
      padding: 0,5px;
      padding-bottom: 0;
      font-size: 15px;
      text-align: center;
    }
  
    &__name {
      p {
        color: black;
        font-weight: bold;
        font-size: 20px;
        text-align: center;
      }
    }
  
    &__button {
      border-radius: 3px;
      background: grey;
      font-weight: bold;
      margin: 2rem;
      margin-top: 0.5rem;
      padding: 1rem;
      cursor: pointer;
      transition: all 0.3s ease;
  
      p {
        font-size: 1.2rem;
        padding: 0;
      }
    }
  }
  </style>
  