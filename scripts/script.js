const tap = document.getElementById("tap");
const anth = document.querySelector('h2');
const tapaud = new Audio("sounds/tap.mp3");
let ants = localStorage.getItem("ants");

if (ants) {
    ants = parseInt(ants);
} else {
    ants = 0;
}
anth.textContent = `${ants} $ANTON`;


tap.addEventListener('click', function() {
    ants += 1;
    tapaud.play();
    localStorage.setItem("ants", ants);
    anth.textContent = `${ants} $ANTON`;
});