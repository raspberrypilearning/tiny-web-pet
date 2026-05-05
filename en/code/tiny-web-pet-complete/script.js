// Store how happy your pet is.
let happiness = 70;

const face = document.getElementById("face");

const mood = () => {
  if (happiness >= 80) {
    face.textContent = ":-D";
  } else if (happiness >= 50) {
    face.textContent = ":-)";
  } else {
    face.textContent = ":-(";
  }
};

mood();

const message = document.getElementById("message");

document.getElementById("feed").addEventListener("click", () => {
  happiness += 10;
  message.textContent = "OK, thank you!";
  mood();
});

setInterval(() => {
  happiness -= 5;
  mood();
}, 3000);
