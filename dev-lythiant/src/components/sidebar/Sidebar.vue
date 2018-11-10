<template>
  <div class="sidebar" id="sidebar">
    <div class="row">
      <div class="sidebar-search-box">
        <div class="input-group">
          <input type="text" class="form-control" placeholder="Search..." aria-describedby="basic-addon1">
          <button class="input-group-addon" id="basic-addon1" type="submit">
            <i class="fas fa-search"></i>
          </button>
        </div>
      </div>
    </div>
    <hr>
    <div class="row">
      <div class="sidebar-category">
        <div class="category">
          <div>
            <h3>CATEGORY</h3>
          </div>
        </div>
        <div class="category-item">
          <div class="items">
            <ul>
              <li><a href="">Redis</a></li>
              <li><a href="">Elasticsearch</a></li>
              <li><a href="">Java</a></li>
              <li><a href="">Apache</a></li>
              <li><a href="">Nginx</a></li>
              <li><a href="">Linux</a></li>
              <li><a href="">Framework</a></li>
              <li><a href="">Java core</a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Sidebar',
  data() {
    return {

    };
  },
  method() {

  }
};

</script>
<style scoped>
@import "./Sidebar.css";

</style>
