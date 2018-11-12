<template>
  <header class="menu">
    <div class="container">
      <div class="row">
        <div class="col-md-1 col-lg-1 col-sm-12 col-xs-12">
          <div class="menu-logo">
            <a class="navbar-brand" href="/">
    			<img src="../../assets/logo.png" height="50" width="50" alt="Logo">
    			<span>Dev.Lythiant</span>
    		</a>
          </div>
        </div>
        <div class="col-md-11 col-lg-11 col-sm-12 col-xs-12">
          <div class="menu-item">
            <ul>
              <li><a href="/">Trang chủ</a></li>
              <li>
                <a href="/">Java core</a>
              </li>
              <li><a href="/">OOP</a></li>
               <li class="dropdown">
                <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">
                	Spring
                	<span class="caret"></span></a>
                <ul class="dropdown-menu">
                  <li><a href="/">Spring Core</a></li>
                  <li><a href="/">Spring MVC</a></li>
                  <li><a href="/">Spring Boot</a></li>
                  <li><a href="/">Spring Security</a></li>
                  <li><a href="/">Spring Hihernate</a></li>
                  <li><a href="/">Spring Data</a></li>
                </ul>
              </li>
              <li><a href="">Hibernate</a></li>
              <li class="dropdown">
                <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">
                  Javascript
                  <span class="caret"></span></a>
                <ul class="dropdown-menu">
                  <li><a href="">Core JS</a></li>
                  <li><a href="">Angular.js</a></li>
                  <li><a href="">React.js</a></li>
                  <li><a href="">Vue.js</a></li>
                </ul>
              </li>
              <li><a href="">Design pattern</a></li>
              <li><a href="">MongoDB</a></li>
              <li><a href="/about">About</a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>
<script>
export default {
  name: "Menu",
  data() {
    return {};
  }
};
</script>
<style scoped>
@import "./Menu.css";
</style>
