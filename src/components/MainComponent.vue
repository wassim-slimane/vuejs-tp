<script setup>
import {onMounted, ref, watch} from "vue";
import * as jose from 'jose';

const counter = ref(0);
const token = ref(null);
const tokenStocked = ref(null);

onMounted(() => {
  if(localStorage.jwt) {
    tokenStocked.value = localStorage.jwt;
  }
  setInterval(() => {
    counter.value++
  }, 1000);
})

function submit() {
  try {
    const claims = jose.decodeJwt(token.value);
    console.log(claims);
    localStorage.jwt = token.value;
    tokenStocked.value = token.value;
  } catch(exc) {
    console.log("Exception : " + exc.message);
  }
}

</script>

<template>

<h2>Main component</h2>

<p>counter : {{ counter }}</p>
<input type="number" v-model="counter">
<button @click="counter=0">Reset counter</button>
<form action="#">
  <input type="text" name="jwt" placeholder="Rentrez le JWT" v-model="token" />
  <button @click.prevent="submit">Valider</button>
  <p v-if="tokenStocked">JWT stocké : {{ tokenStocked }}</p>
  <p v-else>Pas de JWT stocké</p>
</form>
</template>

<style>

</style>
