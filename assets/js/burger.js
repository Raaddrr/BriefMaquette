function menuBurger() { //myFunction()
    var x = document.getElementById("navButton");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }