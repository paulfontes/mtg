<script setup>
import { computed, onMounted } from 'vue';
import { mtgService } from './services/MTGService';
import { AppState } from './AppState';

const cards = computed(()=> AppState.cards)

onMounted(()=>{
  getAllCards()
})


async function getAllCards(){
  try {
    await mtgService.getAllCards()
  } catch (error) {
    console.error(error)
  }
}



</script>

<template>
  <div class="container-fluid bg-secondary">
    <div class="row">
      <div class="col-5">
        <h1 class="mt-3 text-black">Magic The Gathering Card Database!!</h1>
      </div>
    </div>
  </div>
  <!-- <p>{{ card.name }}</p> -->
<div class="container mt-5">
  <div class="row">
    <div v-for="card in cards" :key="card.id" class="col-3">
      <div class="card">
          <img :src="card.imageUrl" alt="">
      </div>
      <div class="card-body">
        <h3 class="card-title text-center">{{card.name}}</h3>
      </div>
    </div>
  </div>
</div>
  
</template>

<style scoped>
  .card-style{
    width: 200px;
  }

</style>
