
# 4-my_mdb_adventure.md

Taking a break from React, TS, and attempting to get ESLint to work with them, it's time to
*use `vite` to install mdbootstrap* and see what happens.

# My MDB Adventure!

The adventure starts with
[MDB's Bootstrap 5 & React 18 demo page](https://mdbootstrap.com/docs/react/#demo).

# Projects

- [x] 1. Use `vite` to install mdbootstrap
  - From [mdb's download page](https://mdbootstrap.com/docs/react/getting-started/installation/)
  - Notes are in `4a-just_mdbootstrap.md` in this directory
  - Project is in `vite/projects/4-my_mdb_adventure/1-mdb_unzipped`

- [x] 2. Add TypeScript to MDB's `MDB5-REACT-UI-KIT-Free-6.0.0`
  - Notes are in `4b-mdb_and_ts.md` in this directory
  - Project is in `vite/projects/4-my_mdb_adventure/2-mdb_and_ts`
  - **This Failed**
    - This totally broke `npm install`
    - Did not break the App but ... it is obviously unacceptable in its current state

- [x] 3. Could MDB+React Already Include TS?
  - This was a long shot but I "tried" it anyway
  - Notes are in `4c-does_mdb_include_ts` in this directory
  - Project is in `vite/projects/4-my_mdb_adventure/3-does_mdb_include_ts`
  - **No,** but I found what I was looking for, hopefully

- [x] 4. Start [haha] with MDB CLI
  - This option appears second, and the first, manual download option is giving me trouble
  - **"CLI installation is the most efficient way to use MDB."**
    - [Their MDB CLI page](https://mdbootstrap.com/learn/mdb-foundations/basics/introduction/)
  - Notes are in `4D-mdb_foundations.md` in this directory
  - Projects:
    - See the list in `4D-mdb_foundations.md` in this directory

- [!] 5. I thought I saw something about Vite + MDB + React???
  - **YES!!**
    - [Vite Integration -> Vite Starter](https://mdbootstrap.com/docs/standard/getting-started/vite-integration/#section-vite-starter)
  - Notes are in `4e-vite_react_mdb-for_reals.md` in this directory
  - Project is in `vite/projects/4-my_mdb_adventure/5-vite_react_mdb-for_reals`
    - **This idea *failed!* **
    - It looks like we are stuck with using `create-react-app`
    - **Rats!**

- [x] 6. Is there another way to add TS to MDB+React?
  - Yes, but not if I want to use vite
  - So, we are saying good-bye to this `vite` directory ...

... and moving on to the `mdbootstrap` directory!

