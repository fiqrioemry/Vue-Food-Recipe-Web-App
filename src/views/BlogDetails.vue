<template>
  <BlogDetailsSkeleton v-if="loading" />
  <section v-else="!loading" v-for="blog in data" class="section__wrapper">
    <!-- Page Navigation -->
    <div>home / blog / {{ blog.title }}</div>

    <!-- Blog Header -->
    <div class="space-y-4 py-6 border-b">
      <!-- Blog Title -->
      <div class="text-3xl md:text-4xl font-semibold">
        {{ blog.title }}
      </div>

      <!-- Author & Date -->
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

    <!-- Blog Body -->
    <div class="grid grid-cols-1 md:grid-cols-5 gap-x-6">
      <!-- Main Content -->
      <div class="col-span-1 md:col-span-3 space-y-4">
        <article class="space-y-4">
          <!-- Blog Image -->
          <div class="image__wrapper h-[400px]">
            <img class="w-full" :src="blog.image" alt="blog_thumbnail" />
          </div>

          <!-- Blog Excerpt -->
          <p class="font-medium">{{ blog.excerpt }}</p>

          <!-- Blog Content -->
          <div class="space-y-4">
            <p
              v-for="(text, index) in blog.content"
              :key="index"
              class="text-justify"
            >
              {{ text }}
            </p>
          </div>

          <!-- Blog Tags -->
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

        <!-- Related Blogs -->
        <h5>Related Blog</h5>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div v-for="(relatedBlog, index) in relatedBlogs" :key="index">
            <router-link
              :to="{ name: 'BlogDetails', params: { slug: relatedBlog.slug } }"
              :key="relatedBlog.id"
            >
              <div class="image__wrapper">
                <img
                  class="w-full h-[225px] image__animate"
                  :src="relatedBlog.image"
                  alt="related_blog"
                />
              </div>
              <h6 class="font-bold">{{ relatedBlog.title }}</h6>
            </router-link>
          </div>
        </div>
      </div>

      <!-- Aside Content -->
      <aside></aside>
    </div>
  </section>
</template>

<script>
import articles from "@/config/blog.json";
import { blogInfoSummary } from "@/config";
import BlogDetailsSkeleton from "@/components/skeleton/BlogDetailsSkeleton.vue";

export default {
  name: "BlogDetails",
  props: ["slug"],
  components: {
    BlogDetailsSkeleton,
  },
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
    fetchBlogBySlug(slug) {
      const currentBlog = this.articles.find((item) => item.slug === slug);
      if (currentBlog) {
        this.data = [currentBlog];
        this.relatedBlogs = this.getRelatedBlogs(slug);
      }
      setTimeout(() => {
        this.loading = false;
      }, 500);
    },
    getRelatedBlogs(currentBlogSlug) {
      const currentIndex = this.articles.findIndex(
        (article) => article.slug === currentBlogSlug
      );

      const relatedBlogs = [];
      for (let i = 1; i <= 2; i++) {
        const nextIndex = (currentIndex + i) % this.articles.length;
        relatedBlogs.push(this.articles[nextIndex]);
      }

      return relatedBlogs;
    },
  },
  watch: {
    "$route.params.slug": {
      immediate: true,
      handler(slug) {
        this.loading = true;
        this.fetchBlogBySlug(slug);
      },
    },
  },
};
</script>
