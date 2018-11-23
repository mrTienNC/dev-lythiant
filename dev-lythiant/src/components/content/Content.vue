<template>
  <div class="content" id="content">
    <div class="container">
      <div class="row main-content">
        <div class="col-md-9 col-lg-9 col-sm-12 col-xs-12">
          <router-view name="timeline"></router-view>
          <router-view name="buzz"></router-view>
        </div>
        <div class="col-md-3 col-lg-3 col-sm-12 col-xs-12">
          <Sidebar />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Timeline from "../timeline/Timeline.vue";
import Sidebar from "../sidebar/Sidebar.vue";
import Buzz from "../buzz/Buzz.vue";

export default {
  name: "Content",
  components: {
    Timeline,
    Sidebar,
    Buzz
  },
  data() {
    return {};
  }
};
</script>
<style scoped>
@import "./Content.css";
</style>
