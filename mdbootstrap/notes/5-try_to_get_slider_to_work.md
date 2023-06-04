
# 5-try_to_get_slider_to_work.md

Ok, now it is time to finally try to get something done....

# 1. Setup

## 1.1. Commands

```
pwd                                            # /var/www/always_learning/always_learning_javascript/mdbootstrap/projects
                                               # Start with vite
npm init vite@latest -- --template react-ts    # *Note:* set project name to "5-try_to_get_slider_to_work"

cd  5-try_to_get_slider_to_work                # /var/www/always_learning/always_learning_javascript/mdbootstrap/projects/5-try_to_get_slider_to_work
npm i mdb-react-ui-kit                         # Add mdb and react
npm install                                    # Seems unnecessary, but won't hurt
npm run                                        # Should see these options: dev, build, lint, and preview
npm run dev                                    # Start development server; press "q" to quit
```

# 2. Sanity Checks

- [x] Check in browser at http://localhost:5173/
- [x] Load into VSCode
  - [x] Confirm there are no issues
- [x] Run `npm run lint`
  - [x] 1. Confirm there are no other issues
  - [x] 2. Ok to ignore errors complaining that the version of TypeScript is too recent
- [x] Test linting
  - [x] 1. Add `const test_linting = 'Test Linting';` to `App.tsx`
  - [x] 2. Confirm lint errors show up in VSCode
  - [x] 3. Confirm lint errors show up when running `npm run lint`
  - [x] 4. Delete or comment out the line added so we no longer see these errors
- [x] Test saying "Hi"
  - [x] 1. Add `<h2>Hi!  Bonjour!  Hola!</h2>` to value returned in `function App()` `App.tsx`
  - [x] 2. Confirm this shows up in browser

# 3. Implement Slider

## 3.1. Resources

- See MDB documentation for their "Range" component:
  - [MDB Range component](https://mdbootstrap.com/docs/react/forms/range/)
- See the files in the top-level `reactjs` directory in this repo

## 3.2. Results

- See the `MyRange` function component in `src/App.tsx`:
- That was easy enough, but ...
  - ... well, I've spent so much time lately on TS and MDB, I will need to review how React works!

**Note:** we may actually finally be moving away from writing these notes files and focusing on coding!  Woot woot!!

