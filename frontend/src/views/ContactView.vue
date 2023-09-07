
<template>
    <div>
      <div class="contact mb-5" id="contact">
        <div class="container">
          <div class="col-md-offset-1 col-md-10">
            <h2>Contact Me <i class="fa fa-paper-plane-o"></i></h2>
            <div id="map-canvas">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2752.599505543255!2d18.34755445558279!3d-34.039939997693104!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1dcc694646f0512d%3A0xd21975d52e780c14!2sSPAR%20Hout%20Bay!5e0!3m2!1sen!2sza!4v1693491174579!5m2!1sen!2sza"   allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
          </div>
          <form @submit.prevent="submitForm" name="contactform" id="contactform">
            <div class="col-md-offset-1 col-md-5">
              <fieldset>
                <input v-model="formData.name" type="text" id="name" size="30" placeholder="Name">
                <br>
                <input v-model="formData.email" type="text" id="email" size="30" placeholder="Email">
                <br>
                <input v-model="formData.phone" type="text" id="phone" size="30" placeholder="Phone">
                <br>
                <input v-model="formData.human" type="text" id="human" size="30" placeholder="Prove you're not a robot... What is 2+2?">
                <br>
              </fieldset>
            </div>
            <div class="col-md-5">
              <fieldset>
                <textarea v-model="formData.comments" cols="40" rows="20" id="comments" placeholder="Message"></textarea>
              </fieldset>
            </div>
            <div class="col-md-offset-1 col-md-10">
              <fieldset>
                <button type="submit" class="btn btn-lg" id="submit">Send Message</button>
              </fieldset>
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
        // Handle form submission here
        console.log('Form data:', this.formData);
        // You can send the form data to your server here
        // For example: axios.post('your-api-endpoint', this.formData)
      },
    },
  };
  </script>
  
  <style scoped>
 
  body {
    background: linear-gradient(0deg, rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.6)), url(https://unsplash.it/1920/1080?image=871) fixed;
    display: flex;
    justify-content: center;
    height: 100%;
  }
  
  .contact {
    align-self: center;
    height: 100%;
    margin-bottom: 50%;
  }
  
  .contact i {
    padding: 0 20px;
    font-size: 0.8em;
  }
  
  .contact h2 {
    font-family: 'Open Sans', sans-serif;
    font-size: 2.5em;
    border: 1px solid #555;
    background-color: rgba(0, 0, 0, 0.7);
    padding-top: 20px;
    height: 75px;
    color: #fff;
    font-weight: 500;
    line-height: 40px;
    padding-left: 50px;
    text-align: center;
  }
  
  #contactform {
    height: 215px;
  }
  
  .right {
    float: right;
  }
  
  input {
    margin-bottom: 14px;
    width: 100%;
    outline: none;
    border: none;
    text-transform: uppercase;
    letter-spacing: 2px;
    font-size: 11px;
    padding-left: 15px;
    height: 44px;
    border-radius: 0;
  }
  
  textarea {
    margin-bottom: 14px;
    width: 100%;
    outline: none;
    border: none;
    text-transform: uppercase;
    letter-spacing: 2px;
    font-size: 11px;
    padding: 15px;
    height: 218px;
    border-radius: 0;
  }
  
  .btn {
    width: 100%;
    height: 50px;
    border-radius: 0;
    border: 1px solid #333;
    background: rgba(0, 0, 0, 0.7);
    color: #fff;
  }
  
  .btn:hover {
    background: rgba(0, 0, 0, 0.5);
  }
  
  #map-canvas {
    width: 100%;
    height: 135px;
    margin-bottom: 15px;
    border: 2px solid #fff;
  }
  </style>
  