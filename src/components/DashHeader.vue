<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <div class="container-fluid">
      <a class="navbar-brand" href="#"
        ><i class="fas fa-user-shield"></i> {{ title }}</a
      >
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
            <router-link to="/dashboard" class="nav-link active"
              >My Passwords</router-link
            >
          </li>
          <li class="nav-item">
            <router-link to="/about" class="nav-link active">About</router-link>
          </li>
        </ul>
        <ul class="navbar-nav ms-auto">
          <li class="nav-item dropdown">
            <a
              class="nav-link dropdown-toggle"
              href="#"
              id="navbarDropdown"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Welcome <b>{{ user.name }}</b>
            </a>
            <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
              <li>
                <a
                  class="dropdown-item"
                  href="#"
                  data-bs-toggle="modal"
                  data-bs-target="#profileModal"
                  ><i class="fas fa-user" /> Profile</a
                >
              </li>
              <li>
                <a
                  class="dropdown-item"
                  href="#"
                  data-bs-toggle="modal"
                  data-bs-target="#changePasswordModal"
                  ><i class="fas fa-lock" /> Change Password</a
                >
              </li>
              <li><hr class="dropdown-divider" /></li>
              <li>
                <router-link to="/logout" class="dropdown-item text-danger"
                  ><i class="fas fa-sign-out-alt"></i> Logout</router-link
                >
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  <div
    class="modal fade"
    id="profileModal"
    tabindex="-1"
    aria-labelledby="profileModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="profileModalLabel">My Profile</h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body">
          <div class="row">
            <label for="id" class="col-3 form-label">User ID:</label>
            <input
              type="text"
              name="id"
              id="id"
              class="form-control col"
              readonly
              :value="user._id"
            />
          </div>
          <br />
          <div class="row">
            <label for="username" class="col-3 form-label">Username</label>
            <input
              type="text"
              name="username"
              id="username"
              class="form-control col"
              readonly
              :value="user.username"
            />
          </div>
          <br />
          <div class="row">
            <label for="name" class="col-3 form-label">Name</label>
            <input
              type="text"
              name="name"
              id="name"
              class="form-control col"
              readonly
              :value="user.name"
            />
          </div>
          <br />
        </div>
        <div class="modal-footer">
          <button
            type="button"
            class="btn btn-secondary"
            data-bs-dismiss="modal"
          >
            <i class="fas fa-times" /> Close
          </button>
        </div>
      </div>
    </div>
  </div>
  <div
    class="modal fade"
    id="changePasswordModal"
    tabindex="-1"
    aria-labelledby="changePasswordModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="changePasswordModalLabel">
            Change Password
          </h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body">
          <form @submit="changePwd">
            <div class="row">
              <label for="oldPassword" class="form-label col-4"
                >Current Password</label
              >
              <input
                type="password"
                name="oPassword"
                id="oldPassword"
                class="form-control col"
                placeholder="Enter Current Password"
                v-model="oPass"
              />
            </div>
            <br />
            <div class="row">
              <label for="newPassword" class="form-label col-4"
                >New Password</label
              >
              <input
                type="password"
                name="nPassword"
                id="newPassword"
                class="form-control col"
                placeholder="Enter New Password"
                v-model="nPass"
              />
            </div>
            <div class="row modal-footer">
              <button type="submit" class="btn btn-primary">
                <i class="fas fa-redo" /> Change Password
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "DashHeader",
  components: {},
  props: {
    title: String,
  },
  data() {
    return {
      user: {},
      oPass: "",
      nPass: "",
    };
  },
  methods: {
    changePwd(e) {
      e.preventDefault();
      const headers = {
        "auth-token": localStorage.getItem("authToken"),
      };
      const data = {
        currentPassword: this.oPass,
        password1: this.nPass,
      };
      if (
        confirm(
          "If you change your password you will lose all your stored passwords"
        )
      ) {
        axios
          .put("http://localhost:5000/api/user/changePassword", data, {
            headers: headers,
          })
          .then((response) => {
            if (response.status === 200) alert("Password Change Successful");
            window.location.reload();
          })
          .catch((error) => {
            alert(`Error: ${error.response.data.error}`);
          });
      }
    },
  },
  created() {
    const headers = {
      "auth-token": localStorage.getItem("authToken"),
    };
    axios
      .get("http://localhost:5000/api/user/profile", { headers: headers })
      .then((response) => {
        this.user = response.data;
      })
      .catch((error) => {
        alert(`Error: ${error.response.data}`);
      });
  },
};
</script>