<template>
    <div>
        <div class="dashboard-menu">
            <div class="dashboard-menu-header">
                <img src="../../../assets/logo.png" width="50" height="50" alt="Logo" class="img img-responsesive">
                <h3>Dashboard</h3>
            </div>
            <div class="dashboard-menu-item">
                <ul>
                    <li>
                        <a href="/buzz">Post</a>
                    </li>
                    <li>
                        <a href="/statistic">Statistic</a>
                    </li>
                    <li>
                        <a href="#">Activity</a>
                    </li>
                    <li>
                        <a href="#">Activity</a>
                    </li>
                    <li>
                        <a href="#">Activity</a>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>
<script>
export default {
  name: "menu",
  data() {
    return {};
  },
  methods: {}
};
</script>
<style scoped>
@import "./Menu.css";
</style>
