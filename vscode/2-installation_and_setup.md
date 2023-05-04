
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



