<script setup lang="ts">
import { RouterView } from 'vue-router'
</script>

<template>
  <div data-theme="lofi" class="min-h-screen">
    <div class="navbar bg-base-100 py-6 bg-secondary">
      <div class="container mx-auto justify-center">
        <h1 className="text-3xl font-bold text-secondary-content">
          ⭐ Just a toolbox ⭐
        </h1>
      </div>
    </div>
    <div>
      <RouterView/>
    </div>
  </div>
</template>