import { createStore } from 'vuex'

export default createStore({
  state: {
    gameStatus: 'start',
    selectedGame: null,
    clear: {
      math: false,
      image: false,
    }
  },
  getters: {
    gameStatus(state){
      return state.gameStatus
    },
    selectedGame(state){
      return state.selectedGame
    },
    clear(state){
      return state.clear
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
    async restartGame({state}, data){
      if(data){
        if(data.type == 'math' && data.status == true) state.clear.math = true
        if(data.type == 'image' && data.status == true) state.clear.image = true
      }
      if(state.clear.math == true && state.clear.image == true){
        state.gameStatus = 'win'
      }else{
        state.gameStatus = 'selecting'
      }
      state.selectedGame = null
    },
    async finishGame({state}, data){
      state.clear.math = false
      state.clear.image = false
      state.gameStatus = 'start'
      state.selectedGame = null
    }
  }
})
