let happiness = 80;

function update() {
  let face = document.getElementById("face");
  let screen = document.getElementById("screen");

  if (happiness > 100) happiness = 100;
  if (happiness < 0) happiness = 0;

  if (happiness > 75) {
    screen.style.background = "lightgreen";
    face.textContent = ":-)";
  } else if (happiness > 50) {
    screen.style.background = "yellow";
    face.textContent = ":-|";
  } else if (happiness > 25) {
    screen.style.background = "orange";
    face.textContent = ":-(";
  } else {
    screen.style.background = "salmon";
    face.textContent = ":'(";
  }
}

document.getElementById("feed").onclick = function() {
  happiness = happiness + 10;
  update();
};

document.getElementById("play").onclick = function() {
  happiness = happiness + 15;
  update();
};

document.getElementById("rest").onclick = function() {
  happiness = happiness + 5;
  update();
};

let lifeInterval = setInterval(function() {
  happiness = happiness - 5;
  update();
}, 3000);

update();
