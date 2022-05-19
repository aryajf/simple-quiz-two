<template>
    <div @click.once="autoplay">
        <audio loop autoplay id="music">
            <source src="@/assets/audios/music.mp3" type="audio/mp3">
            Your browser does not support the audio element.
        </audio>
        <img src="@/assets/images/dinding.png" class="background" alt="" srcset="">
        <!-- ROUTER VIEW -->
        <router-view></router-view>
    </div>
</template>

<script>
export default{
    methods: {
        autoplay(){
            let music = document.getElementById("music");
            music.volume = 0.2;
            music.play()
        }
    }
}
</script>

<style lang="scss">
@import "@/assets/sass/app.scss";
</style>