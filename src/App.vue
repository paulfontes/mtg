<script setup>
import { computed, onMounted, ref } from 'vue';
import { mtgService } from './services/MTGService';
import { AppState } from './AppState';

const cards = computed(()=> AppState.cards)

const cardsWithImages = computed(()=> cards.value.filter(card => card.imageUrl))

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

const page = ref(1)
const pageSize = ref(100)

const totalPages = computed(()=> Math.max(1, Math.ceil(cardsWithImages.value.length / pageSize.value)))

const pagedCards = computed(()=> {
  const start = (page.value - 1) * pageSize.value
  return cardsWithImages.value.slice(start, start + pageSize.value)
})

function nextPage() {
  if(page.value < totalPages.value) page.value++
}

function prevPage() {
  if(page.value > 1) page.value--
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
    <div v-for="card in pagedCards" :key="card.id" class="col-3 mt-3">
      <div class="card">
          <img :src="card.imageUrl" alt="">
      </div>
      <div class="card-body">
        <!-- <h3 class="card-title text-center">{{card.name}}</h3> -->
      </div>
    </div>
    <div class="d-flex justify-content-center align-items-center gap-3 mt-4">
<button class="btn btn-outline-dark" @click="prevPage" :disabled="page === 1">
  Prev
</button>

<span>Page {{ page }} / {{ totalPages }}</span>

<button class="btn btn-outline-dark" @click="nextPage" :disabled="page === totalPages">
  Next
</button>
    </div>
  </div>
</div>
  
</template>

<style scoped>
  .card-style{
    width: 200px;
  }

</style>
