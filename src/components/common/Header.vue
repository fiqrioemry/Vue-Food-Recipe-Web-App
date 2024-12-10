<template>
  <header
    class="py-4 bg-background fixed top-0 left-0 right-0 z-10 border-b-2 border-accent"
  >
    <div class="header__wrapper">
      <div>
        <h5>FLA<span class="text-accent">VORIZ</span></h5>
      </div>
      <nav class="hidden md:block">
        <NavLink />
      </nav>
      <!-- nav menu (mobile) -->
      <div class="flex md:hidden"><NavMenu /></div>

      <!-- nav button -->
      <div class="hidden md:flex space-x-2">
        <Button>
          <router-link to="/signin">Login</router-link>
        </Button>
        <Button><router-link to="/signup">Signup</router-link></Button>
      </div>
    </div>
  </header>
</template>

<script>
import NavMenu from "./NavMenu.vue";
import NavLink from "./NavLink.vue";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetTitle,
  SheetHeader,
  SheetTrigger,
  SheetContent,
  SheetDescription,
} from "@/components/ui/sheet";

export default {
  components: {
    Sheet,
    Button,
    NavMenu,
    NavLink,
    SheetTitle,
    SheetHeader,
    SheetTrigger,
    SheetContent,
    SheetDescription,
  },
};
</script>
