<script>
import BaseButton from "../components/BaseButton.vue";
import ProductCardSkelenton from "../components/ProductCardSkeleton.vue";
import ProductCard from "../components/ProductCard.vue";

export default {
  components: {
    BaseButton,
    ProductCardSkelenton,
    ProductCard,
  },
  data() {
    return {
      products: [],
      loading: true,
      limit: 4,
    };
  },
  methods: {
    async fetchProducts() {
      const url =
        "https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/mealplanner/dsky/week/2020-06-01?hash=4b5v4398573406";
      const options = {
        method: "GET",
        headers: {
          "x-rapidapi-key":
            "9a460ca22bmsh2113c37eac9f3cap1fe768jsn47902cddb841",
          "x-rapidapi-host":
            "spoonacular-recipe-food-nutrition-v1.p.rapidapi.com",
        },
      };
      this.loading = true;
      try {
        const response = await fetch(url, options);
        const result = await response.text();
        console.log(result);
      } catch (error) {
        console.error(error);
      }
    },

    loadMore() {
      this.limit += 4;
      this.fetchProducts();
    },
  },
  mounted() {
    this.fetchProducts();
  },
};
</script>

<!-- render element -->
<template>
  <main class="container mx-auto">
    <div class="h-screen py-12">
      <div class="py-4 flex items-center justify-start">
        <h1>Product Lists</h1>
      </div>

      <!-- Render skeleton when loading = true -->
      <ProductCardSkelenton v-if="loading" />

      <!-- Render product card when loading = false -->
      <ProductCard v-if="!loading" :products="products" :loading="loading" />

      <!-- Button to fetch more products -->
      <div class="py-4 text-center">
        <BaseButton v-if="!loading" text="Load More" @click="loadMore" />
      </div>
    </div>
  </main>
</template>
