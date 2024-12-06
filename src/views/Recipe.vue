<script>
import { Button } from "@/components/ui/button";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import {
  nutrisionFact,
  infoSummary,
  buttonActions,
  recipeDetail,
} from "@/config";
import {} from "@/config";

export default {
  components: {
    Button,
  },
  data() {
    return {
      nutrisionFact: nutrisionFact,
      infoSummary: infoSummary,
      buttonActions: buttonActions,
      recipeDetail: recipeDetail,
    };
  },
};
</script>

<template>
  <section class="section__wrapper">
    <!-- content head-->
    <div>home / recipe / sate-padang-enak</div>

    <!-- content body -->
    <div>
      <!-- recipe title -->
      <div class="text-3xl md:text-4xl font-semibold">
        Mixed Greens with sun-Dried Tomato Dressing
      </div>

      <!-- recipe information -->
      <div
        class="grid grid-cols-1 md:grid-cols-10 gap-x-4 py-4 items-center border-b"
      >
        <div class="col-span-10 md:col-span-6">
          <!-- recipe information summary-->
          <div class="flex flex-wrap">
            <div
              v-for="(item, index) in infoSummary"
              :key="index"
              class="flex items-center w-1/2 md:w-1/4 gap-x-2"
            >
              <font-awesome-icon class="text-accent" :icon="item.icon" />
              <span>{{ item.value }}</span>
            </div>
          </div>
        </div>

        <!-- recipe share button-->
        <div class="hidden md:flex col-span-4 px-4 space-x-4">
          <button
            v-for="(button, index) in buttonActions"
            :key="index"
            class="py-2 px-4 border rounded-md"
          >
            <font-awesome-icon class="text-accent" :icon="button.icon" />
          </button>
        </div>
      </div>

      <!-- recipe detail -->
      <div class="grid grid-cols-1 md:grid-cols-10 gap-x-4">
        <div class="col-span-10 md:col-span-6">
          <!-- recipe food image -->
          <div class="w-full flex items-center justify-center py-6">
            <img
              class="w-full rounded-sm"
              src="@/assets/food_recipe.png"
              alt=""
            />
          </div>

          <!-- recide food cook -->
          <div class="flex flex-wrap">
            <div
              v-for="recipe in recipeDetail"
              class="flex items-center gap-x-2 px-2 py-2 w-1/3 md:w-1/5"
            >
              <div
                class="flex items-center justify-center py-2 px-2 rounded-full bg-accent-muted"
              >
                <font-awesome-icon class="text-accent" :icon="recipe.icon" />
              </div>
              <div class="text-sm">
                <span>{{ recipe.type }}</span>
                <p class="font-bold">{{ recipe.name }}</p>
              </div>
            </div>
          </div>
        </div>

        <div
          class="hidden md:flex flex-col col-span-4 py-6 pl-[100px] space-y-12"
        >
          <!-- nutrision fact -->
          <div
            class="px-4 py-6 bg-foreground text-secondary rounded-sm space-y-2"
          >
            <h4>Nutrision fact</h4>
            <div
              v-for="nutrision in nutrisionFact"
              class="flex items-center justify-between border-b border-secondary"
            >
              <div>{{ nutrision.title }}</div>
              <div>{{ nutrision.value }}</div>
            </div>
          </div>

          <!-- related recipe -->
        </div>
      </div>
    </div>
  </section>
</template>
