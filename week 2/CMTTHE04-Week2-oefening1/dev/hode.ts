class Hode {

    div:HTMLElement

    constructor() {
        this.div = document.createElement("hode")
        let game = document.getElementsByTagName("game")[0]
        game.appendChild(this.div)

        this.randomHodePos()

        this.div.addEventListener("click",() => this.removeHode())

    }

    removeHode() {
        console.log("he")
        this.div.style.display = "none"
    }

    randomHodePos(){
        let x = Math.random() * (window.innerWidth - this.div.clientWidth)
        let y = Math.random() * (window.innerHeight - this.div.clientHeight)

        let color = Math.random() * 360


        this.div.style.transform = `translate(${x}px, ${y}px)`
        this.div.style.filter = `hue-rotate(${color}deg)`
    }
}