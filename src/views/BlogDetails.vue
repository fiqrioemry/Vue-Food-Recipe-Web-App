<template>
  <section v-if="blog.length" class="section__wrapper">
    <!-- page navigation-->
    <div>home / blog / {{ blog[0].title }}</div>

    <!-- blog head -->
    <div class="space-y-4 py-6 border-b">
      <!-- Blog title -->
      <div class="text-3xl md:text-4xl font-semibold">
        {{ blog[0].title }}
      </div>

      <!-- Blog Author & date -->
      <div>
        <div class="flex items-center">
          <div
            v-for="(item, index) in blogInfoSummary"
            :key="index"
            class="flex items-center w-1/2 md:w-1/4 gap-x-2 text-sm"
          >
            <font-awesome-icon class="text-accent" :icon="item.icon" />
            <span>{{ blog[0][item.name] }}</span>
          </div>
        </div>
      </div>
    </div>

    <!-- blog body -->
    <div class="grid grid-cols-1 md:grid-cols-5 gap-x-6">
      <!-- main content -->
      <article class="col-span-1 md:col-span-3 space-y-4">
        <div class="image__wrapper h-[400px]">
          <img class="w-full" :src="blog[0].image" alt="blog_thumbnail" />
        </div>
        <p class="font-medium">{{ blog[0].excerpt }}</p>
        <div class="space-y-4">
          <p v-for="(paragraph, index) in formattedContent" :key="index">
            {{ paragraph }}
          </p>
        </div>
        <div class="flex items-center gap-x-2">
          <h6>Tags :</h6>
          <div
            v-for="(tag, index) in blog[0].tags"
            :key="index"
            class="py-1 px-2 border rounded-md text-sm"
          >
            {{ tag }}
          </div>
        </div>
      </article>

      <!-- side content -->
      <aside></aside>
    </div>
  </section>
</template>

<script>
import articles from "@/config/blog.json";
import { blogInfoSummary } from "@/config";

export default {
  name: "BlogDetails",
  props: ["id"],

  data() {
    return { blogInfoSummary, blog: [], articles, loading: true };
  },
  methods: {
    fetchBlogById(id) {
      setTimeout(() => {
        const data = this.articles.filter((item) => item.id === parseInt(id));
        this.blog = data;
        this.loading = false;
      }, 500);
    },
  },
  computed: {
    formattedContent() {
      if (this.blog.length === 0) return [];
      return this.blog[0].content
        .split("\n")
        .filter((paragraph) => paragraph.trim() !== "");
    },
  },
  mounted() {
    this.fetchBlogById(this.$route.params.id);
  },
};
</script>
