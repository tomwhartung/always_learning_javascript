
# 5-try_to_get_slider_to_work.md

Ok, now it is time to finally try to get something done....

# 1. Setup

## 1.1. Commands

```
pwd                                            # /var/www/always_learning/always_learning_javascript/mdbootstrap/projects
npm init vite@latest -- --template react-ts    # Start with vite and set project name to "5-try_to_get_slider_to_work"
cd  5-try_to_get_slider_to_work                # /var/www/always_learning/always_learning_javascript/mdbootstrap/projects/5-try_to_get_slider_to_work
npm i mdb-react-ui-kit                         # Add mdb and react
npm run                                        # Should see these options: dev, build, lint, and preview
npm install                                    # Seems unnecessary, but won't hurt
npm run dev                                    # Start development server; press "q" to quit
```

# 2. Sanity Checks

- [ ] Check in browser at http://localhost:5173/
- [ ] Load into VSCode
  - [ ] Confirm there are no issues
- [ ] Run `npm run lint`
  - [ ] 1. Confirm there are no other issues
  - [ ] 2. Flags version of TypeScript as being too recent
- [ ] Test linting
  - [ ] 1. Add `const test_linting = 'Test Linting';` to `App.tsx`
  - [ ] 2. Confirm lint errors show up in VSCode
  - [ ] 3. Confirm lint errors show up when running `npm run lint`
  - [ ] 4. Uncomment line added so we no longer see these errors
- [ ] Test saying "Hi"
  - [ ] 1. Add `<h2>Hi!  Bonjour!  Hola!</h2>` to value returned in `function App()` `App.tsx`
  - [ ] 2. Confirm this shows up in browser

