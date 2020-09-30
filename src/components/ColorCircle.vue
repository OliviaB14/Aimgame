<template>
    <div>
        <div class="circle" :style="{'background': color, 'top': topX, 'right': leftY}"
             ref="colorCircle"
        v-on:click="getPoint()"></div>
    </div>

</template>

<script>
    import Score from "@/services/score";

    export default {
        name: "ColorCircle",
        mounted() {
            let {x, y} = this.getRandomCoord();
            this.topX = x  + 'px';
            this.leftY = y + 'px';
        },
        data() {
          return {
              topX: 0,
              leftY: 0
          }
        },
        computed: {
            color() {
                let rand = Math.floor(Math.random() * Math.floor(5));
                let colors = ['#73C6B6', '#EC7063', '#AF7AC5', '#7CB342', '#FFCA28', '#FFF176'];
                return colors[rand];
            }
        },
        methods: {
            getPoint() {
                Score.addPoint();
                let {x,y} = this.getRandomCoord();
                this.topX = x  + 'px';
                this.leftY = y + 'px';
            },
            getRandomCoord() {
                let x = Math.floor(Math.random() * document.body.clientWidth);
                let y = Math.floor(Math.random() * document.body.clientHeight);
                return {x, y};
            }
        }
    }
</script>

<style scoped lang="scss">
    .circle {
        position: absolute;

        z-index: 1;

        width: 100px;
        height: 100px;

        border-radius: 50%;

        cursor: pointer;
    }
</style>
