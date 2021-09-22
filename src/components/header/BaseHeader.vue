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
import { useIcon } from '@/utils'
let menuOptions = ref([
  {
    label: '销售',
    key: 'market',
    icon: useIcon('icon-xiaoshou')
  }
])
</script>
