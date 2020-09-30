<template>
    <div class="p-grid" id="gameBoard">
        <div class="p-col-12">
            <h1>Aim game</h1>
        </div>
        <div class="clickable p-col-12 p-text-uppercase" v-on:click="start">
            play
        </div>
        <div class="clickable p-col-12 p-text-uppercase" v-on:click="stop">
            stop
        </div>
        <div class="p-col-6">
            {{$score.points}} points
        </div>
        <div class="p-col-6">
            {{$score.timer}} s
        </div>
    </div>
</template>

<script>
    import Score from "@/services/score";

    export default {
        name: "GameBoard",
        data() {
            return {
                timer: 0,
                points: Score.points,
            }
        },
        mounted () {
            this.timer = Score.timer;

                //setInterval(function () => this.timer++, 1000);

        },

        methods: {
            start() {
                this.$score.startTimer();
            },
            stop() {
                this.$score.resetGame();
            }
        }
    }
</script>

<style scoped lang="scss">
#gameBoard {
    background: #eee;
    border: 1px solid grey;

    position: absolute;
    bottom: 0;
    width: 100%;
    margin: 0;
    padding: 0;
}
</style>
