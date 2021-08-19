let count = 0;
let pocet = 1;
function Vyber() {
    count++;
    let img = document.getElementById("ob");
    if (count === 4) {
        count = 1;
    }
    switch (count) {
        case 1: {
            img.src = "scissors.png";
            break;
        }
        case 2: {
            img.src = "paper.png";
            break;
        }
        case 3: {
            img.src = "stone.png";
            break;
        }
    }
}

function MyFunction() {
    let BotChoose = Math.floor(Math.random() * 3) + 1;
    let img = document.getElementById("ob2");
    switch (BotChoose) {
        case 1: {
            img.src = "scissors.png";
            if (count === 2) {
                Prohra()
            }
            else if (count === 3 || count === 0) {
                Vyhra();
            }
            else {
                remiza();
            }
            break;
        }
        case 2: {
            img.src = "paper.png";
            if (count === 1) {
                Vyhra();
            }
            else if (count === 3 || count === 0) {
                Prohra()
            }
            else {
                remiza();
            }
            break;
        }
        case 3: {
            img.src = "stone.png";
            if (count === 1) {
                Prohra()
            }
            else if (count === 2) {
                Vyhra();
            }
            else {
                remiza();
            }
            break;
        }
    }
}
function Vyhra() {
    document.getElementById("rozhodnuti").innerHTML = "Vyhrál jsi!";
    pocet++;
    document.getElementById("poradi").innerHTML = "Výher v řadě: " + pocet;

}
function Prohra() {
    document.getElementById("rozhodnuti").innerHTML = "Prohrál jsi!";
    pocet = 0;
    document.getElementById("poradi").innerHTML = "Výher v řadě: " + pocet;
}
function remiza() {
    document.getElementById("rozhodnuti").innerHTML = "Remíza!";
    pocet = 0;
    document.getElementById("poradi").innerHTML = "Výher v řadě: " + pocet
}