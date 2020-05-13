class Bubble {

    div:HTMLElement

    constructor() {
        this.div = document.createElement("bubble")
        let game = document.getElementsByTagName("game")[0]
        game.appendChild(this.div)

        this.randomBubblePos()

        this.div.addEventListener("click",() => this.popBubble())

    }

    popBubble() {
        console.log("he")
        this.div.style.display = "none"
    }

    randomBubblePos(){
        let x = Math.random() * (window.innerWidth - this.div.clientWidth)
        let y = Math.random() * (window.innerHeight - this.div.clientHeight)


        this.div.style.transform = `translate(${x}px, ${y}px)`
    }
}