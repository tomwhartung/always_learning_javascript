
# 4c-does_mdb_include_ts.md

Using `vite` to install MDB-React, and then switching over to Typescript.

**Note:** This seems like a long shot, but it would be nice if ....

# 0. Why

## 0.1. Running `npm install` Says ...

... `npm ERR! Found: typescript@5.0.4`

```
$ npm install
. . .
npm ERR! While resolving: react-scripts@5.0.1
npm ERR! Found: typescript@5.0.4
npm ERR! node_modules/typescript
npm ERR!   dev typescript@"^5.0.4" from the root project
npm ERR!   peer typescript@">= 2.7" from fork-ts-checker-webpack-plugin@6.5.3
npm ERR!   node_modules/fork-ts-checker-webpack-plugin
. . .
```

## 0.2. Looking at `package*` Diffs ...

... looks like it just added typescript:

```
$ git diff f6b55a6b86146d3e3472df19dc93a2f0b07d1936 package.json*
diff --git a/vite/projects/4-my_mdb_adventure/2-mdb_and_ts/package.json b/vite/projects/4-my_mdb_adventure/2-mdb_and_ts/package.json
index 698baa5..5859920 100644
--- a/vite/projects/4-my_mdb_adventure/2-mdb_and_ts/package.json
+++ b/vite/projects/4-my_mdb_adventure/2-mdb_and_ts/package.json
@@ -4,11 +4,11 @@
   "description": "template for mdb-react-ui-kit",
   "private": true,
   "dependencies": {
+    "mdb-react-ui-kit": "6.0.0",
     "react": "^18.1.0",
     "react-dom": "^18.1.0",
     "react-scripts": "5.0.1",
-    "web-vitals": "^2.1.4",
-    "mdb-react-ui-kit": "6.0.0"
+    "web-vitals": "^2.1.4"
   },
   "scripts": {
     "start": "react-scripts start",
@@ -33,5 +33,10 @@
       "last 1 firefox version",
       "last 1 safari version"
     ]
+  },
+  "devDependencies": {
+    "@types/react": "^18.2.6",
+    "@types/react-dom": "^18.2.4",
+    "typescript": "^5.0.4"
   }
 }
```

**I know it's a long shot, but I have to be sure!**

-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
YOU ARE HERE
-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-

# 1. Install MDB

Steps come from `4a-just_mdboostrap.md` in this directory.
For details, see that file.

## 1.1. Steps 1, 2, & 3

- [x] 1. Download `MDB5-REACT-UI-KIT-Free-6.0.0.zip`.
- [x] 2. Unzip download and and open in VSCode
- [x] 3. Install dependencies

```
pwd                                 # /var/www/always_learning/always_learning_javascript/vite/projects/4-my_mdb_adventure
mkdir 3-does_mdb_include_ts
cp 0-downloaded/MDB5-REACT-UI-KIT-Free-6.0.0.zip  3-does_mdb_include_ts
cd 3-does_mdb_include_ts
pwd                                 # /var/www/always_learning/always_learning_javascript/vite/projects/4-my_mdb_adventure/3-does_mdb_include_ts
unzip MDB5-REACT-UI-KIT-Free-6.0.0.zip
npm install
```

**Note:** running `npm install` displays five warnings and "`6 high severity vulnerabilities`".

### 1.1.1. VSCode Check

All files colored in Green; "No problems have been detected in the workspace"; restarted VSCode to be sure!

## 1.2. Steps 4 & 5

- [x] 4. Run the application
- [x] Explore docs

```
npm run         # we can start, test, build, or eject
npm run start   # it runs ok, but is quite slow to load...
```

**VSCode Check:** Looking good!

**Note:** Checked current version of project into github.

# 2. Install TS

Skipping the install, because that screwed us up last time.

# 3. Configure TS

Steps come from subsection `2.4. Configure Typescript` of `3b-ts_eslint_react-2-react_ts_no_eslint.md` in this directory.
For details, see that file.

## 3.1. Create `tsconfig.json` and `tsconfig.node.json`

- Create `tsconfig.json` with contents as specified in `2.4. Configure Typescript` of `3b-ts_eslint_react-2-react_ts_no_eslint.md`
- Create `tsconfig.node.json` with contents as specified in `2.4. Configure Typescript` of `3b-ts_eslint_react-2-react_ts_no_eslint.md`

### 3.1.1. Checks

- VSCode looks good
- `npm run start` - App still runs ok

## 3.2. Rename `*.jsx` Files and Edit `index.html`

Ummm, this is nuts.

Definitely on the wrong track here.

**Note:** Abandoning this project....

