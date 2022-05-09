import { createStore } from 'vuex'

export default createStore({
  state: {
    gameStatus: 'start',
  },
  getters: {
    gameStatus(state){
      return state.gameStatus
    },
  },
  actions: {
    async initGame({state}){
      state.gameStatus = 'onGame'
    },
    async restartGame({state}){
      state.gameStatus = 'start'
    },
  }
})
