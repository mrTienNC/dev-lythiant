<template>
  <header class="menu">
    <div class="container">
      <div class="row">
        <div class="col-md-2 col-lg-2 col-sm-12 col-xs-12">
          <div class="menu-logo">
            <a class="navbar-brand" href="/">
    			<img src="../../assets/logo.png" height="50" width="50" alt="Logo">
    			<span>Dev.Lythiant</span>
    		</a>
          </div>
        </div>
        <div class="col-md-10 col-lg-10 col-sm-12 col-xs-12">
          <div class="menu-item">
            <ul>
              <li><a href="">Home</a></li>
              <li><a href="">Home</a></li>
              <li><a href="">Home</a></li>
              <li class="dropdown">
                <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">
                  Dropdown 
                  <span class="caret"></span></a>
                <ul class="dropdown-menu">
                  <li><a href="">Dropdown</a></li>
                  <li><a href="">Dropdown</a></li>
                  <li><a href="">Dropdown</a></li>
                  <li><a href="">Dropdown</a></li>
                </ul>
              </li>
              <li><a href="">Home</a></li>
              <li><a href="">Home</a></li>
              <li><a href="">Home</a></li>
              <li class="dropdown">
                <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">
                	Dropdown 
                	<span class="caret"></span></a>
                <ul class="dropdown-menu">
                  <li><a href="">Dropdown</a></li>
                  <li><a href="">Dropdown</a></li>
                  <li><a href="">Dropdown</a></li>
                  <li><a href="">Dropdown</a></li>
                </ul>
              </li>
              <li><a href="">Home</a></li>
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
