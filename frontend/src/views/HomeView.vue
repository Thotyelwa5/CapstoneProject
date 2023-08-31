<template>
  <div>
    <div id="carouselExampleAutoplaying" class="carousel slide" data-bs-ride="carousel">
      <div class="carousel-inner">
        <div class="carousel-item active">
          <img src="https://i.postimg.cc/zBp6xtMm/pexels-vlada-karpovich-9969154.jpg" class="d-block w-100 " alt="image">
        </div>
        <div class="carousel-item ">
          <img src="https://i.postimg.cc/SxM0mGX8/pngtree-vintage-books-on-wooden-desk-with-a-picture-picture-image_2695916.png" class="d-block w-100 " alt="image">
        </div>
        <div class="carousel-item">
          <img src="https://i.postimg.cc/xTdnVHyy/photo-1626437513709-7ed95e5d0008.jpg" class="d-block w-100 " alt="image">
        </div>
      </div>
      <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>
 
    <h2 class="text-center mt-5">FEATURED PRODUCTS</h2>
    <div class="row mt-2 p-4">
      <div class="col-12 col-sm-6 col-lg-3">
        <div class="card">
          <img src="https://i.postimg.cc/bwDPsh5Z/thumbnail_(8).jpg" class="card-img-top" alt="...">
          <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <a href="#" class="btn btn-primary">Read More</a>
            <a href="#" class="btn btn-primary">Add to Cart</a>
          </div>
        </div> 
        </div>
      

      <div class="col-12 col-sm-6 col-lg-3">
        <div class="card">
          <img src="https://i.postimg.cc/WzYR1W6m/thumbnail_(4).jpg" class="card-img-top" alt="...">
          <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <a href="#" class="btn btn-primary">Read More</a>
            <a href="#" class="btn btn-primary">Add to Cart</a>
          </div>
        </div>
      </div>

      <div class="col-12 col-sm-6 col-lg-3" >
        <div class="card">
        <img src="https://i.postimg.cc/d39qJjLw/thumbnail_(11).jpg" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">Card title</h5>
          <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          <a href="#" class="btn btn-primary">Read More</a>
          <a href="#" class="btn btn-primary">Add to Cart</a>
        </div>
       </div>
      </div>
      
      <div class="col-12 col-sm-6 col-lg-3">
        <div class="card">
        <img src="https://i.postimg.cc/SRxFqF8N/thumbnail_(2).jpg" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">Card title</h5>
          <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          <a href="#" class="btn btn-primary">Read More</a>
          <a href="#" class="btn btn-primary">Add to Cart</a>
        </div>
      </div>
    </div>
  </div>
  </div>
  
</template>

<script>
export default {
  
}
</script>

<style scoped>
.carousel {
  margin: 0 auto;
}

.carousel-inner {
  max-height: 600px;
}

.card {
  height: 580px;
  padding: 3px;
}
.card > img {
  height: 415px !important;
}
</style>