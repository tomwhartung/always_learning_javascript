
# TODO-maybe-reorganization_tips.md

Some ideas I *might* want to pursue someday in the future, especially if one of my projects gets to be really huge.

# 1. Idea: Consolidate `*.css` Files Into a Single Directory

Before doing this, be sure to see section *"2. Folder Organization and Other Tips I Haven't Tried Yet"* below.

## 1.1. Copy or Link `/node_modules/mdb-react-ui-kit/dist/css/mdb.min.css` to `css/mdb.min.css`??

The [MDB Download and Setup Page](https://mdbootstrap.com/learn/mdb-foundations/bootstrap/download-and-setup/) offers the
following example code for loading  the `mdb.min.css` file:

```
<link rel="stylesheet" href="css/mdb.min.css" />
```

Meanwhile, the little sample app mixes the `.css` files in with the others under `src/`:

```
$ l  src/*.css
-rw-r--r-- 1 tomh tomh  606 Jun 19 13:56 src/App.css
-rw-r--r-- 1 tomh tomh 1195 Jun 19 13:56 src/index.css
$ l  src/*.*
-rw-r--r-- 1 tomh tomh  606 Jun 19 13:56 src/App.css
-rw-r--r-- 1 tomh tomh  905 Jun 19 13:56 src/App.tsx
-rw-r--r-- 1 tomh tomh 1195 Jun 19 13:56 src/index.css
-rw-r--r-- 1 tomh tomh  250 Jun 19 13:56 src/main.tsx
-rw-r--r-- 1 tomh tomh   38 Jun 19 13:56 src/vite-env.d.ts
$
```

So ..., well I'm not sure what to think about that!


# 2. Folder Organization and Other Tips I Haven't Tried Yet

Here are some links to blog posts about this:

- [Tips for Organizing React Projects](https://dev.to/chrisachard/tips-for-organizing-react-projects-191)
  - In item 8 he says to store `*.css` files with the components that use them
    - [This post](https://scrimba.com/articles/react-project-structure/) has an example of how that might look
    - Another article recommended putting all 3rd-party code in the `public` directory
      - So maybe we should put `mdb.min.css` there?
  - However the first tip probably has the best overall advice:

> "First, and above all else: do what works for you and your team.
> There is a lot of advice out there, and much of it conflicts.
> Don't feel anxiety about not doing it "the right way".
> If it works for you and your team - then that is the "right way".

- This post about [React Architecture](https://www.taniarascia.com/react-architecture-directory-structure/):
  - Also has some thoughts I might want to look at some day once things get *really* complicated...
- And here's one about a [better way](https://www.freecodecamp.org/news/a-better-way-to-structure-react-projects/)

