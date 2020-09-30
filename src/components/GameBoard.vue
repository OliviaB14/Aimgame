<template>
    <div class="p-grid">
        <div class="p-col-12">
            Game board
        </div>
        <div class="p-col-12">
            {{points}} points
            {{timer}}
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
                points: 0,
            }
        },
        created () {
            this.timer = Score.timer;
            this.points = Score.points;
                //setInterval(function () => this.timer++, 1000);

        },
        computed: {

           time: () => {

           }

        }
    }
</script>

<style scoped>

</style>
