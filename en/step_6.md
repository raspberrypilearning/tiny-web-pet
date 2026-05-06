## Add a message

Add to the `script.js` so that your pet can send a message when the button is clicked.

--- code ---
---
language: javascript
filename: script.js
line_numbers: true
line_number_start: 4
line_highlights: 5, 8, 20-25
---
const face = document.getElementById("face");
const message = document.getElementById("message");

const mood = () => {
  message.textContent = "";
  
  if (happiness >= 50) {
    face.textContent = ":-)";
  } else {
    face.textContent = ":-(";
  }
};

feed.addEventListener("click", () => {
  happiness += 10;
  mood();
  message.textContent = "Oooo yum thank you!";
});
--- /code ---

### Now run your code
Click the button to see the new message, then wait for the pet's mood to update.

<div class="c-project-output">

![A device case with a feed button that can show a message.](images/step_6_output.png)

</div>
