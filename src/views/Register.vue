<template>
  <div class="">
    <LoginForm @login-user="loginUser" />
    <RegisterForm @register-user="registerUser" />
  </div>
</template>

<script>
import RegisterForm from "../components/RegisterForm";
import axios from "axios";

export default {
  name: "Register",
  components: {
    RegisterForm,
  },
  props: {},
  methods: {
    registerUser(newUser) {
      axios
        .post("http://localhost:5000/api/user/register", newUser)
        .then((response) => {
          if (response.status === 200) {
            alert("Registration Succssful");
          }
        })
        .catch((error) => {
          alert(`Error: ${error.response.data}`);
        });
    },
  },
};
</script>