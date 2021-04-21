<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <div class="container-fluid">
      <a class="navbar-brand" href="#"><i class="fas fa-user-shield"></i> {{ title }}</a>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <router-link to="/" class="nav-link active">Home</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/about" class="nav-link active">About</router-link>
          </li>
        </ul>
        <ul class="navbar-nav ms-auto">
            <li class="nav-item">
                <router-link to="/register" class="btn btn-success"><i class="fas fa-user"></i> Register</router-link>
            </li>
            <li class="nav-item ms-2">
                <router-link to="/login" class="btn btn-warning"><i class="fas fa-sign-in-alt"></i> Login</router-link>
            </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "Header",
  components: {},
  props: {
    title: String,
  },
};
</script>