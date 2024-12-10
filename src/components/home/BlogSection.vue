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
        <!-- blog card content display -->
        <article
          v-for="article in filteredArticles"
          class="rounded-lg shadow-lg"
        >
          <router-link
            :to="{ name: 'BlogDetails', params: { slug: article.slug } }"
            :key="article.id"
          >
            <div class="image__wrapper rounded-t-md overflow-hidden">
              <img
                class="w-full h-[250px] image__animate"
                :src="article.image"
                alt="favorite"
              />
            </div>

            <div class="px-6 py-4">
              <h5 class="text-center">
                {{ article.title }}
              </h5>
              <p class="text-justify">
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

export default {
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
