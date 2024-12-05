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
      this.loading = true;
      try {
        const response = await fetch(
          `https://dummyjson.com/products?limit=${this.limit}`
        );
        const data = await response.json();
        this.products = data.products;
      } catch (error) {
        console.log("Failed to fetch products:", error);
      } finally {
        this.loading = false;
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
