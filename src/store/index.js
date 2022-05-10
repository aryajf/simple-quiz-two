import { createStore } from 'vuex'

export default createStore({
  state: {
    gameStatus: 'start',
    selectedGame: null,
  },
  getters: {
    gameStatus(state){
      return state.gameStatus
    },
    selectedGame(state){
      return state.selectedGame
    },
  },
  actions: {
    async selectingGame({state}){
      state.gameStatus = 'selecting'
    },
    async initQuiz({state}, type){
      state.gameStatus = 'onGame'
      state.selectedGame = type
    },
    async restartGame({state}){
      state.gameStatus = 'selecting'
      state.selectedGame = null
    },
  }
})
