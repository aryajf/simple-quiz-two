<template>
  <div>
    <splash-screen v-if="gameStatus == 'start'" />
    <selecting-game v-if="gameStatus == 'selecting'" />
    <quiz-image v-if="gameStatus == 'onGame' && selectedGame == 'image'" />
    <quiz-math v-if="gameStatus == 'onGame' && selectedGame == 'math'" />
  </div>
</template>

<script setup>
  import { ref, computed, onMounted, watch } from "vue";
  import store from "@/store";
  import QuizImage from '@/views/components/QuizImage.vue'
  import QuizMath from '@/views/components/QuizMath.vue'
  import SplashScreen from '@/views/components/SplashScreen.vue';
  import SelectingGame from '@/views/components/SelectingGame.vue';
  const gameStatus = computed(() => store.getters["gameStatus"]);
  const selectedGame = computed(() => store.getters["selectedGame"]);
</script>