
# 1-whole_shebang-commands.md

A list of commands I can run to initialize a minimal "Hello world"-type project with the components I want to use.

# 1. Components in "The Whole Shebang"

These are the components I am currently planning to use when starting a new project:

- Reactjs
- Vite
- ESLint
- TypeScript
- MDB

# 2. Commands to Create "The Whole Shebang"

```
npm -v                                                       # Check current version of `npm`
sudo npm install -g npm@latest                               # Upgrade current version of `npm`
npm create vite@latest <project-name> -- --template react    # Initialize a React project named "<project-name>"
cd <project-name>                                            # Change into the project's directory
npm install                                                  # Install dependencies
npm run dev                                                  # Run "Hello-world"-type program using React
```

# 3. Sources of the Above Commands

## 3.1. Install Minimal Hello-world-type React Project

- `vite/notes/1-rtr-fundamentals_of_react.md` in this repo
  - Check current version of `npm`
    - Upgrade current version of `npm`
  - Initialize a project using React, install dependencies, and run it
- `vite/notes/2-rtr-typescript_in_react.md` in this repo
  - Add TS
- 

