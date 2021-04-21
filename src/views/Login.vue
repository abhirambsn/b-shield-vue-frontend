<template>
  <div class="">
    <Header title="B-Shield"/>
    <LoginForm @login-user="loginUser" />
  </div>
</template>

<script>
import LoginForm from "../components/LoginForm";
import axios from "axios";

export default {
  name: "Login",
  components: {
    LoginForm,
  },
  props: {},
  methods: {
    loginUser(user) {
      axios
        .post("http://localhost:5000/api/user/login", user)
        .then((response) => {
          if (response.status === 200) {
            localStorage.setItem("authToken", response.data.token);
            alert("Login Succssful");
            window.location.replace("/dashboard")
          }
        })
        .catch((error) => {
          if (error.response.status === 400) {
            alert("Wrong Password");
          } else {
            alert(`${error}`);
          }
        });
    },
  },
};
</script>