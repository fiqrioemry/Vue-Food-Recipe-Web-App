<template>
  <section class="h-screen flex items-center justify-center bg-foreground">
    <div class="space-y-2">
      <Button> <router-link to="/">home</router-link></Button>
      <Card class="w-[325px]">
        <CardHeader class="text-center">
          <CardTitle>Login to your account</CardTitle>
          <CardDescription
            >Access your favorite recipes and manage your personalized
            cookbook.</CardDescription
          >
        </CardHeader>
        <CardContent class="space-y-4">
          <form @submit.prevent="handleLogin" class="space-y-4">
            <input
              v-for="(data, index) in signUpInputForm"
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
              {{ isButtonLoading ? "Loading ..." : "Login" }}
            </Button>
          </form>
          <div class="text-sm">
            Already have an account ? Signin
            <router-link to="/signin" class="font-medium">here</router-link>
          </div></CardContent
        >
      </Card>
    </div>
  </section>
</template>

<script>
import Button from "@/components/ui/button/Button.vue";
import { signUpInputForm } from "@/config";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default {
  components: {
    Button,
    Card,
    CardContent,
    CardFooter,
    CardDescription,
    CardHeader,
    CardTitle,
  },
  data() {
    return {
      loading: true,
      isButtonLoading: false,
      signUpInputForm,
    };
  },
  methods: {
    isButtonDisabled() {
      return (
        (this.signUpInputForm.value && !this.signUpInputForm[0].value) ||
        !this.signUpInputForm[1].value
      );
    },
    handleLogin() {
      this.isButtonLoading = true;
      setTimeout(() => {
        alert(`Feature disabled in demo `);
        this.isButtonLoading = false;
      }, 500);
    },
  },
};
</script>
