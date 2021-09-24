<template>
  <n-layout-header>
    <n-menu mode="horizontal" :options="menuOptions" />
  </n-layout-header>
  <svg class="icon" aria-hidden="true">
    <use xlink:href="#icon-Shape"></use>
  </svg>
</template>
<script lang="ts" setup>
import { ref } from 'vue'
import { renderIcon } from '@/utils/render'
let menuOptions = ref([
  {
    label: '销售1',
    key: 'market1',
    icon: renderIcon({ icon: 'icon-xiaoshou' })
  },
  {
    label: '销售2',
    key: 'market2',
    icon: renderIcon({ icon: 'icon-xiaoshou' })
  }
])
</script>
