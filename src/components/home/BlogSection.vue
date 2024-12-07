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
    }, 1500); //
  },
};
</script>

<template>
  <section class="section__wrapper">
    <!-- section head -->
    <div class="flex items-center justify-between">
      <h4>Blog</h4>

      <button class="text-accent font-semibold">View more</button>
    </div>

    <div>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-6">
        <div
          v-if="loading"
          v-for="i in 2"
          class="w-full h-[400px] bg-slate-200 rounded-md animate-pulse flex items-center justify-center"
        >
          LOADING ARTICLES ....
        </div>

        <article
          v-else
          v-for="article in filteredArticles"
          class="rounded-lg shadow-lg"
        >
          <div class="image__wrapper">
            <img
              class="rounded-t-md w-full"
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
        </article>
      </div>
    </div>

    <!-- section content -->
  </section>
</template>
