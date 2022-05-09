<template>
    <div>
        <audio id="wow">
            <source src="@/assets/audios/wow.mp3" type="audio/mpeg">
            Your browser does not support the audio element.
        </audio>
        <audio id="dissapointed">
            <source src="@/assets/audios/dissapointed.mp3" type="audio/mpeg">
            Your browser does not support the audio element.
        </audio>
        <img src="@/assets/images/confetti.png" v-if="finish" class="background-win" alt="" srcset="">
        <div id="app" class="flex w-full h-100 justify-center items-center">
            <div class="w-full max-w-xl p-3"  style="z-index:2 !important;">
            <div class="p-12 w-full mb-8">
                <div v-if="!finish" id="timer-bar">
                    <div id="bar" :style="{width:timer+'%'}"></div>
                </div>
                <div v-if="idx < count">
                    <div class="row d-flex justify-content-center">
                        <div class="col-md-6">
                            <img :src="questions[idx]['questionImage']" alt="">
                        </div>
                    </div>
                    <p class="text-center mt-3 text-2xl font-bold">{{questions[idx]['question']}}</p>
                    <div class="row">
                        <div class="col-6" v-for="(answer, index) in questions[idx].answers"
                            :key="index"
                            :for="index">
                            <label
                            class="block mt-4 font-bold text-center rounded-lg py-4 px-6 text-lg"
                            :class="{'hover:bg-green-700 cursor-pointer' : answer == 'True' && selectedAnswer == ''}, {'hover:bg-red-700 cursor-pointer' : answer == 'False' && selectedAnswer == ''}, {'bg-green-600' : answer == 'True'}, {'bg-red-600' : answer == 'False'}"
                            >
                                <input
                                :id="index"
                                type="radio"
                                class="hidden"
                                :value="index"
                                @change="answered($event)"
                                :disabled="selectedAnswer != ''"
                                />
                                {{ answer }}
                            </label>
                        </div>
                    </div>
                </div>
                <div v-else>
                    <h1 class="font-bold text-center text-3xl">SKOR AKHIR</h1>
                    <div class="flex justify-content-center mt-6">
                        <label
                        class="result block mt-4 font-bold text-center rounded-lg py-3 w-75 px-6 text-lg"
                        :class="{'bg-green-600' : correctAnswers == 100}, {'bg-red-600' : correctAnswers < 100}"
                        >
                        <img id="char-status-1" :src="charStatus1" alt="">
                        <img id="char-status-2" :src="charStatus2" alt="">
                            {{ correctAnswers }}
                        </label>
                    </div>
                    <div class="mt-6 flex justify-content-center">
                        <button
                        @click="resetQuiz"
                        class="reset-button w-75 block mt-4 font-bold text-center rounded-lg py-3 px-6 text-lg"
                        :class="{'bg-red-600' : correctAnswers == 100}, {'bg-green-600' : correctAnswers < 100}"
                        >
                        <template v-if="correctAnswers == 100">
                            FINISH
                        </template>
                        <template v-else>
                            PLAY AGAIN
                        </template>
                        </button>
                    </div>
                </div>
            </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default{
        data() {
        return {
            idx: 0,
            selectedAnswer: "",
            correctAnswers: 0,
            wrongAnswers: 0,
            count: 5,
            timer: 100,
            finish: false,
            questions: [
            {
                type: "image-text",
                questionImage: new URL('../../assets/images/quiz/No1-Australia.png', import.meta.url).href,
                question: 'Ibu kota dari negara Australia adalah Sydney.',
                answers: { a: "True", b: "False" },
                correctAnswer: "b",
            },
            {
                type: "image-text",
                questionImage: new URL('../../assets/images/quiz/No2-Bhinneka.png', import.meta.url).href,
                question: 'Bhinneka Tunggal Ika merupakan lambang negara RI.',
                answers: { a: "True", b: "False" },
                correctAnswer: "a",
            },
            {
                type: "image-text",
                questionImage: new URL('../../assets/images/quiz/No3-Yuan.png', import.meta.url).href,
                question: 'Yuan adalah mata uang negara Jepang.',
                answers: { a: "True", b: "False" },
                correctAnswer: "b",
            },
            {
                type: "image-text",
                questionImage: new URL('../../assets/images/quiz/No4-Habibie.png', import.meta.url).href,
                question: 'BJ. Habibie merupakan Presiden ke-3 RI.',
                answers: { a: "True", b: "False" },
                correctAnswer: "a",
            },
            {
                type: "image-text",
                questionImage: new URL('../../assets/images/quiz/No5-Sungai.png', import.meta.url).href,
                question: 'Sungai terpanjang didunia adalah sungai Amazon.',
                answers: { a: "True", b: "False" },
                correctAnswer: "b",
            },
            ],
        }
        },
        computed: {
            charStatus1(){
                return this.correctAnswers < 100 ? new URL('../../assets/images/characters/1.png', import.meta.url).href : new URL('../../assets/images/characters/3.png', import.meta.url).href
            },
            charStatus2(){
                return this.correctAnswers < 100 ? new URL('../../assets/images/characters/2.png', import.meta.url).href : new URL('../../assets/images/characters/4.png', import.meta.url).href
            },
        },
        mounted(){
            this.idx = 0
            this.selectedAnswer = ""
            this.correctAnswers = 0
            this.wrongAnswers = 0
            this.finish = false
            this.timer = 100
            this.setTimer()
        },
        methods: {
        setTimer(){
            if(this.timer >= 0 ){
                let sup = this
                window.timer = setInterval(() => {
                    if(this.timer <= 0 ){
                        sup.answered('not selected')
                    }
                    this.timer -= 1
                }, 100)
            }
        },
        answered(e) {
            if(e == 'not selected'){
                this.selectedAnswer = 'not selected'
            }else{
                this.selectedAnswer = e.target.value
            }
            if (this.selectedAnswer == this.questions[this.idx].correctAnswer) {
                this.correctAnswers += 20
            } else {
                this.wrongAnswers += 20
            }

            this.idx++
            this.selectedAnswer = ""
            document.querySelectorAll("input").forEach((el) => (el.checked = false))
            this.timer = 100
            if(this.idx == this.count){
                window.clearInterval(window.timer)
                this.finish = true
                if(this.correctAnswers < 100){
                    document.getElementById("dissapointed").play()
                }else{
                    document.getElementById("wow").play()
                }
            }
        },
        resetQuiz() {
            this.$store.dispatch('restartGame')
        },
        },
    }
</script>