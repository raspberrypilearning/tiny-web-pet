// Store how happy your pet is.
let happiness = 70;

const face = document.getElementById("face");
const message = document.getElementById("message");

const mood = () => {
  message.textContent = "";

  if (happiness >= 80) {
    face.textContent = ":-D";
  } else if (happiness >= 50) {
    face.textContent = ":-)";
  } else {
    face.textContent = ":-(";
  }
};

mood();

document.getElementById("feed").addEventListener("click", () => {
  happiness += 10;
  mood();
  message.textContent = "Oooo, yum thanks!";
});

setInterval(() => {
  happiness -= 5;
  mood();
}, 3000);
