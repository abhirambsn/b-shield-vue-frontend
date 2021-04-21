<template>
  <div>
    <h3 class="display-3 text-center"><i class="fas fa-user-shield"></i> B-Shield</h3>
    <br />
    <div class="container" style="width: 50%">
      <div class="card">
        <div class="card-body">
          <form @submit="loginSubmit">
            <div class="mb-3 row">
              <label for="username" class="col-sm-2 col-form-label"
                >Username</label
              >
              <div class="col-sm-10">
                <input
                  type="text"
                  class="form-control"
                  id="username"
                  placeholder="Enter Username"
                  v-model="username"
                />
              </div>
            </div>
            <div class="mb-3 row">
              <label for="inputPassword" class="col-sm-2 col-form-label"
                >Password</label
              >
              <div class="col-sm-10">
                <input
                  type="password"
                  class="form-control"
                  id="inputPassword"
                  placeholder="Enter Password"
                  v-model="password"
                />
              </div>
            </div>
            <div class="row">
              <a class="text-center text-primary" href="/register">New User? Register Now</a>
            </div><br />
            <div class="row d-grid gap-2">
              <button class="btn btn-primary" type="submit">
                <i class="fas fa-sign-in-alt"></i> Confirm Identity
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "LoginForm",
  data() {
    return {
      username: "",
      password: "",
    };
  },
  component: {},
  methods: {
    loginSubmit(e) {
      e.preventDefault();
      if (!this.username) {
        alert("Please Enter Username");
        return;
      }
      if (!this.password) {
        alert("Please Enter Password");
        return;
      }
      const userData = {
          username: this.username,
          masterPassword: this.password
      }
      console.log(userData);
      this.$emit('login-user', userData)
    },
  },
};
</script>