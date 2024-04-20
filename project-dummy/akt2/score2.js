let p1 = localStorage.getItem('p1');

let p2 = localStorage.getItem('p2');

let p3 = localStorage.getItem('p3');

let narchicht = localStorage.getItem('narchicht');

let bild = localStorage.getItem('bild');

let player = localStorage.getItem('player');

if (player === 1) {
    var profiles = document.getElementsByClassName("profil-img");
    for (var i = 0; i < profiles.length; i++) {
        profiles[i].src = "/project-dummy/Profilbilder/Profilbild1.jpg";
    }
}

if (player === 2) {
    var profiles = document.getElementsByClassName("profil-img");
    for (var i = 0; i < profiles.length; i++) {
        profiles[i].src = "/project-dummy/Profilbilder/Profilbild2.jpg";
    }
}

if (player === 3) {
    var profiles = document.getElementsByClassName("profil-img");
    for (var i = 0; i < profiles.length; i++) {
        profiles[i].src = "/project-dummy/Profilbilder/Profilbild3.jpg";
    }
}

if (player === 4) {
    var profiles = document.getElementsByClassName("profil-img");
    for (var i = 0; i < profiles.length; i++) {
        profiles[i].src = "/project-dummy/Profilbilder/Profilbild4.jpg";
    }
}

if (player === 5) {
    var profiles = document.getElementsByClassName("profil-img");
    for (var i = 0; i < profiles.length; i++) {
        profiles[i].src = "/project-dummy/Profilbilder/Profilbild5.jpg";
    }
}

if (player === 6) {
    var profiles = document.getElementsByClassName("profil-img");
    for (var i = 0; i < profiles.length; i++) {
        profiles[i].src = "/project-dummy/Profilbilder/Profilbild6.jpg";
    }
}

function i(folie) {
    var element = document.getElementById(folie);
    console.log("Info:", element)
    console.log("Var P1:", p1)
    console.log("Var P2:", p2)
    console.log("Var P3:", p3)
    console.log("Var Narchicht:", narchicht)
    console.log("Var Bild:", bild)
    console.log("Var Player:", player)
}

function bildd() {
    if (bild === 1) {
        toggleFolie('neun', 'zehn', 500)
    } else {
        toggleFolie('neun', 'elf', 500)
    }
}


function c() {
    localStorage.clear('p1');
    localStorage.clear('p2');
    localStorage.clear('p3');
    localStorage.clear('narchicht');
    localStorage.clear('bild');
}

function ausgang(getfolie) {

    if (p1 > p2 && p1 >= 4) {
        toggleFolie( getfolie.id, 'dreiundzwanzig', 500)
    } else if (p1 < p2 && p2 >= 4) {
        toggleFolie( getfolie.id, 'sechszehn', 500)
    } else if (p1 === p2 && p1 >= 4) {
        toggleFolie( getfolie.id, 'zwanzig', 500)
    } else {
        toggleFolie( getfolie.id, 'sechsundzwanzig', 500)
    }
    
}