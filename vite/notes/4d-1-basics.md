
# 4d-1-basics.md

Running through the
[MDB CLI tutorial](https://mdbootstrap.com/learn/mdb-foundations/basics/introduction/).

# Page 1: [Introduction](https://mdbootstrap.com/learn/mdb-foundations/basics/introduction/)

Includes a link to the [MDB community support forum](https://mdbootstrap.com/support/).

# Page 2: [Key concepts](https://mdbootstrap.com/learn/mdb-foundations/basics/key-concepts/)

- MDBootstrap == MDB == MDB UI KIT
- Material Minimal: MDB's newest design system
  - An improved version of the classic Material Design
  - Material Minimal is Natural, Clear, and Scalable
- MDB GO is a powerful platform, that offers free hosting and open-source deployment tool

# Page 3: [Quick start](https://mdbootstrap.com/learn/mdb-foundations/basics/quick-start/)

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


# Page 4: [Deploy your project](https://mdbootstrap.com/learn/mdb-foundations/basics/deploy-your-project/)

## Step 1 - install Node.js

```
$ node -v
v18.16.0
$ npm -v
9.6.7
$
```

## Step 2 - create MDB account

- User name: tomh...@gmail.com
- Password: lolasif-it'sasecret!

## Step 3 - install MDB CLI

- The `-g` means this gets installed** *g*lobally,** which means we must use `sudo` to run the command
- This adds the `mdb` command to our `$PATH`

```
$ sudo npm install -g mdb-cli
[sudo] password for tomh:
npm WARN deprecated core-js@2.6.12: core-js@<3.23.3 is no longer maintained and not recommended for usage due to the number of issues. Because of the V8 engine whims, feature detection in old core-js versions could cause a slowdown up to 100x even if nothing is polyfilled. Some versions have web compatibility issues. Please, upgrade your dependencies to the actual version of core-js.

added 155 packages in 17s

11 packages are looking for funding
  run `npm fund` for details
$ which mdb
/usr/bin/mdb
$
```

## Step 4 - log in to the MDB account in the terminal

This logs us into **MDB Go.**

```
$ mdb login
? Enter your MDB username tomwhartung
? Enter your MDB password **********
Successfully logged in.
$
```

## Step 5 - rename the folder where your project is and navigate to it in terminal

```
$ pwd
/var/www/always_learning/always_learning_javascript/vite/projects/4-my_mdb_adventure/4a-mdb_cli-quick_start
$
```

## Step 6 - publish your project!

```
$ mdb publish
? Required .mdb file not found. Create? Yes
? Enter project name mdb-tutorial
? Choose project type frontend
? Choose default package manager npm
Configuration saved.
✔ Uploading files | 1.463 Mb
Sent 1.463 Mb
Your application is available at https://tomwhartung-mdb-tutorial.mdbgo.io [copied to clipboard]

Info Your URL has been generated based on your username and project name. You can change it by providing the (sub)domain of your choice by running the following command: `mdb config domain <name>`.
$
```

The [link provided](https://tomwhartung-mdb-tutorial.mdbgo.io) loads very slowly, but does eventually load!  Yay!!

