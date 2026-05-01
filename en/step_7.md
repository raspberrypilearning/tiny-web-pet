<h2 class="c-project-heading--task">Challenge</h2>

Add a new "Dance" button that increases happiness by 20 and makes the pet wiggle side to side.

### Step 1

Add this button inside the buttons section in `index.html`:

<div class="c-project-code">

--- code ---
---
language: html
filename: index.html
line_numbers: true
line_number_start: 22
line_highlights: 22
---
  <button id="dance">Dance</button>
--- /code ---

</div>

### Step 2

Add this JavaScript above the `setInterval()` code:

<div class="c-project-code">

--- code ---
---
language: javascript
filename: script.js
line_numbers: true
line_number_start: 43
line_highlights: 43-54
---
document.getElementById("dance").addEventListener("click", () => {
  happiness += 20;
  const face = document.getElementById("face");
  face.style.transform = "translateX(20px)";
  setTimeout(() => {
    face.style.transform = "translateX(-20px)";
  }, 200);
  setTimeout(() => {
    face.style.transform = "none";
  }, 400);
  update();
});
--- /code ---

</div>

<h2 class="c-project-heading--task">Test</h2>

Run your code, then click the Dance button to see your pet's happiness increase and the pet wiggle side to side.
