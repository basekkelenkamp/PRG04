class Ball {
    
    private div : HTMLElement
    private x : number
    private y : number
    private _xspeed : number = 1
    private _yspeed : number = 1
    
    public get xspeed() : number {return this._xspeed;} 
    public set xspeed(xspeed : number) {this._xspeed = xspeed;}    
    public get yspeed() : number {return this._yspeed;} 
    public set yspeed(yspeed : number) {this._yspeed = yspeed;}
    
    
    constructor() {
        this.div = document.createElement("ball")

        let game = document.getElementsByTagName("game")[0]
        game.appendChild(this.div)

        this.x = Math.random() * window.innerWidth
        this.y = Math.random() * window.innerHeight
    }
    
    public update() : void {
        this.x += this.xspeed
        this.y += this.yspeed

        this.div.style.transform = `translate(${this.x}px, ${this.y}px)`
    }
}