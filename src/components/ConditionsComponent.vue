<script setup>
import { ref } from "vue";

const tab = ref([1, 2, 3]);
let id = 0;
const listObject = ref([
    {id: id++, name: "Alice"},
    {id: id++, name: "Bob"},
    {id: id++, name: "Charles"},
]);
const newName = ref(null);

function addName() {
    listObject.value.push({id: id++, name: newName.value});
    newName.value = "";
}

function removeName(id) {
    listObject.value = listObject.value.filter( (e) => e.id !== id);
}

</script>

<template>

<h3>Affichage de mon tableau</h3>
<p v-for="num in tab" :key="num">{{ num }}</p>

<input type="text" v-model="newName">
<button @click.prevent="addName">Ajouter le nom</button>

<div v-for="obj in listObject" :key="obj.id">
    <span>{{ obj.id }} : </span>
    <button @click.prevent="removeName(obj.id)">Supprimer</button>
    <h4>{{ obj.name }}</h4>
</div>
    
</template>