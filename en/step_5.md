<h2 class="c-project-heading--task">Connect the buttons</h2>

Make the buttons increase your pet's happiness when clicked.

Add this code below the `update()` function in `script.js`:

<div class="c-project-code">

--- code ---
---
language: javascript
filename: script.js
line_numbers: true
line_number_start: 28
line_highlights: 28-41
---
document.getElementById("feed").addEventListener("click", () => {
  happiness += 10;
  update();
});

document.getElementById("play").addEventListener("click", () => {
  happiness += 15;
  update();
});

document.getElementById("rest").addEventListener("click", () => {
  happiness += 5;
  update();
});
--- /code ---

</div>

<h2 class="c-project-heading--task">Test</h2>

Run your code, then click the Feed, Play, and Rest buttons to watch the pet's face and background colour change.
