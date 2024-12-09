<template>
  <main>
    <Header />
    <div>
      <router-view />
    </div>
    <Footer />
  </main>
</template>

<script>
import Header from "../common/Header.vue";
import Footer from "../common/Footer.vue";

export default {
  components: {
    Header,
    Footer,
  },
};
</script>
