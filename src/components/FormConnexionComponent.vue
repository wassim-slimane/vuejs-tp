<script setup>
import { ref } from "@vue/reactivity";
import { user, fakeLogin } from "../services/userStore";

const name = ref(null);
const email = ref(null);

const login = () => {
    fakeLogin();
    user.value = {
        name: name.value ? name.value : "wassim",
        email: email.value ? email.value : "wassim.slimane01@gmail.com",
    };
    localStorage.user = JSON.stringify(user.value);
    console.log(localStorage.user);
}

</script>

<template>
<h2>Connexion</h2>
<div>
    <form @submit.prevent="login">
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