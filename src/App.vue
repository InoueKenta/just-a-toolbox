<script setup lang="ts">
import { RouterView } from 'vue-router'
</script>

<template>
  <div data-theme="cupcake" class="min-h-screen">
    <div class="container mx-auto">
      <div class="navbar bg-base-100 py-6">
        <h1 className="text-3xl font-bold green kbd kbd-lg">
          Just a toolbox
        </h1>
      </div>
      <div class="w-full">
        <RouterView/>
      </div>
    </div>
  </div>
</template>