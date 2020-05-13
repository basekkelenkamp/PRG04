class Game {
    

    fish : Fish
    bubble : Bubble
    hode : Hode

    constructor() {
        console.log("Game was created!")

        this.fish = new Fish()
        this.bubble = new Bubble()
        this.hode = new Hode()
    }

} 

window.addEventListener("load", () => new Game())