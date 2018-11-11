<template>
    <div>
        <Menu/>
        <div class="container">
            <div class="profile" id="profile">
                <div class="row">
                    <div class="profile-title">
                        <h3>About me</h3>
                    </div>
                </div>
                <div class="row">
                    <div class="profile-person">
                        <div class="col-md-3 col-lg-3 col-sm-12 col-xs-12">
                            <div class="profile-avatar">
                                <img src="../../assets/avatar.jpg" alt="Avatar" class="img img-responsive">
                            </div>
                            <div class="profile-link">
                                <ul>
                                    <li><a href="https://www.facebook.com/tienptit" target="_blank"><i class="fab fa-facebook"></i></a></li>
                                    <li><a href="https://www.quora.com/profile/Ti%E1%BA%BFn-Nguy%E1%BB%85n-Ch%C3%AD-2" target="_blank"><i class="fab fa-quora"></i></a></li>
                                    <li><a href="https://github.com/mrTienNC/" target="_blank"><i class="fab fa-github"></i></a></li>
                                    <li><a href="https://twitter.com/HocSinhNgheo" target="_blank"><i class="fab fa-twitter"></i></a></li>
                                    <li><a href="#" target="_blank"><i class="fas fa-file-download"></i></a></li>
                                </ul>
                            </div>
                        </div>
                        <div class="col-md-9 col-lg-9 col-sm-12 col-xs-12">
                            <div class="profile-info">
                                <div class="profile-name">
                                    <h3>Personal information</h3>
                                    <ul>
                                        <li><span>Full Name : </span>Nguyễn Chí Tiến</li>
                                        <li><span>Gender : </span>Male</li>
                                        <li><span>Email : </span>tiennc16297ptit@gmail.com</li>
                                        <li><span>Skype : </span>chitien16297@outlook.com</li>
                                    </ul>
                                </div>
                                <div class="profile-education">
                                    <h3>Education</h3>
                                    <ul>
                                        <li>Post And Telecommunication Institute of Technology</li>
                                    </ul>
                                </div>
                                <div class="profile-skill">
                                    <h3>Skills</h3>
                                    <ul>
                                        <li>Java</li>
                                        <li>Spring</li>
                                        <li>Javascript</li>
                                        <li>Databases : MongoDB, MySQL...</li>
                                    </ul>
                                </div>
                                <div class="contact-me">
                                    <form action="#" method="post" id="form-contact">
                                        <legend>Contact</legend>
                                        <div class="form-group">
                                            <label for="email">Email</label>
                                            <input type="email" class="form-control" id="email" placeholder="Enter email...">
                                        </div>
                                        <div class="form-group">
                                            <label for="name">Name</label>
                                            <input type="text" class="form-control" id="name" placeholder="Enter name...">
                                        </div>
                                        <div class="form-group">
                                            <label for="comment">Comment</label>
                                            <textarea name="comment" class="form-control" id="comment" cols="50" rows="10"></textarea>
                                        </div>
                                        <button class="btn btn-primary" type="submit"><i class="fas fa-paper-plane"></i>Send</button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import Menu from "../menu/Menu.vue";

export default {
  name: "Profile",
  components: {
    Menu
  },
  data() {
    return {};
  }
};
</script>
<style>
@import "./Profile.css";
</style>


