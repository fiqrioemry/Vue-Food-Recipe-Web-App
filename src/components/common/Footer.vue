<script>
import NewsLetter from "./NewsLetter.vue";
export default {
  components: {
    NewsLetter,
  },
};
</script>

<template>
  <footer class="w-full bg-foreground text-secondary">
    <section class="section__wrapper">
      <!-- head content -->
      <div class="grid grid-cols-1 md:grid-cols-10 gap-x-10">
        <!-- perferct recipe -->
        <div
          class="p-2 text-center space-y-4 md:text-start col-span-10 md:col-span-3"
        >
          <h4>FLA<span class="text-accent">VORIZ</span></h4>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quae
            possimus sapiente aut sed provident tenetur tempora beatae,
            reiciendis quos libero dicta sint hic voluptas quas.
          </p>
        </div>
        <div class="col-span-4"></div>
        <div class="col-span-10 md:col-span-3">
          <NewsLetter />
        </div>
      </div>
      <!-- bottom content -->
      <div
        class="pt-6 border-t-2 border-secondary flex items-center justify-center"
      >
        <!-- copyright -->
        <div>&copy; 2023 Flavoriz Logo. All right reserved</div>
      </div>
    </section>
  </footer>
</template>
