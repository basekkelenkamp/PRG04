"use strict";
var Bubble = (function () {
    function Bubble() {
        var _this = this;
        this.div = document.createElement("bubble");
        var game = document.getElementsByTagName("game")[0];
        game.appendChild(this.div);
        this.randomBubblePos();
        this.div.addEventListener("click", function () { return _this.popBubble(); });
    }
    Bubble.prototype.popBubble = function () {
        console.log("he");
        this.div.style.display = "none";
    };
    Bubble.prototype.randomBubblePos = function () {
        var x = Math.random() * (window.innerWidth - this.div.clientWidth);
        var y = Math.random() * (window.innerHeight - this.div.clientHeight);
        this.div.style.transform = "translate(" + x + "px, " + y + "px)";
    };
    return Bubble;
}());
var Fish = (function () {
    function Fish() {
        var _this = this;
        this.div = document.createElement("fish");
        var game = document.getElementsByTagName("game")[0];
        game.appendChild(this.div);
        this.randomFishPos();
        this.div.addEventListener("click", function () { return _this.killFish(); });
    }
    Fish.prototype.killFish = function () {
        console.log(this.div);
        this.div.classList.add("dead");
    };
    Fish.prototype.randomFishPos = function () {
        var x = Math.random() * (window.innerWidth - this.div.clientWidth);
        var y = Math.random() * (window.innerHeight - this.div.clientHeight);
        console.log("fish on X " + x + ", Y " + y);
        var color = Math.random() * 360;
        this.div.style.transform = "translate(" + x + "px, " + y + "px)";
        this.div.style.filter = "hue-rotate(" + color + "deg)";
    };
    return Fish;
}());
var Game = (function () {
    function Game() {
        console.log("Game was created!");
        this.fish = new Fish();
        this.bubble = new Bubble();
        this.hode = new Hode();
    }
    return Game;
}());
window.addEventListener("load", function () { return new Game(); });
var Hode = (function () {
    function Hode() {
        var _this = this;
        this.div = document.createElement("hode");
        var game = document.getElementsByTagName("game")[0];
        game.appendChild(this.div);
        this.randomHodePos();
        this.div.addEventListener("click", function () { return _this.removeHode(); });
    }
    Hode.prototype.removeHode = function () {
        console.log("he");
        this.div.style.display = "none";
    };
    Hode.prototype.randomHodePos = function () {
        var x = Math.random() * (window.innerWidth - this.div.clientWidth);
        var y = Math.random() * (window.innerHeight - this.div.clientHeight);
        var color = Math.random() * 360;
        this.div.style.transform = "translate(" + x + "px, " + y + "px)";
        this.div.style.filter = "hue-rotate(" + color + "deg)";
    };
    return Hode;
}());
//# sourceMappingURL=main.js.map