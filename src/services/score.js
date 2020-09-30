let Score = {
    points : 0,
    timer: 10,
    start: false,

    addPoint() {
        this.points++;
    },
    resetGame() {
        this.timer = 0;
        this.points = 0;
        this.start = false;
    },
    startTimer() {
        this.start = true;
        setInterval(() => {
            if(this.timer >0)
                this.timer --;
        }, 1000);
    }
};

export default Score;

