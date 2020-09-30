<template>
    <div class="p-grid">
        <div class="p-col-12">
            Game board
        </div>
        <div class="p-col-12 p-sm-6">
            {{$score.points}} points
        </div>
        <div class="p-col-12 p-sm-6">
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
        watch: {



        }
    }
</script>

<style scoped>

</style>
