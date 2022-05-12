<template>
  <div id="home">
    <img src="@/assets/images/dinding.png" class="background" alt="" srcset="">
    <splash-screen v-if="gameStatus == 'start'" />
    <selecting-game v-if="gameStatus == 'selecting'" />
    <Transition name="fade">
      <quiz-image v-if="gameStatus == 'onGame' && selectedGame == 'image'" />
    </Transition>
    <Transition name="fade">
      <quiz-math v-if="gameStatus == 'onGame' && selectedGame == 'math'" />
    </Transition>
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