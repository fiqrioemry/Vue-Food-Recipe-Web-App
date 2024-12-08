<template>
  <section class="h-screen flex items-center justify-center bg-foreground">
    <Card class="w-[325px]">
      <CardHeader class="text-center">
        <CardTitle>Login to your account</CardTitle>
        <CardDescription
          >Access your favorite recipes and manage your personalized
          cookbook.</CardDescription
        >
      </CardHeader>
      <CardContent>
        <form @submit.prevent="handleLogin" class="space-y-4">
          <input
            v-for="(data, index) in signInInputForm"
            :type="data.type"
            v-model="data.value"
            :placeholder="data.placeholder"
            :key="index"
            class="py-2 px-4 w-full rounded-md border"
          />
          <Button
            type="submit"
            size="lg"
            class="px-4 py-2 border w-full rounded-md bg-accent text-background"
            :disabled="isButtonDisabled()"
          >
            Login
          </Button>
        </form></CardContent
      >
    </Card>
  </section>
</template>

<script>
import Button from "@/components/ui/button/Button.vue";
import { signInInputForm } from "@/config";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default {
  components: {
    Button,
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
  },
  data() {
    return {
      loading: true,
      signInInputForm: signInInputForm,
    };
  },
  methods: {
    isButtonDisabled() {
      return (
        (this.signInInputForm.value && !this.signInInputForm[0].value) ||
        !this.signInInputForm[1].value
      );
    },
    handleLogin() {
      alert(
        `your email is : ${this.signInputForm.value} and password is : ${this.signInputForm.value}`
      );
    },
  },
};
</script>
