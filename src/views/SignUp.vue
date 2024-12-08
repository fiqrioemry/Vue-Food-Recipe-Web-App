<template>
  <section class="h-screen flex items-center justify-center bg-foreground">
    <div class="p-4 w-[325px] rounded-md bg-background">
      <form @submit.prevent="handleLogin" class="space-y-4">
        <input
          v-for="(data, index) in signInInputForm"
          :type="data.type"
          v-model="data.value"
          :placeholder="data.placeholder"
          :key="index"
          class="py-2 px-4 w-full rounded-md border"
        />
        <button
          type="submit"
          class="px-4 py-2 border w-full rounded-md bg-accent text-background"
        >
          Login
        </button>
      </form>
    </div>
  </section>
</template>

<script>
import { signInInputForm } from "@/config";

export default {
  data() {
    return {
      signInInputForm: signInInputForm,
    };
  },
  methods: {
    handleLogin() {
      alert(
        `your email is : ${this.signInputForm.value} and password is : ${this.signInputForm.value}`
      );
    },
  },
};
</script>
