<template>
  <main>
    <!-- loading when fetching process -->
    <RecipeDetailsSkeleton v-if="loading" />
    <!-- show when fetching done -->
    <section
      v-else
      v-for="recipe in recipes"
      class="section__wrapper"
      :key="recipe.id"
    >
      <!-- page navigation-->
      <div>home / recipe / {{ recipe.name.toLowerCase() }}</div>

      <!-- content head -->
      <div>
        <!-- title -->
        <div class="text-3xl md:text-4xl font-semibold">
          {{ recipe.name }}
        </div>
        <!-- summary -->
        <div
          class="grid grid-cols-1 md:grid-cols-10 items-center border-b py-2"
        >
          <!-- info-->
          <div class="col-span-1 md:col-span-6">
            <div class="grid grid-cols-2 md:grid-cols-4 gap-x-4 gap-y-4">
              <div class="flex items-center gap-x-2 text-sm">
                <font-awesome-icon
                  class="text-accent"
                  icon="fa-solid fa-user"
                />
                <span>Alexander Den</span>
              </div>

              <div class="flex items-center gap-x-2 text-sm">
                <font-awesome-icon
                  class="text-accent"
                  icon="fa-solid fa-calendar"
                />
                <span>October 24, 2023</span>
              </div>

              <div class="flex items-center gap-x-2 text-sm">
                <font-awesome-icon
                  class="text-accent"
                  icon="fa-solid fa-comment"
                />
                <span>{{ recipe.reviewCount }} comment</span>
              </div>
            </div>
          </div>
          <!-- separate border -->
          <div class="hidden md:flex md:col-span-1"></div>

          <!-- share button-->
          <div class="hidden md:flex md:col-span-3 space-x-4 items-center">
            <button class="py-2 px-4 border rounded-md">
              <font-awesome-icon
                class="text-accent"
                icon="fa-solid fa-bookmark"
              />
            </button>
            <button class="py-2 px-4 border rounded-md">
              <font-awesome-icon
                class="text-accent"
                icon="fa-solid fa-share-nodes"
              />
            </button>
          </div>
        </div>
      </div>

      <!-- content body-->
      <div class="grid grid-cols-1 md:grid-cols-10 gap-x-4">
        <!-- left side content -->
        <div class="col-span-1 md:col-span-6 space-y-6">
          <!-- recipe image -->
          <div class="image__wrapper">
            <img
              class="w-full h-[425px] rounded-sm"
              :src="recipe.image"
              alt="detail_image"
            />
          </div>

          <!-- recipe information -->
          <div class="flex flex-wrap">
            <div
              v-for="detail in recipeDetail"
              class="flex items-center gap-x-2 px-2 py-2 w-1/3 md:w-1/5"
            >
              <div
                class="flex items-center justify-center py-2 px-2 rounded-full bg-accent-muted"
              >
                <font-awesome-icon class="text-accent" :icon="detail.icon" />
              </div>
              <div class="text-sm">
                <span>{{ detail.name }}</span>
                <p class="font-bold">{{ recipe[detail.type] }}</p>
              </div>
            </div>
          </div>

          <!-- ingredients & instruction  -->

          <div class="space-y-6">
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

          <!-- you might also like -->
          <div class="space-y-6 py-6">
            <h4>You might also like</h4>

            <div class="grid grid-cols-1 md:grid-cols-3 gap-x-4 gap-y-4">
              <article
                v-for="recommend in recommendRecipes"
                class="rounded-md shadow-lg"
              >
                <router-link
                  :to="`/recipe/${recommend.name}`"
                  :key="recommend.id"
                >
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
                      class="w-full h-[200px] rounded-t-md"
                      :src="recommend.image"
                      alt="favorite"
                    />
                  </div>
                  <div class="px-2 py-2 min-h-[75px]">
                    <div>
                      <font-awesome-icon
                        v-for="i in 5"
                        class="text-accent text-xs"
                        icon="fa-solid fa-star"
                        :key="i"
                      />
                    </div>
                    <div class="text-xs md:text-sm">
                      {{ recommend.name }}
                    </div>
                  </div>
                </router-link>
              </article>
            </div>
          </div>
        </div>

        <!-- separate border -->
        <div class="hidden md:flex md:col-span-1"></div>

        <!-- right side content-->
        <div class="hidden md:block md:col-span-3 space-y-6">
          <!-- nutrision fact -->
          <div
            class="py-6 px-6 max-h-[400px] w-full bg-foreground text-secondary rounded-sm space-y-2"
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

          <!-- stay connect  -->
          <div class="bg-accent-muted space-y-6 p-6 rounded-sm text-center">
            <h4 class="leading-[2rem]">Stay connected with our updates</h4>
            <p>for the lastest health tips and delicious recipes</p>

            <form class="space-y-4" action="submit">
              <Input
                class="w-full rounded-md h-12"
                placeholder="Enter you email"
              />
              <Button size="lg" class="w-full"
                ><RouterLink to="/signup">Signup</RouterLink></Button
              >
            </form>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script>
import { useRoute } from "vue-router";
import { ref, onMounted, watch } from "vue";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { nutrisionFact, recipeDetail } from "@/config";
import RecipeDetailsSkeleton from "@/components/skeleton/RecipeDetailsSkeleton.vue";

export default {
  components: {
    Input,
    Button,
    RecipeDetailsSkeleton,
  },
  setup() {
    const recipes = ref([]);
    const route = useRoute();
    const loading = ref(true);
    const recommendRecipes = ref([]);
    const slug = ref(route.params.slug);
    const recipeDetailData = recipeDetail;
    const nutrisionFactData = nutrisionFact;

    const fetchData = async (slug) => {
      // recipe detail
      const response = await fetch(`https://dummyjson.com/recipes?limit=100`);
      const result = await response.json();
      const data = result.recipes;
      recipes.value = data.filter((item) => item.name === slug);

      // recommend recipe
      const mealType = recipes.value[0].mealType[0];
      const recommend = await fetch(
        `https://dummyjson.com/recipes/meal-type/${mealType}`
      );
      const recommendData = await recommend.json();
      recommendRecipes.value = recommendData.recipes
        .filter((item) => item.id !== recipes.value[0].id)
        .slice(0, 3);
      loading.value = false;
    };

    onMounted(() => {
      setTimeout(() => {
        fetchData(slug.value);
      }, 500);
    });

    watch(
      () => route.params.slug,
      (newSlug) => {
        slug.value = newSlug;
        loading.value = true;
        fetchData(newSlug);
      }
    );

    return {
      slug,
      nutrisionFact: nutrisionFactData,
      recipeDetail: recipeDetailData,
      recommendRecipes,
      recipes,
      loading,
    };
  },
};
</script>
