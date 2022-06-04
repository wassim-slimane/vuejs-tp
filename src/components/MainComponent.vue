<script setup>
import {onMounted, ref, watch} from "vue";
import * as jose from 'jose';
import axios from "axios";

const counter = ref(0);
const token = ref(null);
const tokenStocked = ref(null);
const data = ref(null);

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

async function getRequest() {
  if(localStorage.jwt) {
    try {
      const result = await axios.get('http://127.0.0.1:8080/moncompte', {
        headers: {
          "x-auth-token": localStorage.jwt,
        },
      });
      data.value = result.data;
    } catch(error) {
      console.log("Error : " + error.message);
    }
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
<button @click.prevent="getRequest" class="btn btn-primary">GET Request</button>
<p>{{ data }}</p>
</template>

<style>

</style>
