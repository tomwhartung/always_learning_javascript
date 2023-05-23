
# 4d-1-basics.md

Running through the
[MDB CLI tutorial](https://mdbootstrap.com/learn/mdb-foundations/basics/introduction/).

# [Key concepts](https://mdbootstrap.com/learn/mdb-foundations/basics/key-concepts/)

- MDBootstrap == MDB == MDB UI KIT
- Material Minimal: MDB's newest design system
  - An improved version of the classic Material Design
  - Material Minimal is Natural, Clear, and Scalable
- MDB GO is a powerful platform, that offers free hosting and open-source deployment tool

# [Quick start](https://mdbootstrap.com/learn/mdb-foundations/basics/quick-start/)

- Creating a *"first small project"*
- See `vite/projects/4-my_mdb_adventure/4a-mdb_cli-quick_start`

## Step 1 - download and setup MDB

Downloaded `MDB5-STANDARD-UI-KIT-Free-6.3.1.zip` - the *MDB 5 download* file - from the
[installation page](https://mdbootstrap.com/docs/standard/getting-started/installation/)
and saved a copy in `vite/projects/4-my_mdb_adventure/0-downloaded`.

```
pwd      # /var/www/always_learning/always_learning_javascript/vite/projects/4-my_mdb_adventure
mkdir 4a-mdb_cli-quick_start
cd  4a-mdb_cli-quick_start
cp ../0-downloaded/MDB5-STANDARD-UI-KIT-Free-6.3.1.zip .
unzip MDB5-STANDARD-UI-KIT-Free-6.3.1.zip
```

Added the project directory `vite/projects/4-my_mdb_adventure/4a-mdb_cli-quick_start/` to the VSCode workspace.

**Note:** checked the  project directory into github, so that if I do something to change the files, I can see what's changed!

## Step 2 - open `index.html` file

Opened the `index.html` file in `vite/projects/4-my_mdb_adventure/4a-mdb_cli-quick_start/` in:

- A browser tab
- The VSCode code editor

## Step 3 - prepare `index.html` file for the new project

Removed all code between these two lines:

```
<!-- Start your project here-->
<!-- End your project here-->
```

Yes indeed, the page is now totally blank.

## Step 4 - add navigation bar

Added HTML for navbar copied from the *"Basic example"* -> **</> SHOW CODE** -> code box on the
[MDB Navbar page](https://mdbootstrap.com/docs/standard/navigation/navbar/) to `index.html`.

## Step 5 - add jumbotron

Added HTML for a Jumbotron from the Quick start tutorial to `index.html`.

## Step 6 - add grid

Added HTML for a grid with 1 row and 3 columns copied from the *"Basic example"* -> **</> SHOW CODE** -> code box on the
[MDB Grid System page](https://mdbootstrap.com/docs/standard/layout/grid/) to `index.html`.

## Step 7 - add cards

Added HTML for three cards copied from:

- The *"Image"* -> **</> SHOW CODE** -> code box
- The *"Header and footer"* -> **</> SHOW CODE** -> code box
- The *"Image with ripple"* -> **</> SHOW CODE** -> code box

on the [MDB Cards page](https://mdbootstrap.com/docs/standard/components/cards/) to `index.html`.

## Step 8 - add footer

Added HTML for footer copied from the *"Basic example"* -> **</> SHOW CODE** -> code box on the
[MDB Footer page](https://mdbootstrap.com/docs/standard/navigation/footer/) to `index.html`.

