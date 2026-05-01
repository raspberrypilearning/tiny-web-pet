<h2 class="c-project-heading--task">Make happiness decrease over time</h2>

Add a timer so your pet gets hungry if you don't look after it.

Add this code at the bottom of `script.js`:

<div class="c-project-code">

--- code ---
---
language: javascript
filename: script.js
line_numbers: true
line_number_start: 28
line_highlights: 28-31
---
setInterval(() => {
  happiness -= 5;
  update();
}, 3000);
--- /code ---

</div>

<h2 class="c-project-heading--task">Test</h2>

Run your code, then wait a few seconds to watch the pet's happiness decrease automatically.
