
window.addEventListener('load', () => {

    //get game element
    let game = document.getElementsByTagName("game")[0]



    // console.log(`x = ${randomX}, y = ${randomY}`);
    console.log(`${window.innerWidth} x ${window.innerHeight}`);


        let fishes = 100;
        for(let i = 0; i < fishes; i++){

        //random
        let randomX = Math.random() * window.innerWidth + 100;
        let randomY = Math.random() * window.innerHeight + 100;
        let randomBubbleX = Math.random() * window.innerWidth;
        let randomBubbleY = Math.random() * window.innerHeight;
        let randomHue = Math.random() * 360;

        // bubble element
        let bubble = document.createElement("bubble");
        game.appendChild(bubble);
        bubble.style.transform = `translate(${randomBubbleX}px, ${randomBubbleY}px)`;
        bubble.dataset.id = i;
        bubble.dataset.type = "bubble";

        // vis element
        let fish = document.createElement("fish");
        game.appendChild(fish);
        fish.style.transform = `translate(${randomX}px, ${randomY}px)`;
        fish.style.filter = `hue-rotate(${randomHue}deg)`;
        fish.dataset.id = i;
        fish.dataset.type = "fish";
        
        
        fish.addEventListener("click", kill)
        bubble.addEventListener("click", pop)
        
        }


    function kill(e){
        let fishElement = e.target;
        fishElement.classList.add("dead");
        console.log(e.target)
    }
    
    function pop(e){
        let bubbleElement = e.target;
        bubbleElement.style.display = "none";
    }

})

