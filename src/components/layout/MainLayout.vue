<script>
import Navbar from "../common/Navbar.vue";
import Footer from "../common/Footer.vue";
export default {
  components: {
    Navbar,
    Footer,
  },
};
</script>

<template>
  <main>
    <Navbar />
    <div>
      <router-view />
    </div>
    <Footer />
  </main>
</template>
