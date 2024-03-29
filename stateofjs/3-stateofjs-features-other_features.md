
# 3-stateofjs-other_features.md

This page contains some notes about the
[stateofjs' list of JS other features](https://2022.stateofjs.com/en-US/features/other-features/).

## TODOs

This file contains some **TODO** items, recommending more in-depth study of features
I am just kind of glossing over right now.

**Here is a summary of these TODOs:**

- 1. Progressive Web Apps (PWAs)
  - Look into all this when I have the inclination to, and more time to do so
  - The [MDN page for *PWAs*](https://developer.mozilla.org/en-US/docs/Web/Progressive_web_apps) is a good place to *start*


# 1. Progressive Web Apps (PWAs)

Here are some notes from
[MDN's page describing *progressive Web Apps*](https://developer.mozilla.org/en-US/docs/Web/Progressive_web_apps).

## Overview

Note: The page linked to above provides only a high-level overview with links to more detailed information.
It does not even *define* the following terms!

Progressive web apps enable web application developers to provide users with
[Progressive enhancement](https://developer.mozilla.org/en-US/docs/Glossary/Progressive_Enhancement).
This means providing base functionality to all users, then increasingly sophisticated functionality to
users who have the hardware needed to support it.

Some essential elements of progressive enhancement are:

- [Feature detection](https://developer.mozilla.org/en-US/docs/Learn/Tools_and_testing/Cross_browser_testing/Feature_detection)
  - The ability to determine whether the user's browser supports the features a given block of code needs to run
- [Polyfills](https://developer.mozilla.org/en-US/docs/Glossary/Polyfill)
  - JavaScript code that can mimic the new capabilities of more modern browsers in older browsers that lack these capabilities
  - Older versions of jQuery were early examples in that they provided developers with cross-browser functionality

## Description

[MDN's introduction to PWAs](https://developer.mozilla.org/en-US/docs/Web/Progressive_web_apps/Introduction)
provides an additional level of detail about them:

Following are some of the principles progressive web apps should follow:

- [Discoverability](https://developer.mozilla.org/en-US/docs/Web/Progressive_web_apps/Introduction#discoverability)
  - Enable search engines to discover the web page's contents
- [Installability](https://developer.mozilla.org/en-US/docs/Web/Progressive_web_apps/Introduction#installability)
  - Enable the page to be made available on the home screen or app launcher of a device
- [Linkability](https://developer.mozilla.org/en-US/docs/Web/Progressive_web_apps/Introduction#linkability)
  - Enables users to share it by sending its URL
- [Network independence](https://developer.mozilla.org/en-US/docs/Web/Progressive_web_apps/Introduction#network_independence)
  - Enables users to continue using the app even when the network connection is poor or non-existent
- [Hardware flexibility](https://developer.mozilla.org/en-US/docs/Web/Progressive_web_apps/Introduction#progressive_enhancement_support)
  - Supports older browers while also utilizing the new features that modern browsers provide
- [Re-engageablility](https://developer.mozilla.org/en-US/docs/Web/Progressive_web_apps/Introduction#re-engageability)
  - Able to let users know when new content is available
- [Device independence](https://developer.mozilla.org/en-US/docs/Web/Progressive_web_apps/Introduction#responsiveness)
  - Able to work on a variety of device types, from phones, laptops, TVs, to even appliances such as refridgerators
- [Secure](https://developer.mozilla.org/en-US/docs/Web/Progressive_web_apps/Introduction#secure)
  - Able to keep sensitive data private from third parties who lack permission to see it

## TODO

Look into all this when I have the inclination to, and more time to do so.
The [MDN page for *progressive Web Apps*](https://developer.mozilla.org/en-US/docs/Web/Progressive_web_apps)
is a good place to *start.*

## For Details

For details about this feature, see the
[MDN page for *progressive Web Apps*](https://developer.mozilla.org/en-US/docs/Web/Progressive_web_apps).


# 2. WebAssembly (WASM)

Here are some notes from
[MDN's page describing *WebAssembly*](https://developer.mozilla.org/en-US/docs/WebAssembly).

## Overview

WebAssembly is a fast, extremely efficient, low-level language similar to assembly with a compact binary format.

It can provide a compilation target for languages such as C/C++, C#, and Rust and is designed to work with JavaScript.

## Description

WebAssembly allows code written in other languages to run on the web.

- The [WebAssembly JavaScript Interface](https://developer.mozilla.org/en-US/docs/WebAssembly/JavaScript_interface) allows these other languages to share resources and run alongside each other.
- The [W3C WebAssembly Working Group](https://www.w3.org/wasm/) is working on standards with representatives from all major browsers.

A good way to get started learning about WebAssembly is to access
[MDN's WebAssembly Concepts page](https://developer.mozilla.org/en-US/docs/WebAssembly/Concepts).

## Example Code

For examples, see MDN's [webassembly-examples](https://github.com/mdn/webassembly-examples/) github repo.

## For Details

For details about this feature, see the
[MDN page for *WebAssembly*](https://developer.mozilla.org/en-US/docs/WebAssembly).

