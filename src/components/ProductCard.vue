<template>
  <div class="grid grid-cols-4 gap-x-4 gap-y-4 py-4">
    <article
      v-for="product in products"
      :key="product.id"
      class="p-2 border rounded-md bg-background shadow-lg space-y-2"
    >
      <div
        class="w-full h-[200px] flex items-center justify-center overflow-hidden"
      >
        <img :src="product.thumbnail" />
      </div>
      <div class="flex flex-col h-[100px] justify-between">
        <div class="py-2">
          <h2>{{ product.title.slice(0, 30) }}</h2>
          <p>{{ product.price }}</p>
        </div>

        <BaseButton
          text="See details"
          :isLoading="loading"
          :onClick="() => handleDetail(product.id)"
        />
      </div>
    </article>
  </div>
</template>

<script>
import BaseButton from "../components/BaseButton.vue";

export default {
  components: {
    BaseButton,
  },
  props: {
    products: {
      type: Array,
      required: true,
    },
    loading: {
      type: Boolean,
      required: true,
    },
  },
  methods: {
    handleDetail(id) {
      // Handle product detail click (e.g., route to detail page)
      console.log("Detail for product with id:", id);
    },
  },
};
</script>
