
# 1-basics.md

How to install the basics.

# References

Available references seem to be written for newbies using Windows and Mac OS.
As an experienced linux-lover, it seems I am kind of on my own here, frankensteining things at best.

## Initial Sources

Starting with these two sources:

- React docs [Start a New React Project](https://beta.reactjs.org/learn/start-a-new-react-project)
  - Choosing the *Getting started with a minimal toolchain* adventure
- My new *Road to React* e-book

Both of these agree that I will need node and npm, which I kinda knew somehow anyway.

# node and npm

Used the Discover Software Center app to install `node` and `npm`.
Apparently installing `npm` also installed `npx`.

Tested the installation, to a minimal extent:

```
 $ which node
/usr/bin/node
 $ which npm
/usr/bin/npm
 $ which npx
/usr/bin/npx
 $ node --version
v10.19.0
 $ npm --version
6.14.4
 $ npx --version
6.14.4
 $ man node    # man page for node displays
 $ man npm     # man page for npm displays
 $ man npx     # man page for npx displays
 $
```

So far, so good.

