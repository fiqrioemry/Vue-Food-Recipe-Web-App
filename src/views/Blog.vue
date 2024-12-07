<template>
  <section class="section__wrapper">
    <!-- navigation-->
    <div>home / blog</div>
    <div class="space-y-6">
      <!-- section head -->
      <div>
        <h3>Lastest Blog</h3>
      </div>

      <!-- section content  -->
      <div class="p-4 rounded-md bg-background shadow-lg">
        <div class="grid grid-cols-1 md:grid-cols-2">
          <div class="order-2 md:order-1 text-secondary space-y-4">
            <span>on september 19, 2023</span>
            <h4 class="leading-[2.5rem]">
              Classic New York Style Cheesecake Recipe
            </h4>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Distinctio ipsam, esse nisi placeat ex cupiditate quaerat nam,
              ratione id dicta amet sit architecto reiciendis. Consequatur
              blanditiis nisi ab minima quod.
            </p>

            <Button size="lg">Read more </Button>
          </div>
          <div class="order-1 md:order-2">
            <div class="image__wrapper">
              <img
                class="w-full rounded-md"
                src="@/assets/blog_image.png"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 py-12 gap-x-6 gap-y-12">
        <div v-for="i in 4" class="shadow-lg rounded-md">
          <img
            class="rounded-t-md h-[300px] w-full"
            src="@/assets/blog_image.png"
            alt=""
          />

          <div class="text-secondary space-y-2 p-4">
            <span>on september 19, 2023</span>
            <h4 class="leading-[2.5rem]">Classic New York Style Cheesecake</h4>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Distinctio ipsam, esse nisi placeat ex cupiditate quaerat nam,
              ratione id dicta amet sit architecto reiciendis. Consequatur
              blanditiis nisi ab minima quod.
            </p>
          </div>
        </div>
      </div>

      <div>
        <BlogPagination />
      </div>
    </div>
  </section>
</template>
<script>
import { Button } from "@/components/ui/button";
import BlogPagination from "@/components/blog/BlogPagination.vue";
export default {
  components: {
    Button,
    BlogPagination,
  },
};
</script>
