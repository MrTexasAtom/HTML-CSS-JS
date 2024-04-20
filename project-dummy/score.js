let p1 = 5;

let p2 = 5;

let p3 = 5;

let narchicht = 0

let bild = 0

let player = 0;



function ce() {
    player += 1;
    console.log(player);
    var profiles = document.getElementsByClassName("profil-img");
    for (var i = 0; i < profiles.length; i++) {
        profiles[i].src = "/project-dummy/Profilbilder/Profilbild1.jpg";
    }
    toggleFolie('auswahl', 'zwei', 500)
}

function cz() {
    player += 2;
    console.log(player);
    var profiles = document.getElementsByClassName("profil-img");
    for (var i = 0; i < profiles.length; i++) {
        profiles[i].src = "/project-dummy/Profilbilder/Profilbild2.jpg";
    }
    toggleFolie('auswahl', 'zwei', 500);
}

function cd() {
    player += 3;
    console.log(player);
    var profiles = document.getElementsByClassName("profil-img");
    for (var i = 0; i < profiles.length; i++) {
        profiles[i].src = "/project-dummy/Profilbilder/Profilbild3.jpg";
    }
    toggleFolie('auswahl', 'zwei', 500)
}

function cv() {
    player += 4;
    console.log(player);
    var profiles = document.getElementsByClassName("profil-img");
    for (var i = 0; i < profiles.length; i++) {
        profiles[i].src = "/project-dummy/Profilbilder/Profilbild4.jpg";
    }
    toggleFolie('auswahl', 'zwei', 500)
}

function cf() {
    player += 5;
    console.log(player);
    var profiles = document.getElementsByClassName("profil-img");
    for (var i = 0; i < profiles.length; i++) {
        profiles[i].src = "/project-dummy/Profilbilder/Profilbild5.jpg";
    }
    toggleFolie('auswahl', 'zwei', 500)
}

function cs() {
    player += 6;
    console.log(player);
    var profiles = document.getElementsByClassName("profil-img");
    for (var i = 0; i < profiles.length; i++) {
        profiles[i].src = "/project-dummy/Profilbilder/Profilbild6.jpg";
    }
    toggleFolie('auswahl', 'zwei', 500)
}

function naricht1() {
    p2 += 1;
    narchicht += 1;

}

function naricht2() {
    p1 += 2;
    narchicht += 2;
    let text = document.querySelector("#texteins");
    text.innerText = "Das ist also die	Demo die	Emily erwähnt	hatte. An sich hättest du tatsächlich Zeit auf dem Schulweg	kurz dort vorbei zu	schauen	und	es wäre eine weitere Stimme	für	den	Umweltschutz.";
}

function c() {
    localStorage.clear('p1');
    localStorage.clear('p2');
    localStorage.clear('p3');
    localStorage.clear('narchicht');
    localStorage.clear('bild');
    localStorage.clear('player');
}

function naricht3() {
    narchicht += 3;
}

function demo() {
    p2 -= 1
}

function p1ja() {
    p1 += 2;
    
}

function p1nein() {
    p1 += 1;
    
}

function bildja() {
    p1 += 1;
    p2 -= 1;
    p3 -= 2;
    bild += 1;
    
}

function bildnein() {
    p1 -= 1;
    
}

function komentarn() {
    p2 -= 1;
}

function dagengen() {
    p2 -= 1;
}



function bildd() {
    if (bild === 1) {
        toggleFolie('zehnd', 'elfd', 500)
    } else {
        toggleFolie('zehnd', 'zwölfd', 500)
    }
}



function nachrichts() {
    if (narchicht === 1) {
        toggleFolie('siebensp', 'achts', 500)
    } else {
        toggleFolie('siebensp', 'neuns', 500)
    }
}

function ausgangakt1(getfolie) {
    console.log(getfolie)

    if (p2 <= 2) {
        toggleFolie( getfolie, 'ausgang3', 500)
    } else if (p2 === 4 || p2 === 3) {
        toggleFolie( getfolie, 'ausgang2', 500)
    } else if (p2 >= 5) {
        toggleFolie( getfolie, 'ausgang1', 500)
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


function nextpage() {
    window.location.href = '/project-dummy/akt2/index2.html';
    localStorage.setItem('p1', p1);
    localStorage.setItem('p2', p2);
    localStorage.setItem('p3', p3);
    localStorage.setItem('narchicht', narchicht);
    localStorage.setItem('bild', bild);
    localStorage.setItem('player', player);
  }