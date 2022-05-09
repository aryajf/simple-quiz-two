<template>
  <div>
    <splash-screen v-if="gameStatus == 'start'" />
    <quiz v-if="gameStatus == 'onGame'" />
  </div>
</template>

<script setup>
  import { ref, computed, onMounted, watch } from "vue";
  import store from "@/store";
  import Quiz from '@/views/components/Quiz.vue'
  import SplashScreen from '@/views/components/SplashScreen.vue';
  const gameStatus = computed(() => store.getters["gameStatus"]);
</script>