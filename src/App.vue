<script setup>
import {onMounted, ref} from "vue"
const counter = ref(0);

onMounted(() => {
  setInterval(() => {
    counter.value++
  }, 1000);
})


</script>

<template>

<h1>Ma page</h1>

<p>counter : {{ counter }}</p>
<input type="number" v-model="counter">
<button @click="counter=0">Reset counter</button>
</template>

<style>

</style>
