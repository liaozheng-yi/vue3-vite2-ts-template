<template>
  <router-view />
</template>
<script lang="ts" setup>
import { onMounted } from 'vue'
import { loadingBarApiRef } from '@/router'
import { useLoadingBar } from 'naive-ui'
const loadingBar = useLoadingBar()
onMounted(() => {
  loadingBarApiRef.value = loadingBar
  loadingBar.finish()
})
</script>
<style></style>
