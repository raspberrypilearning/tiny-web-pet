## Add a message

Add to the `script.js` so that your pet can send a message when the button is clicked.

--- code ---
---
language: javascript
filename: script.js
line_numbers: true
line_number_start: 14
line_highlights: 14-21
---
const message = document.getElementById("message");
const feed = document.getElementById("feed");

feed.addEventListener("click", () => {
  happiness += 10;
  message.textContent = "Oooo yum thank you!";
  mood();
});
--- /code ---

### Now run your code
Click the button to see the new message.

<div class="c-project-output">

![A device case with a feed button that can show a message.](images/step_6_output.png)

</div>
