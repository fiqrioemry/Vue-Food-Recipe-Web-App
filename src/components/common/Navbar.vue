<template>
  <header class="py-2 bg-background">
    <div class="header__wrapper">
      <div>
        <h5>FLA<span class="text-accent">VORIZ</span></h5>
      </div>
      <nav class="hidden md:block">
        <NavLink />
      </nav>
      <div class="flex md:hidden"><NavMenu /></div>
      <div class="hidden md:flex space-x-2">
        <div>
          <font-awesome-icon icon="fa-solid fa-house" />
        </div>
        <Button variant="secondary">
          <router-link to="/signin">Login</router-link>
        </Button>

        <Button><router-link to="/signup">Signup</router-link></Button>
      </div>
    </div>
  </header>
</template>

<script>
import { Button } from "@/components/ui/button";
import NavMenu from "./NavMenu.vue";
import NavLink from "./NavLink.vue";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

export default {
  components: {
    Button,
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
    NavMenu,
    NavLink,
  },
};
</script>
