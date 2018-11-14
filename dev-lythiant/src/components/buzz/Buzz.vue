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
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                 when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
                 It has survived not only five centuries, but also the leap into electronic typesetting, 
                 remaining essentially unchanged. It was popularised in the 1960s with the release of 
                 Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing 
                 software like Aldus PageMaker including versions of Lorem Ipsum.</p>
            </div>
        </div>
        <div class="row">
          <div class="form-comment">
             <div class="form-group">
                <label for="email">Email</label>
                <input type="text" class="form-control" placeholder="Email..." id="email">
              </div>
              <div class="form-group">
                <label for="name">Name</label>
                <input type="text" class="form-control" placeholder="Name..." id="name">
              </div>
              <div class="form-group">
                <label for="comment">Comment</label> <br>
                <textarea name="comment" id="comment" cols="50" rows="5" placeholder="Comment..."></textarea>
              </div>
              <button class="btn btn-primary">Send</button>
          </div>
        </div>
          <div class="row">
            <div class="comment-list">
              <div class="row">
                <div class="col-md-2 col-lg-2 col-sm-12 col-xs-12">
                  <div class="comment-infor">
                    <a href="#">
                      <img src="../../assets/avatar.jpg" alt="avatar" class="img img-responsesive img-circle">
                      <p>Fox name</p>
                    </a>
                  </div>
                </div>
                <div class="col-md-10 col-lg-10 col-sm-12 col-xs-12">
                  <div class="comment-text">
                  
                  </div>
                </div>
              </div>
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
