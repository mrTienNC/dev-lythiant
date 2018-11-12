<template>
    <div class="buzz" id="buzz">
      <div class="container-fluid">
        <div class="row">
          <div class="buzz-info">
            <div class="buzz-title">
              <h2>What does the fox say</h2>
            </div>
            <div class="buzz-meta-data">
              <p>Tagged :
                <span><a href="#">Fox</a></span>,
                <span><a href="#">Marvel</a></span>
              </p>
              <p>Time : <span>2018-09-11</span></p>
            </div>
          </div>
        </div>
        <div class="row">
            <div class="buzz-content">
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
            </div>
        </div>
        <h1>Buzz here</h1>
      </div>
    </div>
</template>
<script>
export default {
  name: "Buzz",
  data() {
    return {};
  },
  methods() {}
};
</script>
<style>
@import "./Buzz.css";
</style>
