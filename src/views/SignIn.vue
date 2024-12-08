<template>
  <section class="h-screen flex items-center justify-center bg-foreground">
    <div class="p-4 w-[325px] rounded-md bg-background">
      <form @submit="handleLogin" class="space-y-4">
        <input
          type="text"
          v-model="username"
          placeholder="username"
          class="px-4 py-2 w-full rounded-md border"
        />
        <input
          type="password"
          v-model="password"
          placeholder="password"
          class="px-4 py-2 w-full rounded-md border"
        />

        <button type="submit">login</button>
      </form>
    </div>
  </section>
</template>
<script>
export default {
  data() {
    return {
      username: "",
      password: "",
    };
  },
};
</script>
