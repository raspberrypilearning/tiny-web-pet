## Add a message

Add to the `script.js` so that your pet can send a message when the button is clicked.

--- code ---
---
language: javascript
filename: script.js
line_numbers: true
line_number_start: 20
line_highlights: 20-27
---
const feed = document.getElementById("feed");
const message = document.getElementById("message");

feed.addEventListener("click", () => {
  happiness += 10;
  message.textContent = "Oooo yum thank you!";
  mood();
});
--- /code ---

## Run your code
Click the button to see the new message
