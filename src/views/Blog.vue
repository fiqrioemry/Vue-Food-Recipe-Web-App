<template>
  <section class="bg-foreground py-6">
    <div class="container mx-auto">
      <div>home / blog</div>
      <div class="space-y-6">
        <div>
          <h3>Latest Blog</h3>
        </div>

        <!-- Displaying blog data -->
        <div class="p-4 rounded-md bg-background shadow-lg">
          <div
            v-if="BlogData.length > 0"
            class="grid grid-cols-1 md:grid-cols-2"
          >
            <div class="order-2 md:order-1 text-secondary space-y-4">
              <span>{{ BlogData[0].datePublished }}</span>
              <h4 class="leading-[2.5rem]">{{ BlogData[0].title }}</h4>
              <p>{{ BlogData[0].excerpt }}</p>
              <Button size="lg">Read more</Button>
            </div>
            <div class="order-1 md:order-2">
              <div class="image__wrapper">
                <img
                  class="w-full h-[350px] rounded-md"
                  :src="BlogData[0].image"
                  alt="blog_image"
                />
              </div>
            </div>
          </div>
        </div>

        <!-- Additional blogs -->
        <div class="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-12">
          <div
            v-if="loading"
            v-for="i in 2"
            :key="i"
            class="bg-background rounded-md space-y-4 p-4"
          >
            <div
              class="h-[325px] w-full rounded-md bg-slate-200 animate-pulse"
            />
            <div class="h-8 w-1/3 rounded-md bg-slate-200 animate-pulse" />
            <div class="h-8 rounded-md bg-slate-200 animate-pulse" />
          </div>

          <div
            v-else="!loading"
            v-for="blog in data"
            :key="blog.id"
            class="shadow-lg bg-background rounded-md"
          >
            <img
              class="rounded-t-md h-[325px] w-full"
              :src="blog.image"
              alt="blog_image"
            />
            <div class="text-secondary space-y-2 p-4">
              <span>{{ blog.datePublished }}</span>
              <h4 class="leading-[2.5rem]">{{ blog.title }}</h4>
              <p>{{ blog.excerpt }}</p>
            </div>
          </div>
        </div>

        <!-- Pagination -->
        <BlogPagination
          :currentPage="currentPage"
          :totalPages="totalPages"
          :onPageChanged="onPageChanged"
        />
      </div>
    </div>
  </section>
</template>

<script>
import BlogData from "@/config/blog.json";
import { Button } from "@/components/ui/button";
import BlogPagination from "@/components/blog/BlogPagination.vue";

export default {
  components: {
    Button,
    BlogPagination,
  },
  data() {
    return {
      data: [],
      loading: true,
      BlogData,
      totalPages: 0,
      firstIndex: 0,
      lastIndex: 0,
      dataPerPage: 2,
      currentPage: 1,
    };
  },
  methods: {
    fetchAllBlog() {
      setTimeout(() => {
        this.totalPages = Math.ceil(this.BlogData.length / this.dataPerPage);
        this.firstIndex = (this.currentPage - 1) * this.dataPerPage;
        this.lastIndex = this.firstIndex + this.dataPerPage;
        this.data = this.BlogData.slice(this.firstIndex, this.lastIndex);
        this.loading = false;
      }, 500);
    },

    onPageChanged(page) {
      this.currentPage = page;
      this.loading = true;
      this.fetchAllBlog();
    },
  },
  mounted() {
    this.fetchAllBlog();
  },
};
</script>
