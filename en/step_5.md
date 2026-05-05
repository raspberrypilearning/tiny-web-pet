## Add a feed button

In `script.js` increase your pet's happiness when the button is clicked.

--- code ---
---
language: javascript
filename: script.js
line_numbers: true
line_number_start: 20
line_highlights: 20-25
---
const feed = document.getElementById("feed");

feed.addEventListener("click", () => {
  happiness += 10;
  mood();
});
--- /code ---

</div>

## Run your code
Click the button to see the pet change.
