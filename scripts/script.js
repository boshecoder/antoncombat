const tap = document.getElementById("tap");
const anth = document.querySelector('h2');
const boost = document.getElementById("boost");
const tapaud = new Audio("sounds/tap.mp3");
let ants = localStorage.getItem("ants");
let boosts = localStorage.getItem("boosts");
let boost_cost = localStorage.getItem("boost_cost");

if (ants) {
    ants = parseInt(ants);
} else {
    ants = 0;
}

if (boosts) {
    boosts = parseFloat(boosts);
} else {
    boosts = 1.0
}

if (boost_cost) {
    boost_cost = parseInt(boost_cost);
} else {
    boost_cost = 50
}

anth.textContent = `${ants} $ANTON`;
boost.textContent = `Улучшить тап (${boost_cost} $ANTON)`

tap.addEventListener('click', function() {
    ants = parseInt(ants + 1 * boosts);
    tapaud.play();
    localStorage.setItem("ants", ants);
    anth.textContent = `${ants} $ANTON`;
});

boost.addEventListener('click', function() {
    if (ants >= boost_cost) {
        ants -= boost_cost;
        boosts += 0.25;
        boost_cost *= 2;
        boost.textContent = `Улучшить тап (${boost_cost} $ANTON)`;
        anth.textContent = `${ants} $ANTON`;
        localStorage.setItem("boost_cost", boost_cost);
        localStorage.setItem("boosts", boosts);
    }
});