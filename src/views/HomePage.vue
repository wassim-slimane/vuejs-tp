<script setup>
import { ref } from "@vue/reactivity";
import axios from "axios";

const data = ref('null');

const getHomeContent = async() => {
    try {
        let response = await axios.get('http://127.0.0.1:8080/');
        data.value = response.data;
    } catch(exp) {
        console.log('Error : ' + exp.message);
    }
}
</script>

<template>
    <h1>Page d'acceuil</h1>
    <button @click="getHomeContent" class="btn btn-primary">Requête</button>
    <p>{{ data }}</p>
</template>