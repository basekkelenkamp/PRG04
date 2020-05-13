class Fish {

    div: HTMLElement
    
    constructor() {
        this.div = document.createElement("fish")
        let game = document.getElementsByTagName("game")[0]
        game.appendChild(this.div)

        this.randomFishPos()
        
        this.div.addEventListener("click", () => this.killFish())
    }

    killFish(){
        console.log(this.div)
        this.div.classList.add("dead")

    }

    randomFishPos(){

        let x = Math.random() * (window.innerWidth - this.div.clientWidth)
        let y = Math.random() * (window.innerHeight - this.div.clientHeight)
        console.log(`fish on X ${x}, Y ${y}`)

        let color = Math.random() * 360

        this.div.style.transform = `translate(${x}px, ${y}px)`
        this.div.style.filter = `hue-rotate(${color}deg)`

    }
}