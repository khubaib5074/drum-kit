
for (var i = 0; i < document.querySelectorAll(".drum").length; i++) {
    document.querySelectorAll("button")[i].addEventListener("click", function () {
        var buttonInnerHTML = this.innerHTML;
        playSound(buttonInnerHTML);
        buttonAnimation(buttonInnerHTML);
    });
}

document.addEventListener("keydown", function (event){
    playSound(event.key);
    buttonAnimation(event.key);
});


function playSound(key) {
    
    switch (key) {
        case "w":
            var sound = new Audio("sounds/tom-1.mp3");
            return sound.play();
            break;
        case "a":
            var sound = new Audio("sounds/tom-2.mp3");
            return sound.play();
            break;
        case "s":
            var sound = new Audio("sounds/tom-3.mp3");
            return sound.play();
            break;
        case "d":
            var sound = new Audio("sounds/tom-4.mp3");
            return sound.play();
            break;
        case "j":
            var sound = new Audio("sounds/snare.mp3");
            return sound.play();
            break;
        case "k":
            var sound = new Audio("sounds/crash.mp3");
            return sound.play();
            break;
        case "l":
            var sound = new Audio("sounds/kick-bass.mp3");
            return sound.play();
            break;
        default:
            console.log(buttonInnerHTML);
            break;
    }
};        

function buttonAnimation(detect) {
    var activeButton = document.querySelector("." + detect);
    activeButton.classList.add("pressed");
    setTimeout(function() {
        activeButton.classList.remove("pressed")
    }, 100);
}