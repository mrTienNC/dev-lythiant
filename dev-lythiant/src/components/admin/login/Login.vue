<template>
    <div id="login" class="login">
        <div class="container">
          <div class="form-login">
            <form action="post" role="login">
              <div class="form-title">
                <h2>Admin Login</h2>
              </div>
              <div class="form-group">
                <label for="username">User name</label>
                <input type="text" class="form-control" id="username" aria-describedby="userName" placeholder="Enter user name" v-model="user.username">
              </div>
              <div class="form-group">
                <label for="password">Password</label>
                <input type="password" class="form-control" id="password" placeholder="Password" v-model="user.password">
              </div>
              <button class="btn btn-primary" @click="login">Login</button>
            </form>
          </div>
        </div>
    </div>
</template>
<script>
import md5 from "../../../services/md5.js";
import api from "../../../services/api/login.js";
import cookie from "../../../services/cookie.js";

export default {
  name: "Login",
  data() {
    return {
      user: {
        username: "",
        password: ""
      }
    };
  },
  methods: {
    login() {
      // this.user.password = md5.convertMD5(this.user.password);
    },
    //   api
    //     .login("admin/v1/sessions", this.user)
    //     .then(response => {
    //       cookie.setCookie("token", response.token);
    //       localStorage.setItem("userName", response.data.username);
    //       this.direction();
    //     })
    //     .catch(err => {});
    // },
    direction() {
      // this.$route.replace("/");
    }
  }
};
</script>
<style>
@import "./Login.css";
</style>

