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
        <!-- <img src="@/assets/images/confetti.png" v-if="finish" class="background-win" alt="" srcset=""> -->
        <div id="app" class="w-full h-100">
            <div class="flex justify-center items-center">
                <div class="w-full max-w-xl p-3" style="z-index:2 !important;">
                    <div class="p-6 w-full mb-8">
                        <div v-if="!finish" id="timer-bar">
                            <div id="bar" :style="{width:timer+'%'}"></div>
                        </div>
                        <div v-if="idx < count">
                            <div class="row d-flex justify-content-center">
                                <div class="col-12 d-flex justify-content-center">
                                    <img class="quiz-math-question" :src="questions[idx]['questionImage']" alt="">
                                </div>
                            </div>
                            <p class="bg-main p-2 text-center mt-3 font-bold">{{questions[idx]['question']}}</p>
                            <div class="row">
                                <div class="col-6 quiz-image-mobile" v-for="(answer, index) in questions[idx].answers"
                                    :key="index"
                                    :for="index">
                                    <label
                                    class="select-quiz font-bold block mt-4 rounded-full p-6 text-lg d-flex justify-content-center" :class="{'hover:bg-gray-100 cursor-pointer' : selectedAnswer == ''}, {'bg-green-200' : index == questions[idx].correctAnswer && selectedAnswer != ''}, {'bg-red-200' : selectedAnswer == index}"
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
                            <div class="row mt-6 flex justify-content-center align-items-center">
                                <div class="col-md-6">
                                    <img id="char-status" :src="charStatus" alt="">
                                </div>
                                <div class="col-md-6 order-md-first">
                                    <div
                                    class="result font-bold text-center rounded p-3 text-lg">
                                        <div v-if="correctAnswers == 4">Selamat kamu mendapatkan 4 tepung</div>
                                        <div v-else>Sayang sekali, kamu hanya mendapatkan {{ correctAnswers }} tepung</div>
                                        <div class="row d-flex justify-content-center mt-3">
                                            <div v-for="i in correctAnswers" v-bind:key="i" class="col">
                                                <img class="w-100" src="@/assets/images/unknown.png" alt="">
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <button
                                @click="resetQuiz"
                                class="reset-button w-75 block mt-4 font-bold text-center rounded-lg py-3 px-6 text-lg" :class="{'bg-green-600' : correctAnswers == 4}, {'bg-red-600' : correctAnswers < 4}"
                                >
                                <template v-if="correctAnswers == 4">
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
                <div v-if="idx < count" class="quiz-image-desktop container-fluid">
                    <div class="row">
                        <div class="col-3 select-quiz" v-for="(answer, index) in questions[idx].answers"
                            :key="index"
                            :for="index">
                            <label
                            class="block font-bold mt-4 rounded-lg py-4 px-6 text-lg d-flex justify-content-center" :class="{'hover:bg-gray-100 cursor-pointer' : selectedAnswer == ''}, {'bg-green-200' : index == questions[idx].correctAnswer && selectedAnswer != ''}, {'bg-red-200' : selectedAnswer == index}"
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
            count: 4,
            timer: 100,
            finish: false,
            questions: [
            {
                type: "image-text",
                questionImage: new URL('../../assets/images/math-quiz/cake.png', import.meta.url).href,
                question: 'Berapa total kue diatas ?',
                answers: { a: 3, b: 5, c: 1, d: 2 },
                correctAnswer: "a",
            },
            {
                type: "image-text",
                questionImage: new URL('../../assets/images/math-quiz/cupcake.png', import.meta.url).href,
                question: 'Berapa total cupcake diatas ?',
                answers: { a: 2, b: 4, c: 5, d: 6 },
                correctAnswer: "b",
            },
            {
                type: "image-text",
                questionImage: new URL('../../assets/images/math-quiz/ice-cream.png', import.meta.url).href,
                question: 'Berapa total ice cream diatas ?',
                answers: { a: 6, b: 8, c: 3, d: 5 },
                correctAnswer: "a",
            },
            {
                type: "image-text",
                questionImage: new URL('../../assets/images/math-quiz/donut.png', import.meta.url).href,
                question: 'Berapa total donat diatas ?',
                answers: { a: 1, b: 2, c: 4, d: 5 },
                correctAnswer: "c",
            },
            ],
        }
        },
        computed: {
            charStatus(){
                return this.correctAnswers < 4 ? new URL('../../assets/images/characters/defeated.png', import.meta.url).href : new URL('../../assets/images/characters/win.png', import.meta.url).href
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
                this.correctAnswers += 1
            } else {
                this.wrongAnswers += 1
            }

            this.idx++
            this.selectedAnswer = ""
            document.querySelectorAll("input").forEach((el) => (el.checked = false))
            this.timer = 100
            if(this.idx == this.count){
                window.clearInterval(window.timer)
                this.finish = true
                if(this.correctAnswers < 4){
                    document.getElementById("dissapointed").play()
                }else{
                    document.getElementById("wow").play()
                }
            }
        },
        resetQuiz() {
            let status = false
            if(this.correctAnswers >= 4){
                status = true
            }
            this.$store.dispatch('restartGame',{type:'math', status})
        },
        },
    }
</script>