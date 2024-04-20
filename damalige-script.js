function start() {
    var eins = document.getElementById("eins");
    eins.style.opacity = 0; 
    setTimeout(function () {
      eins.classList.remove("yes");
      eins.classList.add("no");
  
      var zwei = document.getElementById("zwei");
      zwei.style.opacity = 0;
      zwei.classList.remove("no");
      zwei.classList.add("yes");
  
  
      setTimeout(function () {
        zwei.style.opacity = 1;
      }, 100);
      
      eins.style.opacity = 1;
    }, 2000);
  }
  
  
  function folie2() {
    var zwei = document.getElementById("zwei");
    zwei.style.transition = "opacity 0.5s";
    zwei.style.opacity = 0;
  
    setTimeout(function () {
      zwei.classList.remove("yes");
      zwei.classList.add("no");
  
      var drei = document.getElementById("drei");
      drei.style.opacity = 0;
      drei.classList.remove("no");
      drei.classList.add("yes");
  
      zwei.style.transition = "opacity 0.5s";
  
      requestAnimationFrame(function () {
        setTimeout(function () {
          drei.style.opacity = 1;
          zwei.style.opacity = 1; 
        }, 200);
      });
  
      setTimeout(function () {
        zwei.style.transition = "";
      }, 1000);
    }, 500);
  }
  
  function folie3() {
    var drei = document.getElementById("drei");
    drei.style.transition = "opacity 0.5s";
    drei.style.opacity = 0;
  
    setTimeout(function () {
      drei.classList.remove("yes");
      drei.classList.add("no");
  
      var vier = document.getElementById("vier");
      vier.style.opacity = 0;
      vier.classList.remove("no");
      vier.classList.add("yes");
  
      drei.style.transition = "opacity 0.5s";
  
      requestAnimationFrame(function () {
        setTimeout(function () {
          drei.style.opacity = 1;
          vier.style.opacity = 1; 
        }, 200);
      });
  
      setTimeout(function () {
        drei.style.transition = "";
      }, 1000);
    }, 500);
  }
  
  function folie4() {
    var drei = document.getElementById("drei");
    drei.style.transition = "opacity 0.5s";
    drei.style.opacity = 0;
  
    setTimeout(function () {
      drei.classList.remove("yes");
      drei.classList.add("no");
  
      var vier = document.getElementById("vier");
      vier.style.opacity = 0;
      vier.classList.remove("no");
      vier.classList.add("yes");
  
      drei.style.transition = "opacity 0.5s";
  
      requestAnimationFrame(function () {
        setTimeout(function () {
          vier.style.opacity = 1;
          drei.style.opacity = 1; 
        }, 200);
      });
  
      setTimeout(function () {
        drei.style.transition = "";
      }, 1000);
    }, 500);
  }
  
  function folie5() {
    var zwei = document.getElementById("drei");
    zwei.style.transition = "opacity 0.5s";
    zwei.style.opacity = 0;
  
    setTimeout(function () {
      zwei.classList.remove("yes");
      zwei.classList.add("no");
  
      var drei = document.getElementById("fünf");
      drei.style.opacity = 0;
      drei.classList.remove("no");
      drei.classList.add("yes");
  
      zwei.style.transition = "opacity 0.5s";
  
      requestAnimationFrame(function () {
        setTimeout(function () {
          drei.style.opacity = 1;
          zwei.style.opacity = 1; 
        }, 200);
      });
  
      setTimeout(function () {
        zwei.style.transition = "";
      }, 1000);
    }, 500);
  }
  
  function folie6() {
    var zwei = document.getElementById("fünf");
    zwei.style.transition = "opacity 0.5s";
    zwei.style.opacity = 0;
  
    setTimeout(function () {
      zwei.classList.remove("yes");
      zwei.classList.add("no");
  
      var drei = document.getElementById("sechs");
      drei.style.opacity = 0;
      drei.classList.remove("no");
      drei.classList.add("yes");
  
      zwei.style.transition = "opacity 0.5s";
  
      requestAnimationFrame(function () {
        setTimeout(function () {
          drei.style.opacity = 1;
          zwei.style.opacity = 1; 
        }, 200);
      });
  
      setTimeout(function () {
        zwei.style.transition = "";
      }, 1000);
    }, 500);
  }
  
  function folie6_2() {
    var zwei = document.getElementById("vier");
    zwei.style.transition = "opacity 0.5s";
    zwei.style.opacity = 0;
  
    setTimeout(function () {
      zwei.classList.remove("yes");
      zwei.classList.add("no");
  
      var drei = document.getElementById("sechs");
      drei.style.opacity = 0;
      drei.classList.remove("no");
      drei.classList.add("yes");
  
      zwei.style.transition = "opacity 0.5s";
  
      requestAnimationFrame(function () {
        setTimeout(function () {
          drei.style.opacity = 1;
          zwei.style.opacity = 1; 
        }, 200);
      });
  
      setTimeout(function () {
        zwei.style.transition = "";
      }, 1000);
    }, 500);
  }
  
  function folie6_3() {
    var zwei = document.getElementById("zwei");
    zwei.style.transition = "opacity 0.5s";
    zwei.style.opacity = 0;
  
    setTimeout(function () {
      zwei.classList.remove("yes");
      zwei.classList.add("no");
  
      var drei = document.getElementById("sechs");
      drei.style.opacity = 0;
      drei.classList.remove("no");
      drei.classList.add("yes");
  
      zwei.style.transition = "opacity 0.5s";
  
      requestAnimationFrame(function () {
        setTimeout(function () {
          drei.style.opacity = 1;
          zwei.style.opacity = 1; 
        }, 200);
      });
  
      setTimeout(function () {
        zwei.style.transition = "";
      }, 1000);
    }, 500);
  }
  
  function folie7d() {
    var zwei = document.getElementById("sechs");
    zwei.style.transition = "opacity 0.5s";
    zwei.style.opacity = 0;
  
    setTimeout(function () {
      zwei.classList.remove("yes");
      zwei.classList.add("no");
  
      var drei = document.getElementById("siebend");
      drei.style.opacity = 0;
      drei.classList.remove("no");
      drei.classList.add("yes");
  
      zwei.style.transition = "opacity 0.5s";
  
      requestAnimationFrame(function () {
        setTimeout(function () {
          drei.style.opacity = 1;
          zwei.style.opacity = 1; 
        }, 200);
      });
  
      setTimeout(function () {
        zwei.style.transition = "";
      }, 1000);
    }, 500);
  }
  
  
  function folie8d() {
    var zwei = document.getElementById("siebend");
    zwei.style.transition = "opacity 0.5s";
    zwei.style.opacity = 0;
  
    setTimeout(function () {
      zwei.classList.remove("yes");
      zwei.classList.add("no");
  
      var drei = document.getElementById("achtd");
      drei.style.opacity = 0;
      drei.classList.remove("no");
      drei.classList.add("yes");
  
      zwei.style.transition = "opacity 0.5s";
  
      requestAnimationFrame(function () {
        setTimeout(function () {
          drei.style.opacity = 1;
          zwei.style.opacity = 1; 
        }, 200);
      });
  
      setTimeout(function () {
        zwei.style.transition = "";
      }, 1000);
    }, 500);
  }
  
  function folie9_1d() {
    var zwei = document.getElementById("siebend");
    zwei.style.transition = "opacity 0.5s";
    zwei.style.opacity = 0;
  
    setTimeout(function () {
      zwei.classList.remove("yes");
      zwei.classList.add("no");
  
      var drei = document.getElementById("neund");
      drei.style.opacity = 0;
      drei.classList.remove("no");
      drei.classList.add("yes");
  
      zwei.style.transition = "opacity 0.5s";
  
      requestAnimationFrame(function () {
        setTimeout(function () {
          drei.style.opacity = 1;
          zwei.style.opacity = 1; 
        }, 200);
      });
  
      setTimeout(function () {
        zwei.style.transition = "";
      }, 1000);
    }, 500);
  }
  
  function folie9_2d() {
    var zwei = document.getElementById("achtd");
    zwei.style.transition = "opacity 0.5s";
    zwei.style.opacity = 0;
  
    setTimeout(function () {
      zwei.classList.remove("yes");
      zwei.classList.add("no");
  
      var drei = document.getElementById("neund");
      drei.style.opacity = 0;
      drei.classList.remove("no");
      drei.classList.add("yes");
  
      zwei.style.transition = "opacity 0.5s";
  
      requestAnimationFrame(function () {
        setTimeout(function () {
          drei.style.opacity = 1;
          zwei.style.opacity = 1; 
        }, 200);
      });
  
      setTimeout(function () {
        zwei.style.transition = "";
      }, 1000);
    }, 500);
  }
  
  function folie10d() {
    var zwei = document.getElementById("achtd");
    zwei.style.transition = "opacity 0.5s";
    zwei.style.opacity = 0;
  
    setTimeout(function () {
      zwei.classList.remove("yes");
      zwei.classList.add("no");
  
      var drei = document.getElementById("zehnd");
      drei.style.opacity = 0;
      drei.classList.remove("no");
      drei.classList.add("yes");
  
      zwei.style.transition = "opacity 0.5s";
  
      requestAnimationFrame(function () {
        setTimeout(function () {
          drei.style.opacity = 1;
          zwei.style.opacity = 1; 
        }, 200);
      });
  
      setTimeout(function () {
        zwei.style.transition = "";
      }, 1000);
    }, 500);
  }
  
  function folie11d() {
    var zwei = document.getElementById("zehnd");
    zwei.style.transition = "opacity 0.5s";
    zwei.style.opacity = 0;
  
    setTimeout(function () {
      zwei.classList.remove("yes");
      zwei.classList.add("no");
  
      var drei = document.getElementById("elfd");
      drei.style.opacity = 0;
      drei.classList.remove("no");
      drei.classList.add("yes");
  
      zwei.style.transition = "opacity 0.5s";
  
      requestAnimationFrame(function () {
        setTimeout(function () {
          drei.style.opacity = 1;
          zwei.style.opacity = 1; 
        }, 200);
      });
  
      setTimeout(function () {
        zwei.style.transition = "";
      }, 1000);
    }, 500);
  }
  
  function folie12d() {
    var zwei = document.getElementById("zehnd");
    zwei.style.transition = "opacity 0.5s";
    zwei.style.opacity = 0;
  
    setTimeout(function () {
      zwei.classList.remove("yes");
      zwei.classList.add("no");
  
      var drei = document.getElementById("zölfd");
      drei.style.opacity = 0;
      drei.classList.remove("no");
      drei.classList.add("yes");
  
      zwei.style.transition = "opacity 0.5s";
  
      requestAnimationFrame(function () {
        setTimeout(function () {
          drei.style.opacity = 1;
          zwei.style.opacity = 1; 
        }, 200);
      });
  
      setTimeout(function () {
        zwei.style.transition = "";
      }, 1000);
    }, 500);
  }
  
  function folie13d() {
    var zwei = document.getElementById("elfd");
    zwei.style.transition = "opacity 0.5s";
    zwei.style.opacity = 0;
  
    setTimeout(function () {
      zwei.classList.remove("yes");
      zwei.classList.add("no");
  
      var drei = document.getElementById("dreizehnd");
      drei.style.opacity = 0;
      drei.classList.remove("no");
      drei.classList.add("yes");
  
      zwei.style.transition = "opacity 0.5s";
  
      requestAnimationFrame(function () {
        setTimeout(function () {
          drei.style.opacity = 1;
          zwei.style.opacity = 1; 
        }, 200);
      });
  
      setTimeout(function () {
        zwei.style.transition = "";
      }, 1000);
    }, 500);
  }
  
  function folie14d() {
    var zwei = document.getElementById("elfd");
    zwei.style.transition = "opacity 0.5s";
    zwei.style.opacity = 0;
  
    setTimeout(function () {
      zwei.classList.remove("yes");
      zwei.classList.add("no");
  
      var drei = document.getElementById("vierzehnd");
      drei.style.opacity = 0;
      drei.classList.remove("no");
      drei.classList.add("yes");
  
      zwei.style.transition = "opacity 0.5s";
  
      requestAnimationFrame(function () {
        setTimeout(function () {
          drei.style.opacity = 1;
          zwei.style.opacity = 1; 
        }, 200);
      });
  
      setTimeout(function () {
        zwei.style.transition = "";
      }, 1000);
    }, 500);
  }
  
  function folie15_1d() {
    var zwei = document.getElementById("vierzehnd");
    zwei.style.transition = "opacity 0.5s";
    zwei.style.opacity = 0;
  
    setTimeout(function () {
      zwei.classList.remove("yes");
      zwei.classList.add("no");
  
      var drei = document.getElementById("fünfzehnd");
      drei.style.opacity = 0;
      drei.classList.remove("no");
      drei.classList.add("yes");
  
      zwei.style.transition = "opacity 0.5s";
  
      requestAnimationFrame(function () {
        setTimeout(function () {
          drei.style.opacity = 1;
          zwei.style.opacity = 1; 
        }, 200);
      });
  
      setTimeout(function () {
        zwei.style.transition = "";
      }, 1000);
    }, 500);
  }
  
  function folie15_2d() {
    // Hier score p2 -1 bitte
    var zwei = document.getElementById("vierzehnd");
    zwei.style.transition = "opacity 0.5s";
    zwei.style.opacity = 0;
  
    setTimeout(function () {
      zwei.classList.remove("yes");
      zwei.classList.add("no");
  
      var drei = document.getElementById("fünfzehnd");
      drei.style.opacity = 0;
      drei.classList.remove("no");
      drei.classList.add("yes");
  
      zwei.style.transition = "opacity 0.5s";
  
      requestAnimationFrame(function () {
        setTimeout(function () {
          drei.style.opacity = 1;
          zwei.style.opacity = 1; 
        }, 200);
      });
  
      setTimeout(function () {
        zwei.style.transition = "";
      }, 1000);
    }, 500);
  }
  
  function folie16_1d() {
    var zwei = document.getElementById("zölfd");
    zwei.style.transition = "opacity 0.5s";
    zwei.style.opacity = 0;
  
    setTimeout(function () {
      zwei.classList.remove("yes");
      zwei.classList.add("no");
  
      var drei = document.getElementById("sechszehnd");
      drei.style.opacity = 0;
      drei.classList.remove("no");
      drei.classList.add("yes");
  
      zwei.style.transition = "opacity 0.5s";
  
      requestAnimationFrame(function () {
        setTimeout(function () {
          drei.style.opacity = 1;
          zwei.style.opacity = 1; 
        }, 200);
      });
  
      setTimeout(function () {
        zwei.style.transition = "";
      }, 1000);
    }, 500);
  }
  
  function folie16_2d() {
    var zwei = document.getElementById("dreizehnd");
    zwei.style.transition = "opacity 0.5s";
    zwei.style.opacity = 0;
  
    setTimeout(function () {
      zwei.classList.remove("yes");
      zwei.classList.add("no");
  
      var drei = document.getElementById("sechszehnd");
      drei.style.opacity = 0;
      drei.classList.remove("no");
      drei.classList.add("yes");
  
      zwei.style.transition = "opacity 0.5s";
  
      requestAnimationFrame(function () {
        setTimeout(function () {
          drei.style.opacity = 1;
          zwei.style.opacity = 1; 
        }, 200);
      });
  
      setTimeout(function () {
        zwei.style.transition = "";
      }, 1000);
    }, 500);
  }
  
  function folie17d() {
    var zwei = document.getElementById("sechszehnd");
    zwei.style.transition = "opacity 0.5s";
    zwei.style.opacity = 0;
  
    setTimeout(function () {
      zwei.classList.remove("yes");
      zwei.classList.add("no");
  
      var drei = document.getElementById("siebzehnd");
      drei.style.opacity = 0;
      drei.classList.remove("no");
      drei.classList.add("yes");
  
      zwei.style.transition = "opacity 0.5s";
  
      requestAnimationFrame(function () {
        setTimeout(function () {
          drei.style.opacity = 1;
          zwei.style.opacity = 1; 
        }, 200);
      });
  
      setTimeout(function () {
        zwei.style.transition = "";
      }, 1000);
    }, 500);
  }
  
  function ausgangakt1_1d() {
    var zwei = document.getElementById("fünfzehnd");
    zwei.style.transition = "opacity 0.5s";
    zwei.style.opacity = 0;
  
    setTimeout(function () {
      zwei.classList.remove("yes");
      zwei.classList.add("no");
  
      // hier muss ende entschieden werden sihe flussdiagramm
      // var drei = document.getElementById("siebzehnd");
      drei.style.opacity = 0;
      drei.classList.remove("no");
      drei.classList.add("yes");
  
      zwei.style.transition = "opacity 0.5s";
  
      requestAnimationFrame(function () {
        setTimeout(function () {
          drei.style.opacity = 1;
          zwei.style.opacity = 1; 
        }, 200);
      });
  
      setTimeout(function () {
        zwei.style.transition = "";
      }, 1000);
    }, 500);
  }
  
  function ausgangakt1_2d() {
    var zwei = document.getElementById("siebzehnd");
    zwei.style.transition = "opacity 0.5s";
    zwei.style.opacity = 0;
  
    setTimeout(function () {
      zwei.classList.remove("yes");
      zwei.classList.add("no");
  
      // hier muss ende entschieden werden sihe flussdiagramm
      // var drei = document.getElementById("siebzehnd");
      drei.style.opacity = 0;
      drei.classList.remove("no");
      drei.classList.add("yes");
  
      zwei.style.transition = "opacity 0.5s";
  
      requestAnimationFrame(function () {
        setTimeout(function () {
          drei.style.opacity = 1;
          zwei.style.opacity = 1; 
        }, 200);
      });
  
      setTimeout(function () {
        zwei.style.transition = "";
      }, 1000);
    }, 500);
  }
  
  function folie7s() {
    var zwei = document.getElementById("sechs");
    zwei.style.transition = "opacity 0.5s";
    zwei.style.opacity = 0;
  
    setTimeout(function () {
      zwei.classList.remove("yes");
      zwei.classList.add("no");
  
      var drei = document.getElementById("siebens");
      drei.style.opacity = 0;
      drei.classList.remove("no");
      drei.classList.add("yes");
  
      zwei.style.transition = "opacity 0.5s";
  
      requestAnimationFrame(function () {
        setTimeout(function () {
          drei.style.opacity = 1;
          zwei.style.opacity = 1; 
        }, 200);
      });
  
      setTimeout(function () {
        zwei.style.transition = "";
      }, 1000);
    }, 500);
  }
  
  function nachrichts() {
    if (narchicht === 2 ) {
      
      var zwei = document.getElementById("siebens");
      zwei.style.transition = "opacity 0.5s";
      zwei.style.opacity = 0;
    
      setTimeout(function () {
        zwei.classList.remove("yes");
        zwei.classList.add("no");
    
    
        var drei = document.getElementById("achts");
        drei.style.opacity = 0;
        drei.classList.remove("no");
        drei.classList.add("yes");
    
        zwei.style.transition = "opacity 0.5s";
    
        requestAnimationFrame(function () {
          setTimeout(function () {
            drei.style.opacity = 1;
            zwei.style.opacity = 1; 
          }, 200);
        });
    
        setTimeout(function () {
          zwei.style.transition = "";
        }, 1000);
      }, 500);
  
  } else {
  

    
  }
  
  }
  
  
  function folie10s() {
    var zwei = document.getElementById("achts");
    zwei.style.transition = "opacity 0.5s";
    zwei.style.opacity = 0;
  
    setTimeout(function () {
      zwei.classList.remove("yes");
      zwei.classList.add("no");
  
      var drei = document.getElementById("zehns");
      drei.style.opacity = 0;
      drei.classList.remove("no");
      drei.classList.add("yes");
  
      zwei.style.transition = "opacity 0.5s";
  
      requestAnimationFrame(function () {
        setTimeout(function () {
          drei.style.opacity = 1;
          zwei.style.opacity = 1; 
        }, 200);
      });
  
      setTimeout(function () {
        zwei.style.transition = "";
      }, 1000);
    }, 500);
  }
  
  function folie11s() {
    var zwei = document.getElementById("achts");
    zwei.style.transition = "opacity 0.5s";
    zwei.style.opacity = 0;
  
    setTimeout(function () {
      zwei.classList.remove("yes");
      zwei.classList.add("no");
  
      var drei = document.getElementById("elfs");
      drei.style.opacity = 0;
      drei.classList.remove("no");
      drei.classList.add("yes");
  
      zwei.style.transition = "opacity 0.5s";
  
      requestAnimationFrame(function () {
        setTimeout(function () {
          drei.style.opacity = 1;
          zwei.style.opacity = 1; 
        }, 200);
      });
  
      setTimeout(function () {
        zwei.style.transition = "";
      }, 1000);
    }, 500);
  }
  
  function folie12_1s() {
    var zwei = document.getElementById("elfs");
    zwei.style.transition = "opacity 0.5s";
    zwei.style.opacity = 0;
  
    setTimeout(function () {
      zwei.classList.remove("yes");
      zwei.classList.add("no");
  
      var drei = document.getElementById("zwölfs");
      drei.style.opacity = 0;
      drei.classList.remove("no");
      drei.classList.add("yes");
  
      zwei.style.transition = "opacity 0.5s";
  
      requestAnimationFrame(function () {
        setTimeout(function () {
          drei.style.opacity = 1;
          zwei.style.opacity = 1; 
        }, 200);
      });
  
      setTimeout(function () {
        zwei.style.transition = "";
      }, 1000);
    }, 500);
  }
  
  function folie12_2s() {
    var zwei = document.getElementById("zehns");
    zwei.style.transition = "opacity 0.5s";
    zwei.style.opacity = 0;
  
    setTimeout(function () {
      zwei.classList.remove("yes");
      zwei.classList.add("no");
  
      var drei = document.getElementById("zwölfs");
      drei.style.opacity = 0;
      drei.classList.remove("no");
      drei.classList.add("yes");
  
      zwei.style.transition = "opacity 0.5s";
  
      requestAnimationFrame(function () {
        setTimeout(function () {
          drei.style.opacity = 1;
          zwei.style.opacity = 1; 
        }, 200);
      });
  
      setTimeout(function () {
        zwei.style.transition = "";
      }, 1000);
    }, 500);
  }
  
  function folie12_3s() {
    var zwei = document.getElementById("neuns");
    zwei.style.transition = "opacity 0.5s";
    zwei.style.opacity = 0;
  
    setTimeout(function () {
      zwei.classList.remove("yes");
      zwei.classList.add("no");
  
      var drei = document.getElementById("zwölfs");
      drei.style.opacity = 0;
      drei.classList.remove("no");
      drei.classList.add("yes");
  
      zwei.style.transition = "opacity 0.5s";
  
      requestAnimationFrame(function () {
        setTimeout(function () {
          drei.style.opacity = 1;
          zwei.style.opacity = 1; 
        }, 200);
      });
  
      setTimeout(function () {
        zwei.style.transition = "";
      }, 1000);
    }, 500);
  }
  
  function ausgangakt1d() {
    var zwei = document.getElementById("zwölfs");
    zwei.style.transition = "opacity 0.5s";
    zwei.style.opacity = 0;
  
    setTimeout(function () {
      zwei.classList.remove("yes");
      zwei.classList.add("no");
  
      // var drei = document.getElementById("siebzehnd");
      drei.style.opacity = 0;
      drei.classList.remove("no");
      drei.classList.add("yes");
  
      zwei.style.transition = "opacity 0.5s";
  
      requestAnimationFrame(function () {
        setTimeout(function () {
          drei.style.opacity = 1;
          zwei.style.opacity = 1; 
        }, 200);
      });
  
      setTimeout(function () {
        zwei.style.transition = "";
      }, 1000);
    }, 500);
  }
  