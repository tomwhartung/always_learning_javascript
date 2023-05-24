
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

Skipping this: *I seriously hate these things!*

# Page 9: [Flexbox](https://mdbootstrap.com/learn/mdb-foundations/bootstrap/flexbox/)
## Step 1 - 
```
```

# Page 10: [Text & spacing]() 
## Step 1 - 
```
```

# Page 11: [Masks]() 
## Step 1 - 
```
```

# Page 12: [Buttons]() 
## Step 1 - 
```
```

# Page 13: []() 
# Page 14: []() 
# Page 15: []() 
# Page 16: []() 

