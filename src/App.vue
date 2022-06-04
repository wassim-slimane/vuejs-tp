<script setup>
import HeaderComponent from './components/HeaderComponent.vue';
import { user } from "@/services/userStore";
import { onMounted } from '@vue/runtime-core';

onMounted(() => {
  console.log(user.value);
  if(localStorage.user) {
    console.log("in");
    let userStored = JSON.parse(localStorage.user);
    user.value.name = userStored.name;
    user.value.email = userStored.email;
    console.log(user.value);
  }
})
</script>

<template>
  <HeaderComponent />
  <div>
    <RouterView />
  </div>

</template>

<style>
@import'bootstrap/dist/css/bootstrap.css';

</style>
