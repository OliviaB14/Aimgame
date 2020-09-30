let Score = {
    points : 0,
    timer: 0,

    addPoint() {
        this.points++;
        console.log(this.points)
    },
    resetGame() {
        this.timer = 0;
        this.points = 0;
    }
};

export default Score;
