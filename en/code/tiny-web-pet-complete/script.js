// Store how happy your pet is.
let happiness = 70;

const update = () => {
  const face = document.getElementById("face");

  if (happiness > 100) happiness = 100;
  if (happiness < 0) happiness = 0;

  if (happiness >= 50) {
    face.textContent = ":-)";
  } else {
    face.textContent = ":-(";
  }
};

update();

const message = document.getElementById("message");

document.getElementById("feed").addEventListener("click", () => {
  happiness += 10;
  message.textContent = "OK, thank you!";
  update();
});

setInterval(() => {
  happiness -= 5;
  update();
}, 3000);
