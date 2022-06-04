<script setup>
import { ref } from "@vue/reactivity";
import { onMounted, watch } from "@vue/runtime-core";
import { user, fakeLogout } from "../services/userStore";

const logged = ref(false);

onMounted(() => {
  if(localStorage.user) {
    logged.value = true;
  }
});

const logout = () => {
  fakeLogout();
  user.value = null;
  if(localStorage.user) {
    localStorage.removeItem('user');
  }
  console.log(user.value);
}
</script>

<template>
<div class="">
<nav class="navbar navbar-expand-lg navbar-light bg-light">

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item active">
        <RouterLink v-if="logged" class="nav-link" to="/">Hey</RouterLink>
        <RouterLink v-else class="nav-link" to="/">Welcome</RouterLink>
      </li>
      <li class="nav-item active">
        <RouterLink class="nav-link" to="/inscription">Inscription</RouterLink>
      </li>
      <li class="nav-item active">
        <RouterLink class="nav-link" to="/connexion">Connexion</RouterLink>
      </li>
      <li class="nav-item active">
        <RouterLink class="nav-link" to="/demo-for">DemoFor</RouterLink>
      </li>
      <li class="nav-item active">
        <RouterLink class="nav-link" to="/demo-if">DemoIf</RouterLink>
      </li>
      <li class="nav-item active">
        <RouterLink class="nav-link" to="/main">Main</RouterLink>
      </li>
      <li class="nav-item active">
        <a class="nav-link" @click="logout">Logout</a>
      </li>
    </ul>
  </div>
</nav>

</div>
    
</template>
