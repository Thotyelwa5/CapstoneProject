<template>
  <div>
  <div class="about-page">
    <div class="container">
      <h1 class="text-center fs-1">About Us</h1>
      <p class="text-center">Welcome to Ink Cascade, your go-to destination for captivating books!<br> My name is Thotyelwa Mpongwana, and I'm passionate about providing book enthusiasts<br> with an extensive collection of literature to enrich their reading experiences.
      At Ink Cascade,<br> we believe that books have the power to inspire, educate, and transport you to different worlds. <br> That's why we curate a diverse range of books that cater to various genres and interests.
      Whether you're an avid reader or a casual book lover, our selection includes<br> everything you need: from thrilling mysteries to heartwarming romances, from thought-provoking<br> non-fiction to imaginative fantasy.
      Our mission is to help you discover new perspectives,<br> broaden your horizons, and find joy in the pages of a well-written book. We believe that stories<br> have the ability to change lives, and that's what drives us to provide you with the best reading options.
      Thank you for choosing Ink Cascade for your literary journeys.<br> Feel free to explore our collection and immerse yourself in the world of words!<br>
      Contact us at <a href="mailto:info@inkcascadebooks.com">info@inkcascadebooks.com</a> for any inquiries or recommendations.</p>
      <div class="founder-section">
        <h2 class="text-center">Meet the Founder</h2>
        <div class="founder-info">
          <div class="founder-image">
            <img src="https://i.postimg.cc/LsjGqWQj/IMG_1425_(3).jpg" alt="Founder - Thotyelwa Mpongwana" />
          </div>
          <div class="founder-text">
            <p>Hello, I'm Thotyelwa Mpongwana, the founder of Ink Cascade. <br>With a deep love for literature and a belief in the magic of stories,<br> I started this journey to provide readers with a curated selection of books that<br> ignite imagination and spark conversations. <br>My goal is to share the joy of reading with you!</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
</template>

<script>
import NavbarComp from '@/components/NavbarComp.vue';
export default {
  name: 'AboutPage',
  components:{
    NavbarComp
  }
};
</script>

<style scoped>
span{
  background-color: #F4DAF0;
}
.about-page{
  margin-top: 100px;
}
.container{
    color:white;
    font-family: 'Courier New', Courier, monospace;
    font-weight: 700;
}
.founder-section {
  
  padding-top: 10px;
  border-top: 1px solid #ccc;
  color:white;
}
.founder-info {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 0px;
}
.founder-image {
  flex: 1;
  max-width: 500px;
  text-align: center;
}
.founder-image img {
  max-width: 80%;
  border-radius: 30%;
}
.founder-text {
  flex: 2;
  text-align: left;
}
.founder-text p {
  font-size: 1.1rem;
  line-height: 1.6;
  margin-bottom: 0;
  color: white;
}
</style>
