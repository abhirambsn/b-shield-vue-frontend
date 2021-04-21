<template>
  <div>
    <h3 class="display-3 text-center"><i class="fas fa-user-shield"></i> B-Shield</h3>
    <br />
    <div class="container" style="width: 50%">
      <div class="card">
        <div class="card-body">
          <form @submit="registerSubmit">
            <div class="mb-3 row">
              <label for="name" class="col-sm-2 col-form-label">Name</label>
              <div class="col-sm-10">
                <input
                  type="text"
                  class="form-control"
                  id="name"
                  placeholder="Enter Name"
                  v-model="name"
                />
              </div>
            </div>
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
              <a class="text-center text-primary" href="/login">Existing User? Login Here</a>
            </div><br />
            <div class="row d-grid gap-2">
              <button class="btn btn-primary" type="submit">
                <i class="fas fa-plus"></i> Register
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
  name: "RegisterForm",
  data() {
    return {
      name: "",
      username: "",
      password: "",
    };
  },
  component: {},
  methods: {
    registerSubmit(e) {
      e.preventDefault();
      if (!this.name) {
        alert("Please Enter a valid Name");
        return;
      }
      if (!this.username) {
        alert("Please Enter Username");
        return;
      }
      if (!this.password) {
        alert("Please Enter Password");
        return;
      }
      const newUserData = {
        name: this.name,
        username: this.username,
        masterPassword: this.password,
      };
      console.log(newUserData);
      this.$emit("register-user", newUserData);
    },
  },
};
</script>