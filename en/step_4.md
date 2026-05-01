<h2 class="c-project-heading--task">Connect the Feed button</h2>

Make the Feed button increase your pet's happiness when clicked.

Add this code below the `update()` function in `script.js`:

<div class="c-project-code">

--- code ---
---
language: javascript
filename: script.js
line_numbers: true
line_number_start: 20
line_highlights: 20-26
---
const message = document.getElementById("message");

document.getElementById("feed").addEventListener("click", () => {
  happiness += 10;
  message.textContent = "OK, thank you!";
  update();
});
--- /code ---

</div>

<h2 class="c-project-heading--task">Test</h2>

Run your code, then click the Feed button to see your pet say OK, thank you!
