const keys = [...document.querySelectorAll(".key")];


const pressKey = function (e) {
    const music = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    if (!music) return;
    music.play();
    keys.forEach(key => {
        const atribute = key.getAttribute("data-key");
        if (e.keyCode == atribute) {
            key.classList.add("play")
        }
    });
}

const keyUp = function () {
    keys.forEach(key => {
        key.classList.remove("play")
    })
}

window.addEventListener("keydown", pressKey)
window.addEventListener("keyup", keyUp)