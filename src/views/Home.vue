<template>
  <div class="">
    <Header title="B-Shield"/>
    <div id="initialCarousel" class="carousel slide" data-bs-ride="carousel">
      <div class="carousel-indicators">
        <button
          type="button"
          data-bs-target="#initialCarousel"
          data-bs-slide-to="0"
          class="active"
          aria-current="true"
          aria-label="Slide 1"
        ></button>
        <button
          type="button"
          data-bs-target="#initialCarousel"
          data-bs-slide-to="1"
          aria-label="Slide 2"
        ></button>
        <button
          type="button"
          data-bs-target="#initialCarousel"
          data-bs-slide-to="2"
          aria-label="Slide 3"
        ></button>
      </div>
      <div class="carousel-inner">
        <div class="carousel-item active">
          <img
            src="../assets/img1.png"
            class="d-block w-100 h-50"
            alt="First Slide"
          />
        </div>
        <div class="carousel-item">
          <img
            src="../assets/img2.png"
            class="d-block w-100 h-50"
            alt="Second Slide"
          />
        </div>
        <div class="carousel-item">
          <img
            src="../assets/img3.png"
            class="d-block w-100 h-50"
            alt="Third Slide"
          />
        </div>
      </div>
      <button
        class="carousel-control-prev"
        type="button"
        data-bs-target="#initialCarousel"
        data-bs-slide="prev"
      >
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button
        class="carousel-control-next"
        type="button"
        data-bs-target="#initialCarousel"
        data-bs-slide="next"
      >
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>
    <div class="jumbotron m-3">
        <h1 class="display-4">Get Started Here</h1>
        <hr class="my-4">
        <p class="lead">If this is your first time launch click register, else click login to view your passwords</p>
    </div>
  </div>
</template>

<style scoped>
.jumbotron {
  padding: 2rem 1rem;
  margin-bottom: 2rem;
  background-color: #e9ecef;
  border-radius: .3rem;
}
</style>

<script>
import Header from '../components/Header'
export default {
  name: "Home",
  components: {
    Header
  },
};
</script>