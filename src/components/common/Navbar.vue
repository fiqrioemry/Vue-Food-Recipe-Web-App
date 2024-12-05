<template>
  <header class="py-6 bg-background">
    <div class="flex items-center justify-between container mx-auto">
      <div>
        <h1 class="text-2xl font-bold">
          FLA<span class="text-yellow-500">VORIZ</span>
        </h1>
      </div>
      <nav>
        <ul class="flex justify-between gap-x-6">
          <li><router-link to="/">Home</router-link></li>
          <li><router-link to="/recipe">Recipe</router-link></li>
          <li><router-link to="/about">About</router-link></li>
        </ul>
      </nav>
      <Button>Login</Button>
    </div>
  </header>
</template>

<script>
import { Button } from "@/components/ui/button";
export default {
  components: {
    Button,
  },
};
</script>
