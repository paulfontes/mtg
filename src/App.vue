<script setup>
import { computed, onMounted } from 'vue';
import { mtgService } from './services/MTGService';
import { AppState } from './AppState';


onMounted(()=>{
  getAllCards()
})

const cards = computed(()=> AppState.cards)

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
        <h1 class="mt-3 text-black">Magic The Gathering Card Database!</h1>
      </div>
    </div>
  </div>
  <p>{{ cards }}</p>
<div class="container mt-5">
  <div class="row">
    <div class="col-3">
      <div class="card">
        <!-- <p>{{ cards }}</p> -->
          <img src="https://images.unsplash.com/photo-1767523881986-f8b55d3c5880?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" class="card-img-top" alt="">
      </div>
      <div class="card-body">
        <h3 class="card-title text-center">Card Name</h3>
      </div>
    </div>
    <div class="col-3">
      <div class="card">
          <img src="https://images.unsplash.com/photo-1767523881986-f8b55d3c5880?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" class="card-img-top" alt="">
      </div>
      <div class="card-body">
        <h3 class="card-title text-center">Card Name</h3>
      </div>
    </div>
    <div class="col-3">
      <div class="card">
          <img src="https://images.unsplash.com/photo-1767523881986-f8b55d3c5880?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" class="card-img-top" alt="">
      </div>
      <div class="card-body">
        <h3 class="card-title text-center">Card Name</h3>
      </div>
    </div>
    <div class="col-3">
      <div class="card">
          <img src="https://images.unsplash.com/photo-1767523881986-f8b55d3c5880?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" class="card-img-top" alt="">
      </div>
      <div class="card-body">
        <h3 class="card-title text-center">Card Name</h3>
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
