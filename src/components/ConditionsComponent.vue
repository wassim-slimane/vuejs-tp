<script setup>
import { ref } from "vue";

const user = ref(null);


</script>

<template>

<h2 v-if="user">Hello User</h2>
<h2 v-else>Hello Anonyme</h2>
<button v-if="user" @click="user=false">Se Déconnecter</button>
<button v-else @click="user=true">Se connecter</button>

    
</template>