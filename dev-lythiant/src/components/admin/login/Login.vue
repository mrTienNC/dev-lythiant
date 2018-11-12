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
                <input type="text" class="form-control" id="username" aria-describedby="userName" placeholder="Enter user name">
              </div>
              <div class="form-group">
                <label for="password">Password</label>
                <input type="password" class="form-control" id="password" placeholder="Password">
              </div>
              <button class="btn btn-primary">Login</button>
            </form>
          </div>
        </div>
    </div>
</template>
<script>
export default {
  name: "Login",
  data() {
    return {};
  }
};
</script>
<style>
@import "./Login.css";
</style>

