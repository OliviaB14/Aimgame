<template>
    <div>
        <div class="circle" :style="{'display': started, 'background': color, 'top': topX, 'left': leftY}"
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
            this.topX = y  + 'px';
            this.leftY = x + 'px';
        },
        data() {
          return {
              topX: 0,
              leftY: 0,
                color: '#73C6B6',
          }
        },
        computed: {
            started() {
                return this.$score.start ? 'block' : 'none'
            }
        },
        methods: {
            getPoint() {
                Score.addPoint();
                if(!this.$score.start)
                    this.$score.startTimer();
                let {x,y} = this.getRandomCoord();
                this.topX = y  + 'px';
                this.leftY = x + 'px';
                this.getRandomColor();
            },
            getRandomCoord() {
                let x = Math.floor(Math.random() * document.body.clientWidth);
                let y = Math.floor(Math.random() * document.body.clientHeight);
                return {x, y};
            },
            getRandomColor() {
                let rand = Math.floor(Math.random() * Math.floor(5));
                let colors = ['#73C6B6', '#EC7063', '#AF7AC5', '#7CB342', '#FFCA28', '#FFF176'];
                this.color = colors[rand];
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
