var mobile_open = false;

function home() {
    document.getElementById("mobile_menu").style.display = "none";
    mobile_open = false;
    document.getElementById("roster").style.display = "none";
    document.getElementById("news").style.display = "none";
    document.getElementById("about").style.display = "none";
    document.getElementById("contact").style.display = "none";
    document.getElementById("synch").style.display = "none";
    document.getElementById("home").style.display = "block";
    document.querySelectorAll(".homebutton").forEach(function (e) {
      e.textContent = "●HOME●";
      e.style.boxShadow = "0px 0px 10px #B27A77";
    });
    document.querySelectorAll(".rosterbutton").forEach(function (e) {
      e.textContent = "ROSTER";
      e.style.boxShadow = "none";
    });
    document.querySelectorAll(".synchbutton").forEach(function (e) {
      e.textContent = "SYNCH";
      e.style.boxShadow = "none";
    });
    document.querySelectorAll(".newsbutton").forEach(function (e) {
      e.textContent = "NEWS";
      e.style.boxShadow = "none";
    });
    document.querySelectorAll(".aboutbutton").forEach(function (e) {
      e.textContent = "ABOUT";
      e.style.boxShadow = "none";
    });
    document.querySelectorAll(".contactbutton").forEach(function (e) {
      e.textContent = "CONTACT";
      e.style.boxShadow = "none";
    });
}

function roster() {
  document.getElementById("mobile_menu").style.display = "none";
  mobile_open = false;
  document.getElementById("home").style.display = "none";
  document.getElementById("news").style.display = "none";
  document.getElementById("about").style.display = "none";
  document.getElementById("contact").style.display = "none";
  document.getElementById("roster").style.display = "block";
  document.getElementById("synch").style.display = "none";
  document.querySelectorAll(".homebutton").forEach(function (e) {
    e.textContent = "HOME";
    e.style.boxShadow = "none";
  });
  document.querySelectorAll(".rosterbutton").forEach(function (e) {
    e.textContent = "●ROSTER●";
    e.style.boxShadow = "0px 0px 10px #B27A77";
  });
  document.querySelectorAll(".synchbutton").forEach(function (e) {
    e.textContent = "SYNCH";
    e.style.boxShadow = "none";
  });
  document.querySelectorAll(".newsbutton").forEach(function (e) {
    e.textContent = "NEWS";
    e.style.boxShadow = "none";
  });
  document.querySelectorAll(".aboutbutton").forEach(function (e) {
    e.textContent = "ABOUT";
    e.style.boxShadow = "none";
  });
  document.querySelectorAll(".contactbutton").forEach(function (e) {
    e.textContent = "CONTACT";
    e.style.boxShadow = "none";
  });
}

function synch() {
  document.getElementById("mobile_menu").style.display = "none";
  mobile_open = false;
  document.getElementById("roster").style.display = "none";
  document.getElementById("news").style.display = "none";
  document.getElementById("about").style.display = "none";
  document.getElementById("contact").style.display = "none";
  document.getElementById("synch").style.display = "block";
  document.getElementById("home").style.display = "none";
  document.querySelectorAll(".homebutton").forEach(function (e) {
    e.textContent = "HOME";
    e.style.boxShadow = "none";
  });
  document.querySelectorAll(".rosterbutton").forEach(function (e) {
    e.textContent = "ROSTER";
    e.style.boxShadow = "none";
  });
  document.querySelectorAll(".synchbutton").forEach(function (e) {
    e.textContent = "●SYNCH●";
    e.style.boxShadow = "0px 0px 10px #B27A77";
  });
  document.querySelectorAll(".newsbutton").forEach(function (e) {
    e.textContent = "NEWS";
    e.style.boxShadow = "none";
  });
  document.querySelectorAll(".aboutbutton").forEach(function (e) {
    e.textContent = "ABOUT";
    e.style.boxShadow = "none";
  });
  document.querySelectorAll(".contactbutton").forEach(function (e) {
    e.textContent = "CONTACT";
    e.style.boxShadow = "none";
  });
}

function news() {
  document.getElementById("mobile_menu").style.display = "none";
  mobile_open = false;
  document.getElementById("home").style.display = "none";
  document.getElementById("roster").style.display = "none";
  document.getElementById("about").style.display = "none";
  document.getElementById("contact").style.display = "none";
  document.getElementById("news").style.display = "block";
  document.getElementById("synch").style.display = "none";
  document.querySelectorAll(".homebutton").forEach(function (e) {
    e.textContent = "HOME";
    e.style.boxShadow = "none";
  });
  document.querySelectorAll(".rosterbutton").forEach(function (e) {
    e.textContent = "ROSTER";
    e.style.boxShadow = "none";
  });
  document.querySelectorAll(".synchbutton").forEach(function (e) {
    e.textContent = "SYNCH";
    e.style.boxShadow = "none";
  });
  document.querySelectorAll(".newsbutton").forEach(function (e) {
    e.textContent = "●NEWS●";
    e.style.boxShadow = "0px 0px 10px #B27A77";
  });
  document.querySelectorAll(".aboutbutton").forEach(function (e) {
    e.textContent = "ABOUT";
    e.style.boxShadow = "none";
  });
  document.querySelectorAll(".contactbutton").forEach(function (e) {
    e.textContent = "CONTACT";
    e.style.boxShadow = "none";
  });
}

function about() {
  document.getElementById("mobile_menu").style.display = "none";
  mobile_open = false;
  document.getElementById("home").style.display = "none";
  document.getElementById("roster").style.display = "none";
  document.getElementById("news").style.display = "none";
  document.getElementById("contact").style.display = "none";
  document.getElementById("about").style.display = "block";
  document.getElementById("synch").style.display = "none";
  document.querySelectorAll(".homebutton").forEach(function (e) {
    e.textContent = "HOME";
    e.style.boxShadow = "none";
  });
  document.querySelectorAll(".rosterbutton").forEach(function (e) {
    e.textContent = "ROSTER";
    e.style.boxShadow = "none";
  });
  document.querySelectorAll(".synchbutton").forEach(function (e) {
    e.textContent = "SYNCH";
    e.style.boxShadow = "none";
  });
  document.querySelectorAll(".newsbutton").forEach(function (e) {
    e.textContent = "NEWS";
    e.style.boxShadow = "none";
  });
  document.querySelectorAll(".aboutbutton").forEach(function (e) {
    e.textContent = "●ABOUT●";
    e.style.boxShadow = "0px 0px 10px #B27A77";
  });
  document.querySelectorAll(".contactbutton").forEach(function (e) {
    e.textContent = "CONTACT";
    e.style.boxShadow = "none";
  });
}

function contact() {
  document.getElementById("mobile_menu").style.display = "none";
  mobile_open = false;
  document.getElementById("home").style.display = "none";
  document.getElementById("roster").style.display = "none";
  document.getElementById("news").style.display = "none";
  document.getElementById("about").style.display = "none";
  document.getElementById("contact").style.display = "block";
  document.getElementById("synch").style.display = "none";
  document.querySelectorAll(".homebutton").forEach(function (e) {
    e.textContent = "HOME";
    e.style.boxShadow = "none";
  });
  document.querySelectorAll(".rosterbutton").forEach(function (e) {
    e.textContent = "ROSTER";
    e.style.boxShadow = "none";
  });
  document.querySelectorAll(".synchbutton").forEach(function (e) {
    e.textContent = "SYNCH";
    e.style.boxShadow = "none";
  });
  document.querySelectorAll(".newsbutton").forEach(function (e) {
    e.textContent = "NEWS";
    e.style.boxShadow = "none";
  });
  document.querySelectorAll(".aboutbutton").forEach(function (e) {
    e.textContent = "ABOUT";
    e.style.boxShadow = "none";
  });
  document.querySelectorAll(".contactbutton").forEach(function (e) {
    e.textContent = "●CONTACT●";
    e.style.boxShadow = "0px 0px 10px #B27A77";
  });
}

function mobile_menu() {
  if (mobile_open) {
    document.getElementById("mobile_menu").style.display = "none";
    mobile_open = false;
  } else {
    document.getElementById("mobile_menu").style.display = "block";
    mobile_open = true;
  }
}