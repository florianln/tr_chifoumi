let scoreJ1 = 0;
let scoreJ2 = 0;

let nbTour = 1;

let randomChoice = function () {
    let choice = Math.floor(Math.random() * 3);
    if (choice === 0) {
        return "pierre";
    } else if (choice === 1) {
        return "ciseaux";
    } else if (choice === 2) {
        return "feuille";
    }
};

function chifoumi(j1, j2) {
    console.log("Tour n°" + nbTour++);
    console.log("Choix du joueur 1 : " + j1 + " - Choix du joueur 2 : " + j2);
    if (j1 === j2) {
        console.log("Egalité");
    } else if (j1 === "pierre" && j2 === "ciseaux" || j1 === "ciseaux" && j2 === "feuille" || j1 === "feuille" && j2 === "pierre") {
        scoreJ1++;
        console.log("Joueur 1 gagne cette manche");
    } else if (j1 === "pierre" && j2 === "feuille" || j1 === "ciseaux" && j2 === "pierre" || j1 === "feuille" && j2 === "ciseaux") {
        scoreJ2++;
        console.log("Joueur 2 gagne cette manche");
    }
}

while (scoreJ1 < 2 && scoreJ2 < 2) {
    let j1 = randomChoice();
    let j2 = randomChoice();
    chifoumi(j1, j2);
    console.log("score joueur 1 = " + scoreJ1);
    console.log("score joueur 2 = " + scoreJ2);
    console.log("-------");
}

if (scoreJ1 === 2) {
    console.log("VAINQUEUR : joueur 1");
} else if (scoreJ2 === 2) {
    console.log("VAINQUEUR : joueur 2");
}

