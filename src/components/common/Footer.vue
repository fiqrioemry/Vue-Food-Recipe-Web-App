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
    <!-- head content -->
    <section
      class="grid grid-cols-1 md:grid-cols-10 gap-x-10 container mx-auto py-6"
    >
      <!-- perferct recipe -->
      <div class="p-2 text-center md:text-start col-span-3">
        <h4>FLA<span class="text-accent">VORIZ</span></h4>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quae
          possimus sapiente aut sed provident tenetur tempora beatae, reiciendis
          quos libero dicta sint hic voluptas quas.
        </p>
      </div>
      <div class="col-span-4"></div>
      <div class="col-span-3">
        <NewsLetter />
      </div>
    </section>
    <!-- bottom content -->
    <section
      class="py-6 border-t-2 border-secondary flex items-center justify-between container mx-auto"
    >
      <!-- copyright -->
      <div>&copy; 2023 Flavoriz Logo. All right reserved</div>

      <!-- social media -->
      <div>
        <Button>social</Button>
      </div>
    </section>
  </footer>
</template>
