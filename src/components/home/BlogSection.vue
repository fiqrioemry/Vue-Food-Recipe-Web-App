<script>
export default {};
</script>
<style lang=""></style>

<template>
  <section class="section__wrapper">
    <!-- section head -->
    <div class="flex items-center justify-between">
      <h4>Blog</h4>

      <button class="text-accent font-semibold">View more</button>
    </div>

    <div>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-6">
        <article v-for="i in 2" class="rounded-lg shadow-lg">
          <div class="image__wrapper">
            <img
              class="rounded-t-md w-full"
              src="@/assets/blog.png"
              alt="favorite"
            />
          </div>

          <div class="px-6 py-4">
            <h5 class="text-center">
              Unlocking the benefits of intermittent fasting
            </h5>
            <p class="text-secondary text-justify">
              Creamy Rajun Lorem ipsum, dolor sit amet consectetur adipisicing
              elit. Ipsum itaque perspiciatis officiis reprehenderit voluptas!
              Quis sunt iusto nulla debitis ipsam.
            </p>
          </div>
        </article>
      </div>
    </div>

    <!-- section content -->
  </section>
</template>
