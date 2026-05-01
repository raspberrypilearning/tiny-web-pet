<h2 class="c-project-heading--task">Build the pet interface</h2>

Create the HTML structure for your virtual pet device.

Add this HTML inside the `<body>` tag of your `index.html` file, above the `<script>` tag:

<div class="c-project-code">

--- code ---
---
language: html
filename: index.html
line_numbers: true
line_number_start: 11
line_highlights: 11-21
---
  <!-- Add the pet screen and button. -->
  <section class="frame">
    <img src="bg3.png" alt="device frame">
    <main id="screen">
      <p id="face">:-)</p>
      <p id="message"></p>
    </main>
  </section>

  <section class="buttons" aria-label="Pet care actions">
    <button id="feed">Feed</button>
  </section>
--- /code ---

</div>

<h2 class="c-project-heading--task">Test</h2>

Run your code to see the pet device with a smiling face and Feed button.
