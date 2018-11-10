<template>
  <div class="news" id="news">
    <div class="container-fluid">
      <div class="timeline-news">
        <div class="row">
          <div class="col-md-3 col-lg-3 col-sm-12 col-xs-12">
            <div class="buzz-image">
              <a href="#">
              <img src="../../assets/logo.png" height="150" width="150" alt="">
            </a>
            </div>
          </div>
          <div class="col-md-9 col-lg-9 col-sm-12 col-xs-12">
            <div class="buzz-timeline">
              <div class="buzz-title">
                <h1>
              <a href="">What does the fox say !</a>              
            </h1>
                <div class="buzz-meta-title">
                  <p>
                    <span>Posted on</span>
                    <span> 2018/09/11 </span>
                    <span> by </span>
                    <span><a href="">John Roman</a></span>
                  </p>
                </div>
              </div>
              <div class="buzz-content">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged <br>
                <span><a href="">Read more...</a></span>
              </div>
              <div class="buzz-meta-footer">
                <p>
                  <span>Posted in </span>
                  <span><a href="">Fox</a></span>
                  <span> tagged </span>
                  <span> fox, foxy, foxes</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'News',
  data() {
    return {

    }
  }
};

</script>
<style scoped>
@import "./News.css";

</style>
