function toggleFolie(startId, endId, duration) {
    var startElement = document.getElementById(startId);
    var endElement = document.getElementById(endId);
  
    startElement.style.transition = "opacity " + duration / 1000 + "s";
    startElement.style.opacity = 0;
  
    setTimeout(function () {
      startElement.classList.remove("yes");
      startElement.classList.add("no");
  
      endElement.style.opacity = 0;
      endElement.classList.remove("no");
      endElement.classList.add("yes");
  
      startElement.style.transition = "opacity " + duration / 1000 + "s";
  
      requestAnimationFrame(function () {
        setTimeout(function () {
          endElement.style.opacity = 1;
          startElement.style.opacity = 1;
        }, 200);
      });
  
      setTimeout(function () {
        startElement.style.transition = "";
      }, duration);
    }, duration / 2);
  }

function end() {
  window.location.href = '/project-dummy/index.html';
}

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