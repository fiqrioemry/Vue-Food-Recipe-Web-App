<script>
import { Button } from "@/components/ui/button";
export default {
  components: {
    Button,
  },
};
</script>

<template>
  <section class="py-6 md:py-8 space-y-8 container mx-auto">
    <!-- content head-->
    <div>home / recipe / sate-padang-enak</div>

    <!-- content body -->
    <div>
      <!-- recipe title -->
      <div class="text-4xl font-semibold">
        Mixed Greens with sun-Dried Tomato Dressing
      </div>

      <!-- recipe information -->
      <div
        class="grid grid-cols-1 md:grid-cols-10 gap-x-4 py-4 items-center border-b"
      >
        <div class="col-span-10 md:col-span-7">
          <!-- recipe information summary-->
          <div class="flex items-center space-x-10">
            <div>Author name</div>
            <div>Author name</div>
            <div>Author name</div>
            <div>Author name</div>
          </div>
        </div>

        <!-- recipe share button-->
        <div class="hidden md:flex col-span-3 space-x-4">
          <button class="py-2 px-4 bg-accent rounded-md text-white">x</button>
          <button class="py-2 px-4 bg-accent rounded-md text-white">x</button>
        </div>
      </div>

      <!-- recipe detail -->
      <div class="grid grid-cols-1 md:grid-cols-10 gap-x-10">
        <div class="col-span-10 md:col-span-7">
          <div
            class="w-full flex items-center justify-center overflow-hidden bg-cover py-6"
          >
            <img
              class="w-full object-cover"
              src="@/assets/food_recipe.png"
              alt=""
            />
          </div>
        </div>

        <div class="hidden md:flex flex-col col-span-3 py-6 space-y-12">
          <!-- nutrision fact -->
          <div
            class="px-4 py-6 bg-foreground text-secondary rounded-sm space-y-2"
          >
            <h4>Nutrision fact</h4>
            <div
              v-for="i in 7"
              class="flex items-center justify-between border-b border-secondary"
            >
              <div>Calories</div>
              <div>494</div>
            </div>
          </div>

          <!-- related recipe -->
          <div class="px-4 py-6 space-y-2">
            <h4>Recent Recipes</h4>
            <div
              v-for="i in 7"
              class="flex items-center justify-between border-b border-secondary"
            >
              <div>Calories</div>
              <div>494</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
