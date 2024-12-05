<template>
  <header class="fixed top-0 left-0 right-0 z-1 py-4 px-4 bg-background">
    <div class="flex items-center justify-between container mx-auto">
      <div><h1 class="text-2xl font-extrabold">LOGO</h1></div>
      <nav>
        <ul class="flex space-x-4">
          <li><router-link to="/">Home</router-link></li>
          <li><router-link to="/about">About</router-link></li>
        </ul>
      </nav>
    </div>
  </header>
</template>
