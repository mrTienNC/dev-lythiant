<template>
  <div class="home">
    <Menu />
    <Content />
  </div>
</template>
<script>
// @ is an alias to /src
import Menu from '../components/menu/Menu.vue'
import Content from '../components/content/Content.vue'
export default {
  name: 'home',
  components: {
    Menu,
    Content
  }
};

</script>
<style scoped>
</style>
