<template>
    <div class="card">
      <div class="card-header text-center">ID: {{ pwd._id }}</div>
      <div class="card-body">
        <h5 class="card-title text-center">{{ pwd.label }}</h5>
        <p class="card-text text-center">
          <b>URL: </b> <a href="#">{{ pwd.url }}</a>
        </p>
        <p class="card-text" id="para2">
            <div class="row">
                <label for="password" class="col text-center form-label">Password</label>
            </div>
            <div class="row">
              <input type="password" readonly class="col text-center form-control-plaintext" :id="'pwd_'+pwd._id" :value="pwd.password" />
            </div>
            <div class="row">
              <i class="col form-control-plaintext text-center fas fa-eye" @dblclick="hidePassword" @click="getPassword" :id="pwd._id" />
              <i class="col form-control-plaintext text-center text-primary fas fa-copy" @click="copyPwd" :id="pwd._id+'_copy'" />
              <i class="col form-control-plaintext text-center text-success fas fa-edit" @click="disp" :id="pwd._id+'_edit'" />
              <i class="col form-control-plaintext text-center text-danger fas fa-trash" @click="deletePwd" :id="pwd._id+'_delete'" />
            </div><br />
            <div class="row" style="display: none;" :id="pwd._id+'_editForm'" aria-hidden="true">
              <form :id="pwd._id+'_frm'" @submit="editPwd">
                <div class="row">
                  <input type="password" name="nPassword" class="form-control col" v-model="nPass" placeholder="New Password">
                  <button type="submit" class="col-3 btn btn-success ms-1"><i class="fas fa-save" /> Save</button>
                </div>
              </form>
            </div>
        </p>
      </div>
    </div>
</template>

<script>
import axios from "axios";
export default {
  name: "Password",
  props: {
    pwd: Object,
  },
  components: {},
  methods: {
    getPassword(e) {
      if (e.target.id.search("_hide") != -1) {
        return this.hidePassword(e);
      }
      const headers = {
        "auth-token": localStorage.getItem("authToken"),
      };
      axios
        .get("http://localhost:5000/api/password/" + e.target.id, {
          headers: headers,
        })
        .then((response) => {
          let ipt = document.getElementById("pwd_" + e.target.id);
          ipt.type = "text";
          ipt.value = response.data.password;
          let btn = document.getElementById(e.target.id);
          e.target.id = e.target.id + "_hide";
          btn.classList.replace("fa-eye", "fa-eye-slash");
        })
        .catch((error) => {
          alert(`Error: ${error.response.data}`);
        });
    },
    hidePassword(e) {
      e.target.id = e.target.id.replace("_hide", "");
      let ipt = document.getElementById("pwd_" + e.target.id);
      ipt.type = "password";
      ipt.value = this.pwd.password;
      let btn = document.getElementById(e.target.id);
      btn.classList.replace("fa-eye-slash", "fa-eye");
    },
    copyPwd(e) {
      const pwID = e.target.id.replace("_copy", "");
      console.log(pwID);
      const headers = {
        "auth-token": localStorage.getItem("authToken"),
      };
      axios
        .get("http://localhost:5000/api/password/" + pwID, {
          headers: headers,
        })
        .then((response) => {
          var el = document.createElement("textarea");
          el.value = response.data.password;
          el.setAttribute("readonly", "");
          el.style = { position: "absolute", left: "-9999px" };
          document.body.appendChild(el);
          el.select();
          document.execCommand("copy");
          document.body.removeChild(el);
          alert("Password Copied");
        })
        .catch((error) => {
          alert(`Error: ${error.response.data}`);
        });
    },
    editPwd(e) {
      const pwID = e.target.id.replace("_frm", "");
      const headers = {
        "auth-token": localStorage.getItem("authToken"),
      };
      const data = {
        password: this.nPass,
      };
      axios
        .put("http://localhost:5000/api/password/" + pwID, data, {
          headers: headers,
        })
        .then((response) => {
          if (response.status === 204) {
            alert("Password Changed");
          } else {
            alert(`Error: ${response.data.error}`);
          }
        })
        .catch((error) => {
          alert(`${error}`);
        });
    },
    disp(e) {
      var x = document.getElementById(
        e.target.id.replace("_edit", "_editForm")
      );
      if (x.style.display === "none") {
        x.style.display = "block";
      } else {
        x.style.display = "none";
      }
    },
    deletePwd(e) {
      const pwID = e.target.id.replace("_delete", "");
      const headers = {
        "auth-token": localStorage.getItem("authToken"),
      };
      axios
        .delete("http://localhost:5000/api/password/" + pwID, {
          headers: headers,
        })
        .then((response) => {
          if (response.status === 204) {
            alert("Password Deleted");
            window.location.reload();
          } else {
            alert(`Error: ${response.data}`);
          }
        })
        .catch((error) => {
          alert(`Error: ${error.response.data}`);
        });
    },
  },
  data() {
    return {
      nPass: "",
    };
  },
};
</script>
