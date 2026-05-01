<h2 class="c-project-heading--task">Create an update function</h2>

Add a function that changes your pet's face based on its happiness level.

Add this code below the happiness variable in `script.js`:

<div class="c-project-code">

--- code ---
---
language: javascript
filename: script.js
line_numbers: true
line_number_start: 4
line_highlights: 4-26
---
const update = () => {
  const face = document.getElementById("face");
  const screen = document.getElementById("screen");

  if (happiness > 100) happiness = 100;
  if (happiness < 0) happiness = 0;

  if (happiness >= 75) {
    screen.style.background = "lightgreen";
    face.textContent = ":-)";
  } else if (happiness >= 50) {
    screen.style.background = "yellow";
    face.textContent = ":-|";
  } else if (happiness >= 25) {
    screen.style.background = "orange";
    face.textContent = ":-(";
  } else {
    screen.style.background = "salmon";
    face.textContent = ":'(";
  }
};

update();
--- /code ---

</div>

<h2 class="c-project-heading--task">Test</h2>

Run your code to see the screen change colour and the face match your pet's happiness level.
