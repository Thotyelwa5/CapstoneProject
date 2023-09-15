<template>
    <div>
      <div class="contact " id="contact">
        <div class="container">
          <div class="col-md-offset-1 col-md-10">
            <h2>Contact Me <i class="fa fa-paper-plane-o"></i></h2>
          </div>
          <form action="https://formspree.io/f/mnqkvrzw" method="POST">
            <div class="row">
              <div class="col-md-6">
                <div class="form-group">
                  <input v-model="formData.name" type="text" id="name" class="form-control" placeholder="Name">
                </div>
                <div class="form-group">
                  <input v-model="formData.email" type="text" id="email" class="form-control" placeholder="Email">
                </div>
                <div class="form-group">
                  <input v-model="formData.phone" type="text" id="phone" class="form-control" placeholder="Phone">
                </div>
                <div class="form-group">
                  <input v-model="formData.human" type="text" id="human" class="form-control" placeholder="Prove you're not a robot... What is 2+2?">
                </div>
              </div>
              <div class="col-md-6">
                <div class="form-group">
                    <textarea name="message" rows="5"  cols="40" id="comments" class="form-control" placeholder="Your message"></textarea>
                </div>
              </div>
            </div>
            <div class="col-md-12">
              <div class="form-group">
                
                <button type="submit" class="btn btn-primary ">Send Message</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        formData: {
          name: '',
          email: '',
          phone: '',
          human: '',
          comments: '',
        },
      };
    },
    methods: {
      submitForm() {
        console.log('Form data:', this.formData);
      },
    },
  };
  </script>
  
  <style scoped>
  @import url('https://fonts.googleapis.com/css2?family=Anton&family=Exo+2&family=Lora:ital,wght@0,700;1,500&family=Montserrat:ital,wght@1,100&family=Playfair+Display&display=swap');
  body {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    margin: 0;
  }
  
  .contact {
    padding: 30px;
    border-radius: 10px;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
  }
  
  .contact h2 {
    font-family: 'Open Sans', sans-serif;
    font-size: 2.5em;
    background-color: #333;
    color: #fff;
    padding: 20px 0;
    text-align: center;
    border-radius: 5px;
  }
  
  .form-group {
    margin-bottom: 20px;
  }
  
  input[type="text"],
  textarea {
    width: 100%;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
    font-size: 16px;
  }
  
  textarea {
    resize: vertical;
    min-height: 150px;
  }
  
  .btn-primary {
    background-color: darkmagenta;
    color: #fff;
    border: none;
    padding: 10px 20px;
    border-radius: 5px;
    cursor: pointer;
    width: 84%;
    margin-right: 260px;
    
  }
  
  .btn-primary:hover {
    background-color: lightslategray;
  }
  #comments{
    height: 246px;
    width: 420px;
  }
  #contact{
    margin-top: 130px;
  }
  </style>
  