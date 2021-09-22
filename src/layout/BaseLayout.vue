<template>
  <n-layout>
    <base-header />
    <n-layout has-sider>
      <n-layout-sider>侧边菜单</n-layout-sider>
      <n-layout-content>
        <router-view />
      </n-layout-content>
    </n-layout>
  </n-layout>
</template>
<script lang="ts" setup>
import BaseHeader from '@/components/header/BaseHeader.vue'
</script>
