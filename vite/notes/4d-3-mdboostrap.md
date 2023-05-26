
# 4d-3-mdboostrap.md

Running through MDB's
[MDBootstrap tutorial](https://mdbootstrap.com/learn/mdb-foundations/mdb-ui-kit/about/).

# Page 1: [About MDBootstrap](https://mdbootstrap.com/learn/mdb-foundations/mdb-ui-kit/about/)

- Adds many components to those that Bootstrap provides
- *"Much better design than Bootstrap"*
- Integrated with Material Design
- Integrated with popular JS libraries like **React,** and **Typescript**

# Page 2: [Download & setup](https://mdbootstrap.com/learn/mdb-foundations/mdb-ui-kit/download-and-setup/)

- [x] Already downloaded and saved as `vite/projects/4-my_mdb_adventure/0-downloaded/MDB5-STANDARD-UI-KIT-Free-6.3.1.zip`
- [x] Copied into `vite/projects/4-my_mdb_adventure/4c-mdb_cli-mdbootstrap/` and unpacked
- [x] Open index.html file
  - [x] Open in browser
  - [x] Open in VSCode
- [x] Prepare `index.html` file for the new project
  - [x] Removed all code between these two lines:
    - `<!-- Start your project here-->`
    - `<!-- End your project here-->`

# Page 3: [MDB CLI](https://mdbootstrap.com/learn/mdb-foundations/mdb-ui-kit/mdb-cli/)

I have already done these steps in `4d-1-basics.md`, which is in this directory.
For details, see that file.

- [x] Install Node.js
  - `node -v`
- [x] Create MDB account
- [x] Install MDB CLI
  - Installed globally, allowing us to run the `mdb` command
- [x] Log in to the MDB account in the terminal
  - `mdb login`
- [x] Download MDB package via CLI
  - **This is new** - note option to initialize with React
  - See below:

```
$ mdb init
? Choose project to initialize
  ---- Blank ----
  Empty starter
  ---- MDB5 Free ----
❯ Standard
  Angular
  React
  Vue
[====================================================================================================] 0.0 s
Project starter will be downloaded to /var/www/always_learning/always_learning_javascript/vite/projects/4-my_mdb_adventure/4c-mdb_cli-mdbootstrap/mdb5-free-standard folder
Success Download completed.
$
```

**Note:** as the message above indicates, this is new:

```
$ l mdb5-free-standard/
total 292
-rw-r--r-- 1 tomh tomh    140 May 26 13:14 .mdb
-rw-r--r-- 1 tomh tomh    153 May 26 13:14 Jenkinsfile
-rw-r--r-- 1 tomh tomh 258284 May 26 13:14 License.pdf
-rw-r--r-- 1 tomh tomh    119 May 26 13:14 README.txt
drwxr-xr-x 2 tomh tomh   4096 May 26 13:14 css
drwxr-xr-x 2 tomh tomh   4096 May 26 13:14 img
-rw-r--r-- 1 tomh tomh   1807 May 26 13:14 index.html
drwxr-xr-x 2 tomh tomh   4096 May 26 13:14 js
-rw-r--r-- 1 tomh tomh    137 May 26 13:14 package.json
drwxr-xr-x 4 tomh tomh   4096 May 26 13:14 src
```

At the very end of this page, the tutorial recommends renaming this directory, so that is what I will do:

```
$ pwd
/var/www/always_learning/always_learning_javascript/vite/projects/4-my_mdb_adventure/4c-mdb_cli-mdbootstrap
$ mv mdb5-free-standard mdb-uikit-tutorial
$ gs .
On branch master
Your branch is ahead of 'origin/master' by 3 commits.
  (use "git push" to publish your local commits)

Untracked files:
  (use "git add <file>..." to include in what will be committed)
        mdb-uikit-tutorial/

nothing added to commit but untracked files present (use "git add" to track)
$ git add mdb-uikit-tutorial/
. . .
. . .
. . .
$ git commit -m 'Adding directory mdb-uikit-tutorial/ to the vite/projects/4-my_mdb_adventure/4c-mdb_cli-mdbootstrap/ project .  For details, see vite/notes/4d-3-mdboostrap.md .'
[master 1f5131f] Adding directory mdb-uikit-tutorial/ to the vite/projects/4-my_mdb_adventure/4c-mdb_cli-mdbootstrap/ project .  For details, see vite/notes/4d-3-mdboostrap.md .
 386 files changed, 49293 insertions(+)
. . .
. . .
. . .
$
```

# Page 4: [Create a Portfolio](https://mdbootstrap.com/learn/mdb-foundations/mdb-ui-kit/create-portfolio/)

- [x] Visited link to demo we will be creating: [ascensus-mdb-uikit-tutorial.mdbgo.io](https://ascensus-mdb-uikit-tutorial.mdbgo.io/)
- [x] Added basic structure code to `index.html`

# Page 5: [Split screen](https://mdbootstrap.com/learn/mdb-foundations/mdb-ui-kit/split-screen/)

I am not going to go through these steps, but I think it is worthwhile to take at the look at the process we can take to achieve this effect:

- [ ] Step 1 - create a 2 columns grid
- [ ] Step 2 - set a height to the columns
- [ ] Step 3 - remove the spacing
- [ ] Step 4 - clean up the code
  - Remove color classes that enable easy visualization of the elements added and changed

# Page 6: [Half carousel](https://mdbootstrap.com/learn/mdb-foundations/mdb-ui-kit/half-carousel/)

Because I absolutely *detest* carousels, I am totally skipping all this nonsense!

# Page 7: [Material Minimal](https://mdbootstrap.com/learn/mdb-foundations/mdb-ui-kit/material-minimal/)

- *"Material Minimal"* is *"an improved version"* of Google's Classic Material Design
  - See below for more about Google's Classic Material Design
- *"Material Minimal"* is the *MDB Design system*

> A design system is a set of standards to manage design at scale by reducing redundancy while creating a shared language and visual consistency across different pages and channels - Therese Fessenden

## Classic Material Design

- *"Material is the metaphor"*
- *"Material Design is inspired by the physical world and its textures"*
- *"Material surfaces reimagine the mediums of paper and ink"*
- With [Material Design Version 3](https://m3.material.io/), Google moved to *"put people at the center"*

## About Material Minimal

- Material Minimal's core values are:
  - Natural - *"inspired by the physical world"*
  - Clear - *"needs to breathe"*
  - Scalable - *"grows with your project"*

This inspires a list of *"some of its most important priniciples"*, which appear in this subsection of the page.

## Accessibility and usefulness

When creating each and every element, the designer should consider this question:

> "Is this really helpful to the user? Or is it just to satisfy my vanity and need for artistic expression?"

## Hierarchy

The user should be able to quickly identify which elements on a page are the most important.


# Page 8: [Nested flexbox]() 
- 
```
```
# Page 9: [Sticky navbar]() 
- 
```
```
# Page 10: [Logo]() 
- 
```
```
# Page 11: [Animated navbar]() 
- 
```
```
# Page 12: [Cascading cards]() 
- 
```
```
# Page 13: [Responsive images]() 
- 
```
```
# Page 14: [Modals]() 
- 
```
```
# Page 15: [Modals advanced features]() 
- 
```
```
# Page 16: [Cascading effect]() 
- 
```
```
# Page 17: [Filters]() 
- 
```
```
# Page 18: [Transforms]() 
- 
```
```
# Page 19: [Hover effects]() 
- 
```
```
# Page 20: [Elevation]() 
- 
```
```
# Page 21: [Dividers]() 
- 
```
```
# Page 22: [Google maps]() 
- 
```
```
# Page 23: [Social media buttons]() 
- 
```
```
# Page 24: [Animations]() 
- 
```
```
# Page 25: [Deployment and repository]() 

- 
```
```
- [ ] Step 1 - 
- [ ] Step 2 - 
- [ ] Step 3 - 
- [ ] Step 4 - 
- [ ] Step 5 - 
- [ ] Step 6 - 
- [ ] Step 7 - 
- [ ] Step 8 - 

## Step 1 - 
## Step 2 - 
## Step 3 - 
## Step 4 - 
## Step 5 - 
## Step 6 - 
## Step 7 - 
## Step 8 - 

