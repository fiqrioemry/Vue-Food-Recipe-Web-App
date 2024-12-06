<script>
import { Button } from "../ui/button";
export default {
  components: {
    Button,
  },
};
</script>

<template>
  <section class="section__wrapper">
    <div class="flex gap-x-10">
      <img
        class="hidden md:block max-w-[400px] max-h-[400px]"
        src="@/assets/create_new_recipe.png"
        alt="new_recipe"
      />
      <div class="space-y-6 text-center">
        <h2>Share your recipes</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur,
          modi fuga optio quod aperiam minima nulla sunt quae aut eum similique
          laborum dignissimos nam amet repudiandae, ea consequatur, natus iste.
        </p>
        <Button size="lg">Create new recipe</Button>
      </div>
    </div>
  </section>
</template>
