
# 4d-2-bootstrap.md

Running through MDB's
[Bootstrap tutorial](https://mdbootstrap.com/learn/mdb-foundations/bootstrap/about/).

# Page 1: [About Bootstrap](https://mdbootstrap.com/learn/mdb-foundations/bootstrap/about/)

- Bootstrap includes *"an impressive collection of components"* and *"a powerful grid system"*
  - Components include Buttons, DropDowns, Accordions, Cards, Popovers, Tooltips, Tables, and many more
- Includes a link to the [Bootstrap project's home page](https://getbootstrap.com/).

# Page 2: [Versions](https://mdbootstrap.com/learn/mdb-foundations/bootstrap/versions/)

- Latest stable version: **version 5**
  - Stable as of May 5, 2021.
- This tutorial uses **Bootstrap 5,** so I will too!

# Page 3: [Download & setup](https://mdbootstrap.com/learn/mdb-foundations/bootstrap/download-and-setup/)

- *"We will be using the MDBootstrap version of Bootstrap"*
  - MDBootstrap provides:
    - Hundreds of additional components
    - Integration with Material Design, popular JS libraries like **React,** and **Typescript**


## Step 1 - download and setup

- [x] Already downloaded and saved as `vite/projects/4-my_mdb_adventure/0-downloaded/MDB5-STANDARD-UI-KIT-Free-6.3.1.zip`
- [x] Copied into `vite/projects/4-my_mdb_adventure/4b-mdb_cli-bootstrap/` and unpacked

## Step 2 - open index.html file

- Open in browser
- Open in VSCode

## Step 3 - prepare `index.html` file for the new project

Removed all code between these two lines:

```
<!-- Start your project here-->
<!-- End your project here-->
```

# Page 4: [Containers](https://mdbootstrap.com/learn/mdb-foundations/bootstrap/containers/)

- A Container is *"required when using default grid system"*
- Use a Container to provide margins between the browser window's edge and the web page's content
- Container classes include `container`, `container-sm`, `container-md` ... `container-xxl`, and `container-fluid`

Adding this code to `index.html`:

```
<div class="container" style="height: 500px; background-color: red">
</div>
```

# Page 5: [Grid system](https://mdbootstrap.com/learn/mdb-foundations/bootstrap/grid-system/)

## Rows

- Add two Rows inside the Container

```
<div class="container" style="height: 500px; background-color: red">

  <div class="row" style="background-color: blue;">
    I am a first row
  </div>

  <div class="row" style="background-color: lightblue;">
    I am a second row
  </div>

</div>
```

## Columns

- Use Bootstrap to define 1-12 Columns in each Row
- Some Column classes
  - `.col`: a standard column
  - `.col-6`: defines a column that is the width of **6** standard columns
  - `.col-8`: defines a column that is as wide as **2** `.col-4` columns
  - `.col-md-4`, `.col-md-8`, etc.: Add `-md-` as a breakpoint
    - Columns maintain their ratio *only* on **medium- and larger-size** screens
    - To quote the tutorial:
      - *"On screens smaller than 768px, I want this column to stretch to full width"*
      - *"On screens larger than 768px, I want this column to be 4 units wide"*
- Breakpoints: X-Small is the default
  - Class infixes for all other breakpoints: `sm`, `md`, `lg`, xl``, `xxl`

This example shows three columns of unequal widths:

```
<div class="container">
  <div class="row">
    <div class="col-md-3">.col-md-3</div>
    <div class="col-md-6">.col-md-6</div>
    <div class="col-md-3">.col-md-3</div>
  </div>
</div>
```

**Note:** it is ok to nest an entire Row within a column, and break that row up into *"sub-columns,"* if you will.

# Page 6: [Create a Landing Page](https://mdbootstrap.com/learn/mdb-foundations/bootstrap/create-landing-page/)

## Steps 1 & 2 - Update `index.html` with a basic structure

Replace the current code in `index.html` with this basic structure:

```
<!--Start Main Navigation-->
<header>

</header>
<!--End Main Navigation-->

<!--Start Main layout-->
<main>
  <div class="container">

  </div>
</main>
<!--End Main layout-->

<!--Start Footer-->
<footer>

</footer>
<!--End Footer-->
```

# Page 7: [Navbar](https://mdbootstrap.com/learn/mdb-foundations/bootstrap/navbar/)

- **TODO:** study all this someday when I actually need to create a navbar
- Adding this code to the project and moving on

```
<!--Main Navigation-->
<header>

  <!-- Navbar -->
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <!-- Container wrapper -->
    <div class="container-fluid">
      <!-- Toggle button -->
      <button class="navbar-toggler" type="button" data-mdb-toggle="collapse"
        data-mdb-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
        aria-label="Toggle navigation">
        <i class="fas fa-bars"></i>
      </button>

      <!-- Collapsible wrapper -->
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <!-- Navbar brand -->
        <a class="navbar-brand mt-2 mt-lg-0" href="#">
          <img src="https://mdbcdn.b-cdn.net/img/logo/mdb-transaprent-noshadows.webp" height="15" alt="MDB Logo"
            loading="lazy" />
        </a>
        <!-- Left links -->
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <a class="nav-link" href="#">Dashboard</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Team</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Projects</a>
          </li>
        </ul>
        <!-- Left links -->
      </div>
      <!-- Collapsible wrapper -->

      <!-- Right elements -->
      <div class="d-flex align-items-center">
        <!-- Icon -->
        <a class="text-reset me-3" href="#">
          <i class="fas fa-shopping-cart"></i>
        </a>

        <!-- Notifications -->
        <div class="dropdown">
          <a class="text-reset me-3 dropdown-toggle hidden-arrow" href="#" id="navbarDropdownMenuLink" role="button"
            data-mdb-toggle="dropdown" aria-expanded="false">
            <i class="fas fa-bell"></i>
            <span class="badge rounded-pill badge-notification bg-danger">1</span>
          </a>
          <ul class="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdownMenuLink">
            <li>
              <a class="dropdown-item" href="#">Some news</a>
            </li>
            <li>
              <a class="dropdown-item" href="#">Another news</a>
            </li>
            <li>
              <a class="dropdown-item" href="#">Something else here</a>
            </li>
          </ul>
        </div>
        <!-- Avatar -->
        <div class="dropdown">
          <a class="dropdown-toggle d-flex align-items-center hidden-arrow" href="#" id="navbarDropdownMenuAvatar"
            role="button" data-mdb-toggle="dropdown" aria-expanded="false">
            <img src="https://mdbcdn.b-cdn.net/img/new/avatars/2.webp" class="rounded-circle" height="25"
              alt="Black and White Portrait of a Man" loading="lazy" />
          </a>
          <ul class="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdownMenuAvatar">
            <li>
              <a class="dropdown-item" href="#">My profile</a>
            </li>
            <li>
              <a class="dropdown-item" href="#">Settings</a>
            </li>
            <li>
              <a class="dropdown-item" href="#">Logout</a>
            </li>
          </ul>
        </div>
      </div>
      <!-- Right elements -->
    </div>
    <!-- Container wrapper -->
  </nav>
  <!-- Navbar -->

</header>
<!--Main Navigation-->
```

# Page 8: [Hero Image](https://mdbootstrap.com/learn/mdb-foundations/bootstrap/hero-image/)

**Skipping this,** because I am have no plans to create a call to action anytime soon.

# Page 9: [Flexbox](https://mdbootstrap.com/learn/mdb-foundations/bootstrap/flexbox/)

Walks through the creation of a *"flexbox"*, which in this case is precisely a:

- *"Call to action. One big heading, one subheading and one button will be best."*
- Step 3 explains it entails using the `.d-flex` class to help center the call to action
- **TODO:** study all this someday when I actually need to create a call to action
  - Seriously, I vaguely remember strugging a bit with these things

# Page 10: [Text & spacing](https://mdbootstrap.com/learn/mdb-foundations/bootstrap/text-and-spacing/)

Walks through making these changes to the call to action:

- Step 1 - change the color of the text
  - e.g., `.text-white` class
- Step 2 - center the text
  - `.text-center` class
- Step 3 - add spacing
  - margin classes: `m-3`, `mb-4`, etc.
  - **Note:** it's *"margin-start"* and *"margin-end"*, **not** right and left
    - Use `ms-2` to add some margin to the left
    - Use `me-4` to add some margin to the right

# Page 11: [Masks](https://mdbootstrap.com/learn/mdb-foundations/bootstrap/masks/)

> Masks alter the visibility of an element by either partially or fully hiding it.

```
  <!-- Mask -->
  <div class="mask" style="background-color: hsla(0, 0%, 0%, 0.6)">
```

Useful when making a call to action, which I am not doing right now.

# Page 12: [Buttons](https://mdbootstrap.com/learn/mdb-foundations/bootstrap/buttons/)

- Use `.btn` and `.btn-*` classes with `button` elements
- To use `.btn` and `.btn-*` classes with `a`nchor elements, add `role="button"`
- *Always* include the `.btn` class along with a `.btn-*` class

# Page 13: [Carousel](https://mdbootstrap.com/learn/mdb-foundations/bootstrap/carousel/)

**Skipping this:** *I seriously hate these things!*

# Page 14: [Rounded corners](https://mdbootstrap.com/learn/mdb-foundations/bootstrap/rounded-corners/)

- Use `rounded-*` classes to give any element rounded corners
  - `rounded-0`- square corners
  - `rounded-5`- medium roundness
  - `rounded-9`- high roundness

# Page 15: [Shadows](https://mdbootstrap.com/learn/mdb-foundations/bootstrap/shadows/)

Shadows in Material Minimal are very subtle and minimal

- `.shadow-0` - no shadows
- `.shadow-3` - medium shadows
- `.shadow-5` - max shadows
- `.shadow-[0-5]-strong` - strong shadows
  - Strong shadows work best with images
- `.hover-shadow` - shadows only when hovering

# Page 16: [Icons and lists](https://mdbootstrap.com/learn/mdb-foundations/bootstrap/icons-and-lists/)

## Icons

- Includes link to the [MDB icon search page](https://mdbootstrap.com/docs/standard/content-styles/icons/#section-icon-search)
- Use `.fas` for **f**ont **a**wesome **s**olid icons
- Use `.far` for **f**ont **a**wesome **r**egular icons
- Use `.fa-xs`, `.fa-sm`, `fa-lg`, `.fa-2x` ... `.fa-10x` to set the size
- Use `.text-*` to change the color
- Examples:

```
<i class="fas fa-gem"></i>
<i class="fas fa-gem fa-5x"></i>
```

## Lists

This example creates a list using white checkmarks in round green circles as bullets:

```
<ul class="list-unstyled">
  <li class="mb-1"><i class="fas fa-check-circle me-2 text-success"></i>Hundreds of additional quality components</li>
  <li class="mb-1"><i class="fas fa-check-circle me-2 text-success"></i>Much better design</li>
  <li class="mb-1"><i class="fas fa-check-circle me-2 text-success"></i>Integration with TypeScript</li>
</ul>
```

# Page 17: [Grid tips and tricks](https://mdbootstrap.com/learn/mdb-foundations/bootstrap/grid-tips-and-tricks/)

- Shows how to use a gutter class to provide spacing
- **Usually added to the `row`**
- `.gx-1` min horizontal space between cols
- `.gx-5` max horizontal space between cols
- `.gy-1` min vertical space between cols
- `.gy-5` max vertical space between cols
- For details see the [gutters documentation page](https://mdbootstrap.com/docs/standard/layout/gutters/)

```
<!-- Gutter example -->
<div class="row gx-5">
<!-- Gutter example with breakpoint -->
<!-- Adds the space only on extra large screens -->
<div class="row gx-xl-5">
```

To make **bottom margins *responsive*,** combine a default bottom margin with a larger one that uses a breakpoint:

```
<!-- Gap will be 10 on larger screens and default to 5 on smaller ones -->
<section class="mb-5 mb-lg-10">
```

# Page 18: [Cards](https://mdbootstrap.com/learn/mdb-foundations/bootstrap/cards/)

- Have used these before and they are pretty cool
- **TODO:** come back and use this page as a reference when I actually need to create some cards

# Page 19: [Reorder columns](https://mdbootstrap.com/learn/mdb-foundations/bootstrap/reorder-columns/)

- Use `.order-[1-5]` classes to specify the sequence a row of cards should appear in
  - Default is left-to-right
- Use `.order-[bkpt]-*` classes to move a middle card to the top on smaller screens
  - `bkpt` = `sm`, `md`, `lg`, `xl`
- The column defined second:
  - `.order-1`: appears first by default
  - `.order-lg-2`: appears second - in the middle - on large screens

```
<div class="row gx-xl-5">
  <div class="col-lg-4 col-md-6 mb-4 mb-lg-0 order-2 order-lg-1">
  </div>
  <div class="col-lg-4 col-md-12 mb-4 mb-lg-0 order-1 order-lg-2">
  </div>
  <div class="col-lg-4 col-md-6 mb-4 mb-lg-0 order-3 order-lg-3">
  </div>
</div>
```

# Page 20: [Sizing](https://mdbootstrap.com/learn/mdb-foundations/bootstrap/sizing/)

- Use `.w-*` and `.h-*` classes to define an element's size relative to its parent
  - Available width classes: `.w-25` `.w-50` `.w-75` `.w-100` `.w-auto`
  - Available height classes: `.h-25` `.h-50` `.h-75` `.h-100` `.h-auto`

Looks like a staircase:

```
<div class="w-25">Width 25%</div>
<div class="w-50">Width 50%</div>
<div class="w-75">Width 75%</div>
<div class="w-100">Width 100%</div>
<div class="w-auto">Width auto</div>
```

# Page 21: [Forms](https://mdbootstrap.com/learn/mdb-foundations/bootstrap/forms/)

- **TODO:** come back to this page when I actually need to create a form

# Page 22: [Badges](https://mdbootstrap.com/learn/mdb-foundations/bootstrap/badges/)

- The `.badge` class to highlight one or more items in a group
- Also requires a color class, e.g., `badge-secondary`
- Use `.rounded-pill` to max out rounded corners

```
<h2>Example heading <span class="badge badge-primary">New</span></h2>
<!-- With icon: -->
<div class="badge badge-primary p-3 rounded-4">
  <i class="fas fa-chart-pie"></i>
</div>
```

# Page 23: [Footer](https://mdbootstrap.com/learn/mdb-foundations/bootstrap/footer/)

Reviews how to create the most popular footer components:

- Copyrights
- Links
- Text
- Images
- Icons
- Colors

# Page 24: [Deploy](https://mdbootstrap.com/learn/mdb-foundations/bootstrap/deploy/)

Reviews how to deploy the project.

- I have not been keeping up with the changes, so will not be doing this

# Page 25: [Repository](https://mdbootstrap.com/learn/mdb-foundations/bootstrap/repository/)

Shows how to use git.

