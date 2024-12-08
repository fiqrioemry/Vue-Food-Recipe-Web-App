<template>
  <main class="container mx-auto">
    <!-- hero section -->
    <HeroSection />

    <!-- Sharerecipe section -->
    <ShareRecipe />

    <!-- Trending recipe section -->
    <TrendingRecipe />

    <!-- Blog section -->
    <BlogSection />
  </main>
</template>

<script>
import HeroSection from "../components/home/HeroSection.vue";
import ShareRecipe from "../components/home/ShareRecipe.vue";
import TrendingRecipe from "../components/home/TrendingRecipe.vue";
import BlogSection from "../components/home/BlogSection.vue";

export default {
  components: {
    HeroSection,
    ShareRecipe,
    TrendingRecipe,
    BlogSection,
  },
};
</script>
