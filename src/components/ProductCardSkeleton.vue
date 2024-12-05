<template>
  <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
    <article
      v-for="index in 4"
      :key="index"
      class="w-full rounded-md border space-y-2 shadow-xl p-4"
    >
      <div class="h-[200px] rounded-md bg-slate-200 animate-pulse"></div>
      <div class="w-1/2 h-[15px] rounded-md bg-slate-200 animate-pulse"></div>
      <div class="w-1/3 h-[15px] rounded-md bg-slate-200 animate-pulse"></div>
      <div class="h-[45px] rounded-md bg-slate-200 animate-pulse"></div>
    </article>
  </div>
</template>

<script>
export default {
  name: "ProductCardSkeleton",
};
</script>
