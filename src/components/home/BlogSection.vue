<template>
  <section class="section__wrapper">
    <!-- section head -->
    <div class="flex items-center justify-between">
      <h4>Blog</h4>
      <router-link to="/blog" class="text-accent font-semibold"
        >View more</router-link
      >
    </div>

    <div>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-6">
        <!-- blog card loading ui -->
        <BlogCard v-if="loading" v-for="i in 2" :key="i" />

        <!-- blog card content display -->
        <article
          v-else
          v-for="article in filteredArticles"
          class="rounded-lg shadow-lg"
        >
          <router-link
            :to="{ name: 'BlogDetails', params: { id: article.id } }"
            :key="article.id"
          >
            <div class="image__wrapper overflow-hidden">
              <img
                class="rounded-t-md w-full image__animate"
                src="@/assets/blog.png"
                alt="favorite"
              />
            </div>

            <div class="px-6 py-4">
              <h5 class="text-center">
                {{ article.title }}
              </h5>
              <p class="text-secondary text-justify">
                {{ article.excerpt }}
              </p>
            </div>
          </router-link>
        </article>
      </div>
    </div>

    <!-- section content -->
  </section>
</template>

<script>
import articles from "@/config/blog.json";
import BlogCard from "../skeleton/BlogCard.vue";

export default {
  components: {
    BlogCard,
  },
  data() {
    return {
      articles,
      filteredArticles: [],
      loading: true,
    };
  },
  mounted() {
    setTimeout(() => {
      this.filteredArticles = this.articles.filter((article) =>
        [1, 2].includes(article.id)
      );
      this.loading = false;
    }, 500); //
  },
};
</script>
