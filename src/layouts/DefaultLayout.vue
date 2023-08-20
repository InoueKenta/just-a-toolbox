<template>
  <div class="py-4">
    <RouterView/>
  </div>
</template>

<script lang="ts">
import { RouterView } from 'vue-router'

export default {
  setup(props, context) {
    console.log(props, context)
  }
}
</script>

