
# 4a-just_mdbootstrap.md

Using `vite` to install mdbootstrap.

# Install MDB

Following the steps on
[mdb's download page](https://mdbootstrap.com/docs/react/getting-started/installation/).

# 1. Steps

## 1.1. Step 1

- [x] 1. Download `MDB5-REACT-UI-KIT-Free-6.0.0.zip`.

Commands and output:

```
$ pwd
/var/www/always_learning/always_learning_javascript/vite/projects
$ mkdir -p 4-my_mdb_adventure/1-mdb_unzipped
$ mv  ~/Downloads/MDB5-REACT-UI-KIT-Free-6.0.0.zip 4-my_mdb_adventure/1-mdb_unzipped
$
```

## 1.2. Step 2

- [x] 2. Unzip download and ...

Commands and output:

```
$ pwd
/var/www/always_learning/always_learning_javascript/vite/projects
$ cd 4-my_mdb_adventure/1-mdb_unzipped
$ pwd
/var/www/always_learning/always_learning_javascript/vite/projects/4-my_mdb_adventure/1-mdb_unzipped
$ unzip MDB5-REACT-UI-KIT-Free-6.0.0.zip
Archive:  MDB5-REACT-UI-KIT-Free-6.0.0.zip
  inflating: License.pdf
  inflating: README.txt
  inflating: README.md
  inflating: package.json
  inflating: public/favicon.ico
  inflating: public/logo192.png
  inflating: public/index.html
  inflating: public/logo512.png
  inflating: public/manifest.json
  inflating: public/robots.txt
  inflating: src/App.js
  inflating: src/index.css
  inflating: src/index.js
  inflating: src/reportWebVitals.js
  inflating: src/setupTests.js
$
```

- [x] ... and open in VSCode

### 1.2.1. VSCode Check

- "No problems have been detected in the workspace"
- All files colored in Green
- **Restarted VSCode to be sure!**

## 1.3. Step 3

- [ ] 3. Install dependencies

Commands and output:

```
$ npm install
npm WARN deprecated stable@0.1.8: Modern JS already guarantees Array#sort() is a stable sort, so this library is deprecated. See the compatibility table on MDN: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort#browser_compatibility
npm WARN deprecated rollup-plugin-terser@7.0.2: This package has been deprecated and is no longer maintained. Please use @rollup/plugin-terser
npm WARN deprecated w3c-hr-time@1.0.2: Use your platform's native performance.now() and performance.timeOrigin.
npm WARN deprecated sourcemap-codec@1.4.8: Please use @jridgewell/sourcemap-codec instead
npm WARN deprecated svgo@1.3.2: This SVGO version is no longer supported. Upgrade to v2.x.x.

added 1435 packages, and audited 1436 packages in 2m

235 packages are looking for funding
  run `npm fund` for details

6 high severity vulnerabilities

To address all issues (including breaking changes), run:
  npm audit fix --force

Run `npm audit` for details.
$
```
### 1.3.1. VSCode Check

- "No problems have been detected in the workspace"
- All files colored in Green
- Restarted VSCode to be sure!

This, despite the fact that `npm` flagged all those warnings, hmmm

### 1.3.2. Running `npm audit`

```
$ pwd
/var/www/always_learning/always_learning_javascript/vite/projects/4-my_mdb_adventure/1-mdb_unzipped
$ npm audit
# npm audit report

nth-check  <2.0.1
Severity: high
Inefficient Regular Expression Complexity in nth-check - https://github.com/advisories/GHSA-rp65-9cf3-cjxr
fix available via `npm audit fix --force`
Will install react-scripts@2.1.3, which is a breaking change
node_modules/svgo/node_modules/nth-check
  css-select  <=3.1.0
  Depends on vulnerable versions of nth-check
  node_modules/svgo/node_modules/css-select
    svgo  1.0.0 - 1.3.2
    Depends on vulnerable versions of css-select
    node_modules/svgo
      @svgr/plugin-svgo  <=5.5.0
      Depends on vulnerable versions of svgo
      node_modules/@svgr/plugin-svgo
        @svgr/webpack  4.0.0 - 5.5.0
        Depends on vulnerable versions of @svgr/plugin-svgo
        node_modules/@svgr/webpack
          react-scripts  >=2.1.4
          Depends on vulnerable versions of @svgr/webpack
          node_modules/react-scripts

6 high severity vulnerabilities

To address all issues (including breaking changes), run:
  npm audit fix --force
$
```

## 1.4. Step 4

- [!] 4. Run the application
  - 4.1. ERROR!

```
$ npm run
Lifecycle scripts included in mdb-react-template@6.0.0:
  start
    react-scripts start
  test
    react-scripts test

available via `npm run-script`:
  build
    react-scripts build
  eject
    react-scripts eject
```

```
pwd     # /var/www/always_learning/always_learning_javascript/vite/projects/4-my_mdb_adventure/1-mdb_unzipped
npm run start
```

### 1.4.1. Error!

Rats!  Running `npm run start` causes a fatal error!!

#### 1.4.1. VSCode Error

> Unable to watch for file changes in this large workspace folder. Please follow the instructions link to resolve this issue.

#### 1.4.2. Command Line Error

Here's the main message:

> Error: ENOSPC: System limit for number of file watchers reached, watch '/var/www/always_learning/always_learning_javascript/vite/projects/4-my_mdb_adventure/1-mdb_unzipped/public'

Here's all of the output:

```
$ npm run start
Starting the development server...

/var/www/always_learning/always_learning_javascript/vite/projects/4-my_mdb_adventure/1-mdb_unzipped/node_modules/react-scripts/scripts/start.js:19
  throw err;
  ^

Error: ENOSPC: System limit for number of file watchers reached, watch '/var/www/always_learning/always_learning_javascript/vite/projects/4-my_mdb_adventure/1-mdb_unzipped/public'
    at FSWatcher.<computed> (node:internal/fs/watchers:247:19)
    at Object.watch (node:fs:2343:34)
    at createFsWatchInstance (/var/www/always_learning/always_learning_javascript/vite/projects/4-my_mdb_adventure/1-mdb_unzipped/node_modules/chokidar/lib/nodefs-handler.js:119:15)
    at setFsWatchListener (/var/www/always_learning/always_learning_javascript/vite/projects/4-my_mdb_adventure/1-mdb_unzipped/node_modules/chokidar/lib/nodefs-handler.js:166:15)
    at NodeFsHandler._watchWithNodeFs (/var/www/always_learning/always_learning_javascript/vite/projects/4-my_mdb_adventure/1-mdb_unzipped/node_modules/chokidar/lib/nodefs-handler.js:331:14)
    at NodeFsHandler._handleDir (/var/www/always_learning/always_learning_javascript/vite/projects/4-my_mdb_adventure/1-mdb_unzipped/node_modules/chokidar/lib/nodefs-handler.js:567:19)
    at process.processTicksAndRejections (node:internal/process/task_queues:95:5)
    at async NodeFsHandler._addToNodeFs (/var/www/always_learning/always_learning_javascript/vite/projects/4-my_mdb_adventure/1-mdb_unzipped/node_modules/chokidar/lib/nodefs-handler.js:617:16)
    at async /var/www/always_learning/always_learning_javascript/vite/projects/4-my_mdb_adventure/1-mdb_unzipped/node_modules/chokidar/index.js:451:21
    at async Promise.all (index 0)
Emitted 'error' event on FSWatcher instance at:
    at FSWatcher._handleError (/var/www/always_learning/always_learning_javascript/vite/projects/4-my_mdb_adventure/1-mdb_unzipped/node_modules/chokidar/index.js:647:10)
    at NodeFsHandler._addToNodeFs (/var/www/always_learning/always_learning_javascript/vite/projects/4-my_mdb_adventure/1-mdb_unzipped/node_modules/chokidar/lib/nodefs-handler.js:645:18)
    at process.processTicksAndRejections (node:internal/process/task_queues:95:5)
    at async /var/www/always_learning/always_learning_javascript/vite/projects/4-my_mdb_adventure/1-mdb_unzipped/node_modules/chokidar/index.js:451:21
    at async Promise.all (index 0) {
  errno: -28,
  syscall: 'watch',
  code: 'ENOSPC',
  path: '/var/www/always_learning/always_learning_javascript/vite/projects/4-my_mdb_adventure/1-mdb_unzipped/public',
  filename: '/var/www/always_learning/always_learning_javascript/vite/projects/4-my_mdb_adventure/1-mdb_unzipped/public'
}

Node.js v18.16.0
$
```

### 1.4.2. Fixes Applied

#### 1.4.2.1. Check and Updgrade `npm`

```
$ npm -v
9.6.5
$ sudo npm install -g npm@latest
[sudo] password for tomh:

changed 48 packages in 9s

27 packages are looking for funding
  run `npm fund` for details
$ npm -v
9.6.7
$
```

#### 1.4.2.2. Change `fs.inotify.max_user_watches`

All of these pages:

- [stackoverflow.com](https://stackoverflow.com/questions/55763428/react-native-error-enospc-system-limit-for-number-of-file-watchers-reached)
- [stackoverflow.com](https://stackoverflow.com/questions/65300153/error-enospc-system-limit-for-number-of-file-watchers-reached-angular)
- [code.visualstudio.com](https://code.visualstudio.com/docs/setup/linux#_visual-studio-code-is-unable-to-watch-for-file-changes-in-this-large-workspace-error-enospc)

recommend the same fix:

- Increasing the value of `fs.inotify.max_user_watches`

Following is my process, which is a bit different from theirs, but accomplishes the same thing:

```
sudo su -
cd /etc
wc -l /etc/sysctl.conf                      # It's just 68 lines
more sysctl.conf
rlog sysctl.conf
ci -l sysctl.conf
grep -v '^#' sysctl.conf
grep '^#' sysctl.conf
grep '^#' sysctl.conf | wc -l               # 57 lines are comments
grep -v '^#' sysctl.conf | wc -l            # 11 lines are blank
cat /etc/sysctl.conf
cat /proc/sys/fs/inotify/max_user_watches   # set to 8192
rcsdiff /etc/sysctl.conf                    # not yet in RCS
vi /etc/sysctl.conf                         # added lines below to the end of the file
cat /proc/sys/fs/inotify/max_user_watches   # still 8192
sysctl -p                                   # update the value
cat /proc/sys/fs/inotify/max_user_watches   # now it's 524288, the maximum
```

Lines added to the end of `sysctl.conf`:

```
$ rd sysctl.conf
===================================================================
RCS file: RCS/sysctl.conf,v
retrieving revision 1.1
diff -r1.1 sysctl.conf
68a69,85
> ###################################################################
> #
> # CusTOMizations
> # --------------
> #
> ###################################################################
> #
> # 2023-05-21:
> #   Fix for "Error: ENOSPC: System limit for number of file watchers reached",
> #   Got this error trying to run React+MDBoostrap
> #   References:
> #     https://stackoverflow.com/questions/55763428/react-native-error-enospc-system-limit-for-number-of-file-watchers-reached
> #     https://stackoverflow.com/questions/65300153/error-enospc-system-limit-for-number-of-file-watchers-reached-angular
> #     https://code.visualstudio.com/docs/setup/linux#_visual-studio-code-is-unable-to-watch-for-file-changes-in-this-large-workspace-error-enospc
> #
> fs.inotify.max_user_watches=524288
>
$ ci -l sysctl.conf
RCS/sysctl.conf,v  <--  sysctl.conf
new revision: 1.2; previous revision: 1.1
enter log message, terminated with single '.' or end of file:
>> Updated fs.inotify.max_user_watches at end of file.
>> Comments include three references.
>>
done
$
```

### 1.4.3. Runs OK

Now it runs ok, but with a warning:

```
Compiled with warnings.

Warning
(8:22769) autoprefixer: Replace color-adjust to print-color-adjust. The color-adjust shorthand is currently deprecated.

Search for the keywords to learn more about each warning.
To ignore, add // eslint-disable-next-line to the line before.

WARNING in ./node_modules/mdb-react-ui-kit/dist/css/mdb.min.css (./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].oneOf[5].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[1].oneOf[5].use[2]!./node_modules/source-map-loader/dist/cjs.js!./node_modules/mdb-react-ui-kit/dist/css/mdb.min.css)
Module Warning (from ./node_modules/postcss-loader/dist/cjs.js):
Warning

(8:22769) autoprefixer: Replace color-adjust to print-color-adjust. The color-adjust shorthand is currently deprecated.

webpack compiled with 1 warning
```

## 1.5. Step 5

- [x] Explore docs

>Explore our documentation (menu on the left). Choose components you like, copy it to your project and compose your website. And yes, it's that simple!

