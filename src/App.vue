<script setup>
import {onMounted, ref} from "vue";
import * as jose from 'jose';

const counter = ref(0);
const token = ref(null);

onMounted(() => {
  setInterval(() => {
    counter.value++
  }, 1000);
})

function submit() {
  const claims = jose.decodeJwt(token.value);
  console.log(claims);
}

</script>

<template>

<h1>Ma page</h1>

<p>counter : {{ counter }}</p>
<input type="number" v-model="counter">
<button @click="counter=0">Reset counter</button>
<form action="#">
  <input type="text" name="jwt" placeholder="Rentrez le JWT" v-model="token" />
  <button @click.prevent="submit">Valider</button>
</form>
</template>

<style>

</style>
