<template>
  <section v-for="blog in data" class="section__wrapper">
    <!-- page navigation-->
    <div>home / blog / {{ blog.title }}</div>

    <!-- blog head -->
    <div class="space-y-4 py-6 border-b">
      <!-- Blog title -->
      <div class="text-3xl md:text-4xl font-semibold">
        {{ blog.title }}
      </div>

      <!-- author & date -->
      <div>
        <div class="flex items-center">
          <div
            v-for="(item, index) in blogInfoSummary"
            :key="index"
            class="flex items-center w-1/2 md:w-1/4 gap-x-2 text-sm"
          >
            <font-awesome-icon class="text-accent" :icon="item.icon" />
            <span>{{ blog[item.name] }}</span>
          </div>
        </div>
      </div>
    </div>

    <!-- blog body -->
    <div class="grid grid-cols-1 md:grid-cols-5 gap-x-6">
      <!-- main content -->
      <div class="col-span-1 md:col-span-3 space-y-4">
        <article class="space-y-4">
          <!-- blog image -->
          <div class="image__wrapper h-[400px]">
            <img class="w-full" :src="blog.image" alt="blog_thumbnail" />
          </div>
          <!-- blog excerpt -->
          <p class="font-medium">{{ blog.excerpt }}</p>
          <div class="space-y-4">
            <!-- blog paragraph -->
            <p
              v-for="(text, index) in blog.content"
              :key="index"
              class="text-justify"
            >
              {{ text }}
            </p>
          </div>
          <!-- blog tags -->
          <div class="flex items-center gap-x-2">
            <h6>Tags :</h6>
            <div
              v-for="(tag, index) in blog.tags"
              :key="index"
              class="py-1 px-2 border rounded-md text-sm"
            >
              {{ tag }}
            </div>
          </div>
        </article>

        <!-- another related blog -->
        <div class="grid grid-cols-2 gap-4">
          <div
            v-for="(relatedBlog, index) in relatedBlogs"
            :key="index"
            class="related-blog"
          >
            <div class="image__wrapper">
              <img :src="relatedBlog.image" alt="another_blog" />
            </div>
            <h6 class="font-bold">{{ relatedBlog.title }}</h6>
          </div>
        </div>
      </div>

      <!-- aside content -->
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
    return {
      blogInfoSummary,
      data: [],
      articles,
      relatedBlogs: [],
      loading: true,
    };
  },
  methods: {
    fetchBlogById(id) {
      setTimeout(() => {
        const result = this.articles.find((item) => item.id === parseInt(id));
        this.data = result ? [result] : [];
        this.relatedBlogs = this.fetchRelatedBlogs(parseInt(id));
        this.loading = false;
      }, 500);
    },
    fetchRelatedBlogs(currentBlogId) {
      return this.articles.filter((article) => article.id !== currentBlogId);
    },
  },

  mounted() {
    this.fetchBlogById(this.$route.params.id);
  },
};
</script>
