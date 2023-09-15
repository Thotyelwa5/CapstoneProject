<template>
  <div class="Footer">
    <footer class="text-center text-lg-start text-white ftr">
      <section
        class="d-flex justify-content-center justify-content-lg-between p-4 border-bottom"
      >
        <div class="me-5 d-none d-lg-block">
          <span>Get connected with us on social networks: </span>
        </div>

        <div>
          <a href="https://www.facebook.com/" class="me-4 text-reset">
            <i class="fab fa-facebook-f"></i>
          </a>
          <a href="https://twitter.com/?lang=en" class="me-4 text-reset">
            <i class="fab fa-twitter"></i>
          </a>
          <a href="https://www.instagram.com/" class="me-4 text-reset">
            <i class="fab fa-instagram"></i>
          </a>
          <a
            href="https://www.linkedin.com/in/thotyelwa-mpongwana-134944195/"
            class="me-4 text-reset"
          >
            <i class="fab fa-linkedin"></i>
          </a>
          <a
            href="https://github.com/Thotyelwa5?tab=repositories"
            class="me-4 text-reset"
          >
            <i class="fab fa-github"></i>
          </a>
        </div>
      </section>
      <section class="">
        <div class="container text-center text-md-start mt-5">
          <div class="row mt-3">
            <div class="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
              <h6 class="text-uppercase fw-bold mb-4">
                <i class="fas fa-gem me-3"></i>InkCascade
              </h6>
              <p>
                Here you can use rows and columns to organize your footer
                content. Lorem ipsum dolor sit amet, consectetur adipisicing
                elit.
              </p>
            </div>
            <div class="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
              <h6 class="text-uppercase fw-bold mb-4">Books</h6>
              <p>
                <a href="#!" class="text-reset">Adults</a>
              </p>
              <p>
                <a href="#!" class="text-reset">Food</a>
              </p>
              <p>
                <a href="#!" class="text-reset">Romance</a>
              </p>
              <p>
                <a href="#!" class="text-reset">Children</a>
              </p>
            </div>
            <div class="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
              <h6 class="text-uppercase fw-bold mb-4">Useful links</h6>
              <p>
                <router-link class="link" to="/"
                  ><i class="uil uil-home"></i>Home</router-link
                >
              </p>
              <p>
                <router-link class="link" to="/about"
                  ><i class="uil uil-info-circle"></i>About</router-link
                >
              </p>
              <p>
                <router-link class="link" to="/books"
                  ><i class="uil uil-compass"></i>Books</router-link
                >
              </p>
              <p>
                <router-link class="link" to="/contact"
                  ><i class="uil uil-compass"></i>Contact</router-link
                >
              </p>
              <p>
                <router-link class="link" to="/admin"
                  ><i class="uil uil-compass"></i>Admin</router-link
                >
              </p>
            </div>
            <div class="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
              <h6 class="text-uppercase fw-bold mb-4">Contact</h6>
              <p><i class="fas fa-home me-3"></i> Hout Bay Cape Town 7806</p>
              <p>
                <i class="fas fa-envelope me-3"></i>
                mpongwanathotyelwa@gmail.com
              </p>
              <p><i class="fas fa-phone me-3"></i> +27 65 347 7406</p>
              <p><i class="fas fa-print me-3"></i> +27 84 065 1142</p>
            </div>
          </div>
        </div>
      </section>
      <div class="text-center p-4">
        © 2023 Copyright:
        <a class="text-reset fw-bold" href="https://mdbootstrap.com/"
          >InkCascade</a
        >
      </div>
    </footer>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Anton&family=Exo+2&family=Lora:ital,wght@0,700;1,500&family=Montserrat:ital,wght@1,100&family=Playfair+Display&display=swap");

.Footer {
  background-color: #3e001f;
  color: white;
}
.link {
  color: white;
  text-decoration: none;
}
.text-reset {
  text-decoration: none;
}
</style>