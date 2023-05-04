
# vscode/2-installation_and_setup.md

Listing the steps needed to install and setup VSCode for use with Reactjs and TypeScript.

# 1. Installation on Ubuntu

## 1.1. References

Both of these sites:

- [phoenixnap.com/kb/install-vscode-ubuntu](https://phoenixnap.com/kb/install-vscode-ubuntu)
- [linuxize.com/post/how-to-install-visual-studio-code-on-ubuntu-20-04/](https://linuxize.com/post/how-to-install-visual-studio-code-on-ubuntu-20-04/)

offer these two methods for installing VSCode:

(1) Install the VSCode `snap`
  - A large package contains everything
(2) Install Using `apt`
  - The IDE shares dependencies with the rest of the OS

For an overview of the difference between these two hoptins, see
[phoenixnap.com/kb/snap-vs-apt](https://phoenixnap.com/kb/snap-vs-apt).

I am picking option (2).

## 1.2. Process

1. Update the system repository:

```
sudo apt update
```

2. Install dependencies:

```
sudo apt install software-properties-common apt-transport-https wget -y
```

3. Add the GPG key from Microsoft:

```
wget -q https://packages.microsoft.com/keys/microsoft.asc -O- | sudo apt-key add -
```

4. Add Microsoft's repository to the OS:

```
sudo add-apt-repository "deb [arch=amd64] https://packages.microsoft.com/repos/vscode stable main"
```

5. Install the IDE:

```
sudo apt install code
```


```
```

# 2. Setup

## 2.1. References

Here are two references I found with tips for setting up VSCode:

- Dated 2022-02-17: [www.freecodecamp.org/news/vscode-react-setup/](https://www.freecodecamp.org/news/vscode-react-setup/)
- Dated 2021-01-19: [www.sitepoint.com/vs-code-react-development/](https://www.sitepoint.com/vs-code-react-development/)

## 2.2. Initial Setup

- Choose a theme
- Got this error message when trying to use github to login and enable syncing with other devices:
  - "Writing login information to the keychain failed with error 'GDBus.Error:org.freedesktop.DBus.Error.ServiceUnknown: The name org.freedesktop.secrets was not provided by any .service files'."
  - Not really planning to sync at this time...
- Enabled the following extensions:
  - Recommended:
    - Python - Microsoft
    - HTML CSS Support - ecmel
    - ES7+ React/Redux/React-Native snippets - dsznajder
  - After searching for "typescript":
    - GitHub Copilot - GitHub
    - JavaScript and TypeScript Nightly - Microsoft
    - TypeScript React code snippets - infeng
    - Pretty TypeScript Errors - yoavbls
    - Prittier - Code formatter - Prettier
      - Recommended by [www.freecodecamp.org/news/vscode-react-setup/](https://www.freecodecamp.org/news/vscode-react-setup/)
  - **TODO:** May want to come back to these

