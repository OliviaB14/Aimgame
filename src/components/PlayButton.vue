<template>
    <div class="p-grid">
        <div class="clickable p-col-12" v-on:click="$score.startTimer()">
            play
        </div>
        <div class="clickable p-col-12" v-on:click="$score.resetGame()">
            stop
        </div>
    </div>

</template>

<script>
    export default {
        name: "PlayButton"
    }
</script>

<style scoped>

</style>
