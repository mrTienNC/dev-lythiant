<template>
    <div class="dashboard" id="dashboard">
        <div class="header">
            <div class="header-icon">
                <ul>
                    <li>
                        <a href="#"><i class="fas fa-user"></i></a>
                    </li>
                    <li>
                        <a href="#"><i class="fas fa-shield-alt"></i></a>
                    </li>
                    <li>
                        <a href="#"><i class="fas fa-sign-out-alt"></i></a>
                    </li>
                </ul>
            </div>
        </div>
        <div class="col-md-2 col-lg-2 col-sm-12 col-xs-12">
            <Menu />
        </div>
        <div class="col-md-10 col-lg-10 col-sm-12 col-xs-12">
            
        </div>
    </div>
</template>
<script>
import Menu from "../menu/Menu";
export default {
  name: "Dashboard",
  components: {
    Menu
  },
  data() {
    return {};
  }
};
</script>
<style scoped>
@import "./Dashboard.css";
</style>

