<template>
  <div class="bg-muted">
    <Header />
    <router-view />
  </div>
</template>

<script>
import Header from "./components/Header.vue";

export default {
  components: {
    Header,
  },
};
</script>

<style>
body {
  font-family: Arial, sans-serif;
  margin: 0;
}
</style>
