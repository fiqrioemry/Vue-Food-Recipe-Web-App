<template>
  <section class="section__wrapper">
    <!-- content head-->
    <div>home / recipe / sate-padang-enak</div>
    <!-- content body -->
    <div>
      <!-- recipe title -->
      <div class="text-3xl md:text-4xl font-semibold">
        {{ recipes[0].name }}
      </div>

      <!-- recipe information -->
      <div
        class="grid grid-cols-1 md:grid-cols-10 gap-x-4 items-center border-b"
      >
        <!-- 1. recipe right side -->
        <div class="recipe__right__side py-6">
          <!-- recipe information summary-->
          <div class="flex flex-wrap space-y-2">
            <div
              v-for="(item, index) in infoSummary"
              :key="index"
              class="flex items-center w-1/2 md:w-1/4 gap-x-2 text-sm"
            >
              <font-awesome-icon class="text-accent" :icon="item.icon" />
              <span>{{ item.value }}</span>
            </div>
          </div>
        </div>

        <!-- recipe share button-->
        <div class="recipe__left__side items-center">
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
        <div class="recipe__right__side space-y-6 py-6">
          <!-- recipe image -->
          <div class="image__wrapper">
            <img
              class="w-full rounded-sm"
              :src="recipes[0].image"
              alt="detail_image"
            />
          </div>

          <!-- recipe information -->
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
                <span>{{ recipe.name }}</span>
                <p class="font-bold">{{ recipes[0][recipe.type] }}</p>
              </div>
            </div>
          </div>

          <!-- ingredients & instruction  -->
          <div>
            <div
              v-for="recipe in recipes"
              :key="recipe.id"
              class="space-y-6 py-6"
            >
              <!-- ingredients -->
              <div class="space-y-4 md:space-y-6">
                <h4>Ingredients</h4>
                <div
                  v-for="ingredient in recipe.ingredients"
                  :key="ingredient"
                  class="flex items-center px-6 space-x-4"
                >
                  <font-awesome-icon
                    class="text-accent"
                    icon="fa-solid fa-circle-check"
                  />
                  <p>{{ ingredient }}</p>
                </div>
              </div>

              <!-- instructions -->
              <div class="space-y-4 md:space-y-6">
                <h4>Instruction</h4>
                <div
                  v-for="instruction in recipe.instructions"
                  :key="ingredient"
                  class="flex items-center px-6 space-x-4"
                >
                  <font-awesome-icon
                    class="text-accent"
                    icon="fa-solid fa-circle-check"
                  />
                  <p>{{ instruction }}</p>
                </div>
              </div>
            </div>
          </div>

          <!-- you might also like -->
          <div class="space-y-6 py-6">
            <h4>You might also like</h4>
            <div class="grid grid-cols-3 gap-x-4 gap-y-4">
              <article v-for="i in 6" class="rounded-md shadow-lg">
                <div class="image__wrapper relative">
                  <button
                    class="absolute right-2 top-2 bg-background px-4 py-2 rounded-md"
                  >
                    <font-awesome-icon
                      class="text-accent text-xs"
                      icon="fa-solid fa-bookmark"
                    />
                  </button>
                  <img
                    class="rounded-t-md"
                    src="@/assets/food_recipe.png"
                    alt="favorite"
                  />
                </div>

                <div class="px-2 py-2 min-h-[75px]">
                  <div>
                    <font-awesome-icon
                      v-for="i in 5"
                      class="text-accent text-xs"
                      icon="fa-solid fa-star"
                      key="{{ i }}"
                    />
                  </div>
                  <div class="text-xs md:text-sm">
                    Creamy Rajun Chicken Pasta
                  </div>
                </div>
              </article>

              <button @click="increment" class="px-4 py-2 border">
                increment
              </button>
              <div>{{ nums }}</div>
            </div>
          </div>
        </div>

        <!-- left side info -->
        <div class="recipe__left__side">
          <div class="space-y-6 py-6">
            <!-- nutrision fact -->
            <div
              class="p-6 max-h-[400px] w-full bg-foreground text-secondary rounded-sm space-y-2"
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

            <!-- stay connect with us -->
            <div class="py-6 space-y-6">
              <div class="bg-accent-muted space-y-6 p-6 rounded-sm text-center">
                <h4 class="leading-[2rem]">Stay connected with our updates</h4>
                <p>for the lastest health tips and delicious recipes</p>

                <form class="space-y-4" action="submit">
                  <Input
                    class="w-full rounded-md h-12"
                    placeholder="Enter you email"
                  />
                  <Button size="lg" class="w-full">Sign up</Button>
                </form>
              </div>
            </div>

            <div class="py-6 space-y-6">
              <h5>Related Recipes</h5>
              <div class="grid grid-cols-2 gap-x-3 gap-y-3">
                <article v-for="i in 6" class="rounded-md shadow-lg">
                  <div class="image__wrapper">
                    <img
                      class="rounded-t-md"
                      src="@/assets/food_recipe.png"
                      alt="favorite"
                    />
                  </div>

                  <div class="px-2 py-2">
                    <div class="text-xs md:text-sm">
                      Creamy Rajun Chicken Pasta
                    </div>
                  </div>
                </article>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

import {
  nutrisionFact,
  infoSummary,
  buttonActions,
  recipeDetail,
  recipes,
} from "@/config";
import { ref } from "vue";

export default {
  components: {
    Button,
    Input,
  },

  data() {
    return {
      maxStock: 10,
      nutrisionFact: nutrisionFact,
      infoSummary: infoSummary,
      buttonActions: buttonActions,
      recipeDetail: recipeDetail,
      recipes: recipes,
    };
  },
};
</script>
