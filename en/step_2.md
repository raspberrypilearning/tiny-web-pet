<h2 class="c-project-heading--task">Build the pet interface</h2>

Create the HTML structure and CSS styling for your virtual pet device.

### Step 1

Add this HTML inside the `<body>` tag of your `index.html` file, above the `<script>` tag:

<div class="c-project-code">

--- code ---
---
language: html
filename: index.html
line_numbers: true
line_number_start: 11
line_highlights: 11-22
---
  <section class="frame">
    <img src="bg3.png" alt="device frame">
    <main id="screen">
      <p id="face">:-)</p>
    </main>
  </section>

  <section class="buttons" aria-label="Pet care actions">
    <button id="feed">Feed</button>
    <button id="play">Play</button>
    <button id="rest">Rest</button>
  </section>
--- /code ---

</div>

### Step 2

Now add the CSS to style your pet:

<div class="c-project-code">

--- code ---
---
language: css
filename: style.css
line_numbers: true
line_number_start: 1
line_highlights: 1-43
---
/* Style the page and pet device. */
body {
  text-align: center;
  font-family: Arial, sans-serif;
  background: #f4efe6;
}

.frame {
  position: relative;
  display: inline-block;
  width: 320px;
}

.frame img {
  width: 100%;
}

#screen {
  position: absolute;
  top: 36%;
  left: 25%;
  width: 50%;
  height: 36%;
  display: flex;
  align-items: center;
  justify-content: center;
}

#face {
  font-size: 48px;
  margin: 0;
}

.buttons {
  margin-top: 12px;
}

button {
  font-size: 18px;
  padding: 8px 16px;
  margin: 4px;
  cursor: pointer;
}
--- /code ---

</div>

<h2 class="c-project-heading--task">Test</h2>

Run your code to see the pet device with a smiling face and three buttons.
