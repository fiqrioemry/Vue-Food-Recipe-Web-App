<template>
  <main>
    <section class="section__wrapper">
      <div class="image__wrapper relative">
        <div
          class="absolute left-5 md:left-10 text-2xl md:text-6xl font-semibold space-y-4"
        >
          <div>Explore</div>
          <div><span class="text-accent">Culinary</span> Insight</div>
        </div>
        <img
          class="rounded-lg"
          src="@/assets/recipe_page_background.jpg"
          alt="recipe_background"
        />
      </div>
      <div class="text-center">
        <h2>What to <span class="text-accent">Cook</span>?</h2>

        <Tabs :default-value="categories">
          <TabsList class="flex flex-wrap gap-x-4 gap-y-4">
            <TabsTrigger
              :value="categories"
              class="rounded-full px-6"
              @click="handleTabClick(categories)"
            >
              All categories
            </TabsTrigger>
            <TabsTrigger
              v-for="(category, index) in categories"
              :key="index"
              :value="category"
              class="rounded-full px-6"
              @click="handleTabClick(category)"
            >
              {{ category }}
            </TabsTrigger>
          </TabsList>
          <TabsContent
            v-for="(category, index) in categories"
            :key="index"
            :value="category"
          >
            <div class="grid grid-cols-4 gap-x-4 gap-y-4">
              <article v-for="(recipe, index) in recipes" :key="index">
                <div class="image__wrapper">
                  <img :src="recipe.image" alt="image_recipes" />
                </div>
              </article>
            </div>
          </TabsContent>
          <TabsContent :value="categories">
            <div class="grid grid-cols-4 gap-x-4 gap-y-4">
              <article v-for="(recipe, index) in recipes" :key="index">
                <div class="image__wrapper">
                  <img :src="recipe.image" alt="image_recipes" />
                </div>
              </article>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  </main>
</template>

<script>
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default {
  components: {
    Tabs,
    TabsContent,
    TabsList,
    TabsTrigger,
  },
  data() {
    return {
      loading: true,
      categories: [],
      mealType: [],
      recipes: [],
    };
  },
  methods: {
    async fetchAllMealType() {
      try {
        const response = await fetch("https://dummyjson.com/recipes?limit=100");
        const { recipes } = await response.json();
        const mealType = [...new Set(recipes.flatMap((item) => item.mealType))];
        this.categories = mealType;
      } catch (error) {
        console.error("Error fetching meal types:", error);
      }
    },

    async fetchByMealType(mealType) {
      try {
        if (typeof mealType === "object" || !mealType.length) {
          const response = await fetch(
            "https://dummyjson.com/recipes?limit=100"
          );
          const { recipes } = await response.json();
          this.recipes = recipes;
          console.log(this.recipes);
        } else {
          const response = await fetch(
            `https://dummyjson.com/recipes/meal-type/${mealType}`
          );
          const { recipes } = await response.json();
          this.recipes = recipes;
          console.log(this.recipes);
        }
      } catch (error) {
        console.error("Error fetching recipes by meal type:", error);
      }
    },

    handleTabClick(selectedMealType) {
      this.mealType = selectedMealType;
      this.fetchByMealType(selectedMealType);
    },
  },
  mounted() {
    this.fetchAllMealType();
    this.fetchByMealType(this.mealType);
  },
};
</script>
