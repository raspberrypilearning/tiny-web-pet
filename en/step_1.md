## Choose the case

### Step 1
Click on the Image gallery tab and choose a background image for the case.

### Step 2
In the **index.html** add a `<section>` for the case.

<div class="c-project-code">

--- code ---
---
language: html
filename: index.html
line_numbers: true
line_number_start: 10
line_highlights: 10-12
---
  <section class="case">

  </section>
--- /code ---

</div>

### Step 3
Add an `<img>` with the name of the case you have chosen. 

In the example, this is `src="bg3.png"`.

<div class="c-project-code">

--- code ---
---
language: html
filename: index.html
line_numbers: true
line_number_start: 10
line_highlights: 10-12
---
  <section class="case">
    <img src="bg3.png" alt="device case">
  </section>
--- /code ---

</div>

> ### Tip
> 
> `alt="device case"` is alt text, which is used by screen readers or if there is an issue with the image showing.
{: .c-project-callout .c-project-callout--tip}

### Now run your code
See the device case you chose.

<div class="c-project-output">

![A colourful device case on a pale background.](images/step1.png)

</div>
