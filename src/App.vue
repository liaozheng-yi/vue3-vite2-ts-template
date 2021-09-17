<script setup lang="ts">
import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
  <img alt="Vue logo" src="./assets/logo.png" srcset="123" />
  <HelloWorld msg="Hello Vue 3 + TypeScript + Vite" />
  <n-button />
  <n-input />
</template>
<script lang="ts" setup>
let a = 123
a = 234
let b = '123123'
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
