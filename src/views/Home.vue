<template>
  <main class="container mx-auto py-6">
    <HomeSkeleton v-if="loading" />
    <div v-else>
      <!-- hero section -->
      <HeroSection />

      <!-- Sharerecipe section -->
      <ShareRecipe />

      <!-- Trending recipe section -->
      <TrendingRecipe />

      <!-- Blog section -->
      <BlogSection />
    </div>
  </main>
</template>

<script>
import HeroSection from "../components/home/HeroSection.vue";
import ShareRecipe from "../components/home/ShareRecipe.vue";
import TrendingRecipe from "../components/home/TrendingRecipe.vue";
import BlogSection from "../components/home/BlogSection.vue";
import HomeSkeleton from "@/components/skeleton/HomeSkeleton.vue";

export default {
  components: {
    HeroSection,
    BlogSection,
    ShareRecipe,
    HomeSkeleton,
    TrendingRecipe,
  },
  data() {
    return {
      loading: true,
    };
  },

  mounted() {
    setTimeout(() => {
      this.loading = false;
    }, 500);
  },
};
</script>
