<template>
  <div>
    <router-view /><br />
    <Footer />
  </div>
</template>


<script>
import Footer from "./components/Footer";

export default {
  name: "App",
  components: {
    Footer,
  },
};
</script>