class Game {

    ball : Ball
    ball2 : Ball

    constructor(){
        console.log("Game created!")

        this.ball = new Ball("Red")
        this.ball2 = new Ball("green")

        this.ball.changeColor()

        this.gameLoop()

    }


    gameLoop() {
        this.ball.move()

        requestAnimationFrame(() => this.gameLoop())
    }
}

window.addEventListener("load",() => new Game())