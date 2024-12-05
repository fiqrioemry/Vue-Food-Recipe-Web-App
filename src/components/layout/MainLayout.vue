<script>
import Navbar from "../Navbar.vue";
export default {
  components: {
    Navbar,
  },
};
</script>

<template>
  <main>
    <Navbar />
    <div>
      <router-view />
    </div>
  </main>
</template>
