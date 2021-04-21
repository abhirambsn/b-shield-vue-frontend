<template>
  <div class="row">
    <div class="col-4" v-for="password in passwords" :key="password._id">
        <Password :pwd="password" />
    </div>
  </div>
</template>

<script>
import Password from "./Password";
export default {
  name: "Passwords",
  components: {
    Password,
  },
  props: {
    passwords: Array,
  },
  methods: {},
};
</script>