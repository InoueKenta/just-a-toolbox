<script setup lang="ts">
import ToolItem from '../../components/home/ToolItem.vue'
import { shallowReactive } from 'vue'

import {tools} from '../../datas/tools'

const toolsList = shallowReactive(tools)

</script>

<template>
  <ToolItem v-for="tool in toolsList" :key="tool.name" :item="tool">
    {{ tool.description }}
  </ToolItem>
</template>