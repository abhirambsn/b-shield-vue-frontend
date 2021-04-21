<template>
  <div class="container">
    <div class="row">
      <h1 class="col display-4 text-center">My Passwords</h1>
      <button
        class="col-1 btn btn-primary"
        data-bs-toggle="modal"
        data-bs-target="#addModal"
      >
        <i class="fas fa-plus" /> Add Password
      </button>
    </div>
    <br />
    <Passwords :passwords="passwords" />
    <!-- Modals -->
    <div
      class="modal fade"
      id="addModal"
      tabindex="-1"
      aria-labelledby="addModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="addModalLabel">Store Password</h5>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div class="modal-body">
            <form @submit="onAdd">
              <div class="row">
                <div class="col-3">
                  <label for="label" class="form-label">Title</label>
                </div>
                <div class="col-9">
                  <input
                    type="text"
                    name="label"
                    id="label"
                    class="form-control"
                    placeholder="Enter Label"
                    v-model="label"
                  />
                </div>
              </div>
              <br />
              <div class="row">
                <div class="col-3">
                  <label for="url" class="form-label">URL</label>
                </div>
                <div class="col-9">
                  <input
                    type="text"
                    name="url"
                    id="url"
                    class="form-control"
                    placeholder="Enter URL"
                    v-model="url"
                  />
                </div>
              </div>
              <br />
              <div class="row">
                <div class="col-3">
                  <label for="password" class="form-label">Password</label>
                </div>
                <div class="col-9">
                  <input
                    type="password"
                    name="password"
                    id="password"
                    class="form-control"
                    placeholder="Enter Password"
                    v-model="password"
                  />
                </div>
              </div>
              <br />
              <div class="row modal-footer">
                <button
                  class="col-4 ms-auto me-3 btn btn-primary"
                  type="submit"
                >
                  <i class="fas fa-plus" /> Store Password
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import Passwords from "./Passwords";
export default {
  name: "DashboardComponent",
  components: {
    Passwords,
  },
  props: {},
  methods: {},
  data() {
    return {
      passwords: [],
      label: "",
      url: "",
      password: "",
    };
  },
  methods: {
    onAdd(e) {
      e.preventDefault();
      if (!this.label) {
        alert("Enter a valid Label");
        return;
      }
      if (!this.url) {
        alert("Enter a valid URL");
        return;
      }
      if (!this.password) {
        alert("Enter a Password");
        return;
      }
      const pwData = {
        label: this.label,
        url: this.url,
        password: this.password,
      };
      const headers = {
        "auth-token": localStorage.getItem("authToken"),
      };
      axios
        .post("http://localhost:5000/api/password/", pwData, {
          headers: headers,
        })
        .then((response) => {
          if (response.status === 201) {
            alert("Password Stored");
            window.location.reload();
          } else {
            alert(`Warning: ${response.data}`);
          }
        })
        .catch((error) => {
          alert(`Error: ${error.response.data}`);
        });
    },
  },
  created() {
    const headers = {
      "auth-token": localStorage.getItem("authToken"),
    };
    axios
      .get("http://localhost:5000/api/password/", { headers: headers })
      .then((response) => {
        this.passwords = response.data;
        console.log(response.data);
      })
      .catch((error) => {
        alert(`Error: ${error.response.data}`);
      });
  },
};
</script>