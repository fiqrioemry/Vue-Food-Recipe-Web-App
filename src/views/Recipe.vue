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

        <Tabs :default-value="'all'">
          <TabsList
            class="flex flex-wrap gap-x-2 gap-y-2 md:gap-y-4 md:gap-x-4"
          >
            <!-- All Categories Tab -->
            <TabsTrigger
              value="all"
              class="rounded-full px-4 md:px-6"
              @click="handleTabClick('all')"
            >
              All Categories
            </TabsTrigger>
            <!-- Dynamic Categories Tabs -->
            <TabsTrigger
              v-for="(category, index) in categories"
              :key="index"
              :value="category"
              class="rounded-full px-4 md:px-6"
              @click="handleTabClick(category)"
            >
              {{ category }}
            </TabsTrigger>
          </TabsList>
          <!-- Dynamic Categories Content -->
          <TabsContent value="all">
            <div
              v-if="tabsLoading"
              class="grid grid-cols-2 md:grid-cols-4 gap-x-4 gap-y-4 py-6"
            >
              <div v-for="i in 4" :key="i" class="animate__loading h-[300px]" />
            </div>

            <div v-else class="space-y-6 py-6">
              <div class="grid grid-cols-2 md:grid-cols-4 gap-x-4 gap-y-4">
                <article v-for="(recipe, index) in recipes" :key="index">
                  <div class="image__wrapper">
                    <img :src="recipe.image" alt="image_recipes" />
                  </div>
                </article>
              </div>
              <!-- Pagination -->
              <BlogPagination
                :currentPage="currentPage"
                :totalPages="totalPages"
                :onPageChanged="onPageChanged"
              />
            </div>
          </TabsContent>
          <TabsContent
            v-for="(category, index) in categories"
            :key="index"
            :value="category"
            class="space-y-6"
          >
            <div class="grid grid-cols-2 md:grid-cols-4 gap-x-4 gap-y-4">
              <article v-for="(recipe, index) in recipes" :key="index">
                <div class="image__wrapper">
                  <img :src="recipe.image" alt="image_recipes" />
                </div>
              </article>
            </div>
            <!-- Pagination -->
            <BlogPagination
              :currentPage="currentPage"
              :totalPages="totalPages"
              :onPageChanged="onPageChanged"
            />
          </TabsContent>
        </Tabs>
      </div>
    </section>
  </main>
</template>

<script>
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import BlogPagination from "@/components/blog/BlogPagination.vue";
export default {
  components: {
    Tabs,
    TabsContent,
    TabsList,
    TabsTrigger,
    BlogPagination,
  },
  data() {
    return {
      loading: true,
      categories: [],
      recipes: [],
      mealType: "",
      totalPages: 0,
      firstIndex: 0,
      lastIndex: 0,
      dataPerPage: 4,
      currentPage: 1,
      tabsLoading: true,
    };
  },
  methods: {
    async fetchAllMealType() {
      try {
        const response = await fetch("https://dummyjson.com/recipes?limit=100");
        const { recipes } = await response.json();

        const mealType = [...new Set(recipes.flatMap((item) => item.mealType))];
        this.categories = mealType;

        this.handleTabClick("all");
      } catch (error) {
        console.error("Error fetching meal types:", error);
      }
    },

    async fetchByMealType(mealType) {
      try {
        if (mealType === "all") {
          this.mealType = mealType;
          const response = await fetch(
            "https://dummyjson.com/recipes?limit=100"
          );
          const { recipes } = await response.json();
          this.totalPages = Math.ceil(recipes.length / this.dataPerPage);
          this.firstIndex = (this.currentPage - 1) * this.dataPerPage;
          this.lastIndex = this.firstIndex + this.dataPerPage;
          this.recipes = recipes.slice(this.firstIndex, this.lastIndex);
        } else {
          const response = await fetch(
            `https://dummyjson.com/recipes/meal-type/${mealType}`
          );
          const { recipes } = await response.json();
          this.totalPages = Math.ceil(recipes.length / this.dataPerPage);
          this.firstIndex = (this.currentPage - 1) * this.dataPerPage;
          this.lastIndex = this.firstIndex + this.dataPerPage;
          this.recipes = recipes.slice(this.firstIndex, this.lastIndex);
          this.mealType = mealType;
        }
        this.tabsLoading = false;
      } catch (error) {
        console.error("Error fetching recipes by meal type:", error);
      }
    },

    handleTabClick(selectedMealType) {
      this.tabsLoading = true;
      this.currentPage = 1;
      this.fetchByMealType(selectedMealType);
    },

    onPageChanged(page) {
      this.tabsLoading = true;
      this.currentPage = page;
      this.fetchByMealType(this.mealType);
    },
  },
  mounted() {
    this.fetchAllMealType();
  },
};
</script>
