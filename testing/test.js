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