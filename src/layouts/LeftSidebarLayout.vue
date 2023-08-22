<template>
  <div class="bg-base-100 drawer lg:drawer-open">
    <input id="my-drawer" type="checkbox" class="drawer-toggle" />
    <div class="drawer-content flex flex-col">
      <div class="max-w-[100vw] px-6 pb-16 xl:pr-2">
        <RouterView/>
      </div>

    </div>
    <div class="drawer-side">
      <label for="my-drawer" class="drawer-overlay"></label>
      <ul class="menu p-4 w-80 h-full bg-base-200 text-base-content">
        <!-- Sidebar content here -->
        <li v-for="tool in toolsList" :key="tool.name" :item="tool">
          <RouterLink :to="{name: tool.route}">
            <i>
              <component :is="tool.icon"></component>
            </i>
            {{ tool.description }}
          </RouterLink>
        </li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts">
import { RouterView, RouterLink } from 'vue-router';
import { shallowReactive } from 'vue';

import {tools} from '../datas/tools'

const toolsList = shallowReactive(tools)

export default {
  setup(props, context) {
    return {
      toolsList
    }
  }
}
</script>