<script setup lang="ts">

import ToolItem from '@/components/home/ToolItem.vue'
import { shallowReactive } from 'vue'

import {tools} from '../../datas/tools'

const toolsList = shallowReactive(tools)
</script>

<template>
  <main class="container mx-auto py-4">
    <ToolItem v-for="tool in toolsList" :key="tool.name" :item="tool">
      {{ tool.description }}
    </ToolItem>
  </main>
</template>
