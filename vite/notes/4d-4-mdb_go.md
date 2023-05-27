
# 4d-4-mdb_go.md

Running through MDB's
[MDB GO tutorial](https://mdbootstrap.com/learn/mdb-foundations/mdb-go/about/).

# Page 1: [About MDB GO](https://mdbootstrap.com/learn/mdb-foundations/mdb-go/about/)

Following are a few things that MDB GO provides for its users:

- Free hosting
- Front and back-end templates
- SFTP & CLI
- Integration with React

# Page 2: [Node.js & NPM installation](https://mdbootstrap.com/learn/mdb-foundations/mdb-go/nodejs-and-npm-installation/)

- [x] Done
  - For details, see *"Step 1"* under *"Page 4: Deploy your project"* in `4d-1-basics.md` in this directory

# Page 3: [MDB GO & MDB CLI installation](https://mdbootstrap.com/learn/mdb-foundations/mdb-go/mdb-go-and-mdb-cli-installation/)

- [x] Done
  - For details, see *"Step 2"*, *"Step 3"*, and *"Step 4"*, under *"Page 4: Deploy your project"* in `4d-1-basics.md` in this directory

# Page 4: [Terminal basics](https://mdbootstrap.com/learn/mdb-foundations/mdb-go/terminal-basics/)

- Very basic info for total newbies

# Page 5: [Initialize new project](https://mdbootstrap.com/learn/mdb-foundations/mdb-go/initialize-new-project/)

- [x] Step 1 - open a terminal and make sure you are logged in
  - Run `mdb login`
  - For details, see *"Step 4"* in section *"Page 4: [Deploy your project]"* of `4d-1-basics.md`
- [x] Step 2 - download MDB package via CLI
  - Project directory: `vite/projects/4-my_mdb_adventure/4d-mdb_cli-mdb_go`
  - Run `mdb init`
    - For details, see the first code box below
  - **Note:** this time I also ran `npm install`
    - For details, see the second code box below
- [!] Step 3 - open the project in the code editor
  - I downloaded `mdb5-free-react` and it does not include an `index.html` file

```
$ mdb init
? Choose project to initialize mdb5-free-react
[====================================================================================================] 0.0 s
Project starter will be downloaded to /var/www/always_learning/always_learning_javascript/vite/projects/4-my_mdb_adventure/4d-mdb_cli-mdb_go/tmp folder
$ ls -Al
total 4
drwxr-xr-x 4 tomh tomh 4096 May 27 16:58 mdb5-free-react
$ cd ..
$ mv tmp/mdb5-free-react .
$ mv mdb5-free-react/ 4d-mdb_cli-mdb_go
$
```

**New:** Since I downloaded the React package, I am guessing I need to run `npm install`, even though this tutorial doesn't call for doing that.

```
$ npm install
npm WARN deprecated stable@0.1.8: Modern JS already guarantees Array#sort() is a stable sort, so this library is deprecated. See the compatibility table on MDN: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort#browser_compatibility
npm WARN deprecated rollup-plugin-terser@7.0.2: This package has been deprecated and is no longer maintained. Please use @rollup/plugin-terser
npm WARN deprecated w3c-hr-time@1.0.2: Use your platform's native performance.now() and performance.timeOrigin.
npm WARN deprecated sourcemap-codec@1.4.8: Please use @jridgewell/sourcemap-codec instead
npm WARN deprecated svgo@1.3.2: This SVGO version is no longer supported. Upgrade to v2.x.x.

added 1445 packages, and audited 1446 packages in 2m

235 packages are looking for funding
  run `npm fund` for details

6 high severity vulnerabilities

To address all issues (including breaking changes), run:
  npm audit fix --force

Run `npm audit` for details.
$
```

# Page 6: [Publish and update project](https://mdbootstrap.com/learn/mdb-foundations/mdb-go/publish-update-project/)

- Have done this before, but not doing this at this time
  - For details, see *"Step 4"* in section *"Page 4: [Deploy your project]"* of `4d-1-basics.md`
  - **Note:** in addition to deploying new code, running `mdb publish` will also deploy updated code

# Page 7: [Custom domains](https://mdbootstrap.com/learn/mdb-foundations/mdb-go/custom-domains/)

- Using an external domain name is possible only with paid accounts
- To change the subdomain used for a free account, see the code box below
  - I.e. to change the `yourname` in `https://yourname.mdbgo.io/`

```
mdb config domain <your_new_name.mdbgo.io>
```
# Page 8: [Repository](https://mdbootstrap.com/learn/mdb-foundations/mdb-go/repository/)

- Using a repository is possible only with paid accounts
- Fortunately I am quite familiar with git

# Page 9: [Git basics](https://mdbootstrap.com/learn/mdb-foundations/mdb-go/git-basics/)

- Fortunately, I am already quite familiar with git

# Page 10: [Collaboration](https://mdbootstrap.com/learn/mdb-foundations/mdb-go/collaboration/)

- Shows how to share your code with others, and even transfer ownership

# Page 11: [FTP/SFTP](https://mdbootstrap.com/learn/mdb-foundations/mdb-go/sftp/)

- Shows how to use FTP in MDB GO
- At this time, I cannot imagine that I would want to use this feature

