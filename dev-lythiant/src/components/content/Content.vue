<template>
  <div class="content" id="content">
    <div class="container">
      <div class="row main-content">
        <div class="col-md-9 col-lg-9 col-sm-12 col-xs-12">
          <News />
        </div>
        <div class="col-md-3 col-lg-3 col-sm-12 col-xs-12">
          <Sidebar />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import News from "../news/News.vue";
import Sidebar from "../sidebar/Sidebar.vue";

export default {
  name: 'Content',
  components: {
    News,
    Sidebar
  },
  data() {
    return {

    }
  }
};

</script>
<style scoped>
@import "./Content.css";
</style>
