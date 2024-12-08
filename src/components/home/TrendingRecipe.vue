<template>
  <section class="section__wrapper">
    <!-- section head -->
    <div class="flex items-center justify-between">
      <h4>Trending Recipe</h4>

      <button class="text-accent font-semibold">View more</button>
    </div>

    <div>
      <div class="grid grid-cols-2 md:grid-cols-3 gap-x-6 gap-y-6">
        <article
          v-for="recipe in relatedRecipe"
          class="rounded-md shadow-lg"
          :key="recipe.id"
        >
          <router-link :to="`/recipe/${recipe.name}`">
            <div class="image__wrapper relative">
              <button
                class="absolute right-2 top-2 bg-background px-4 py-2 rounded-md"
              >
                <font-awesome-icon
                  class="text-accent text-xs"
                  icon="fa-solid fa-bookmark"
                />
              </button>
              <img class="rounded-t-md" :src="recipe.image" alt="favorite" />
            </div>

            <div class="px-2 py-2 min-h-[75px]">
              <div>
                <font-awesome-icon
                  v-for="i in Math.floor(recipe.rating)"
                  class="text-accent text-xs"
                  icon="fa-solid fa-star"
                  :key="i"
                />
              </div>
              <div class="text-xs md:text-sm">{{ recipe.name }}</div>
            </div>
          </router-link>
        </article>
      </div>
    </div>

    <!-- section content -->
  </section>
</template>

<script>
export default {
  data() {
    return {
      relatedRecipe: [],
      loading: true,
    };
  },
  methods: {
    async fetchRelatedRecipe() {
      setTimeout(async () => {
        const response = await fetch("https://dummyjson.com/recipes?limit=6");
        const data = await response.json();
        this.relatedRecipe = data.recipes;
        this.loading = false;
      }, 500);
    },
  },
  mounted() {
    this.fetchRelatedRecipe();
  },
};
</script>
