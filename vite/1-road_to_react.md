
# 1-road_to_react.md

Notes from the section *Setting up a React Project* in the chapter *Fundamentals of React* in the *Road to React* e-book.

1. Setting up a React Project

There are two ways:

1. Choose an online [template](https://vitejs.dev/guide/#trying-vite-online)
   - Points to using vite on stackblitz [here](https://vite.new/)
   - That page includes a link to the react-ts template [here](https://vite.new/react-ts)
2. Install everything on your local machine

I am going with #2.

Following are the comands I am running to *install everything on my local machine:*

```
$ pwd
/var/www/always_learning/always_learning_javascript/vite
$ mkdir projects
$ mkdir projects/1-road_to_react
$ cd  projects/1-road_to_react
$ npm -v
9.5.1
$ sudo npm install -g npm@latest
[sudo] password for tomh:

removed 1 package, and changed 51 packages in 7s

18 packages are looking for funding
  run `npm fund` for details
tomh@jane: /var/www/always_learning/always_learning_javascript/vite/projects/1-road_to_react
$ npm -v
9.6.5
$ npm create vite@latest hacker-stories -- --template react
Need to install the following packages:
  create-vite@4.3.1
Ok to proceed? (y) y

Scaffolding project in /var/www/always_learning/always_learning_javascript/vite/projects/1-road_to_react/hacker-stories...

Done. Now run:

  cd hacker-stories
  npm install
  npm run dev
$ npm install

added 240 packages, and audited 241 packages in 17s

81 packages are looking for funding
  run `npm fund` for details

found 0 vulnerabilities
$ npm run dev
  VITE v4.3.3  ready in 1043 ms

  ➜  Local:   http://localhost:5173/
  ➜  Network: use --host to expose
  ➜  press h to show help
[h]
  Shortcuts
  press r to restart the server
  press u to show server url
  press o to open in browser
  press c to clear console
  press q to quit
[q]
$
```

```
```
