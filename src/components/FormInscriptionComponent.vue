<script setup>
import { ref } from "@vue/reactivity";
import { fakeSignin } from "../services/userStore";

const name = ref(null);
const email = ref(null);

</script>

<template>
<h2>Inscription</h2>
<div>
    <form @submit.prevent="fakeSignin">
        <div class="form-groupe">
            <label for="name">Name : </label>
            <input class="form-control" type="text" v-model="name">
        </div>
        <div class="form-groupe">
            <label for="name">email : </label>
            <input class="form-control" type="text" v-model="email">
        </div>
        <button type="submit" class="btn btn-primary">Valider</button>
    </form>
</div>
    
</template>

<style>


</style>