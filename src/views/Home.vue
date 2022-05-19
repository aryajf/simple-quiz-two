<template>
  <div id="home">
    <audio loop autoplay id="music" hidden>
        <source src="@/assets/audios/music.mp3" type="audio/mpeg">
        Your browser does not support the audio element.
    </audio>
    <splash-screen v-if="gameStatus == 'start'" />
    <selecting-game v-if="gameStatus == 'selecting'" />
      <quiz-image v-if="gameStatus == 'onGame' && selectedGame == 'image'" />
      <quiz-math v-if="gameStatus == 'onGame' && selectedGame == 'math'" />
      <win v-if="gameStatus == 'win'" />
  </div>
</template>

<script setup>
  import { ref, computed, onMounted, watch } from "vue";
  import store from "@/store";
  import QuizImage from '@/views/components/QuizImage.vue'
  import QuizMath from '@/views/components/QuizMath.vue'
  import SplashScreen from '@/views/components/SplashScreen.vue';
  import SelectingGame from '@/views/components/SelectingGame.vue';
  import Win from '@/views/components/Win.vue';
  const gameStatus = computed(() => store.getters["gameStatus"]);
  const selectedGame = computed(() => store.getters["selectedGame"]);
</script>