## Challenge: add more buttons

Add more buttons to care for your pet.

### Step 1

Add another button in `index.html`.

--- code ---
---
language: html
filename: index.html
line_numbers: true
line_number_start: 16
line_highlights: 17
---
  <button id="feed">Feed</button>
  <button id="play">Play</button>
</body>
--- /code ---

### Step 2

Add JavaScript to make the new button change the pet.

<div class="c-project-code">

--- code ---
---
language: javascript
filename: script.js
line_numbers: true
line_number_start: 23
line_highlights: 23-27
---
document.getElementById("play").addEventListener("click", () => {
  happiness += 20;
  message.textContent = "That was fun!";
  mood();
});
--- /code ---

</div>

### Now run your code
Run your code, then click your new button to see what it does.

Try adding another button with a different name, message, or happiness change.

<div class="c-project-output">

![A device case with feed and play buttons below it.](images/step_7_output.png)

</div>
