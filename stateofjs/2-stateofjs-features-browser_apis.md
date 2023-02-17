
# 2-stateofjs-browser_apis.md

This page contains some notes about the
[stateofjs' list of JS browser apis](https://2022.stateofjs.com/en-US/features/browser-apis/).

## TODOs

This file contains some **TODO** items, recommending more in-depth study of features
I am just kind of glossing over right now.

**Here is a summary of these TODOs:**

- 3. WebGL: Getting started with WebGL
  - Follow the links at the end and decide whether I want to use WebGL in my project
- 4. Web Animations: Using the Web Animations API
  - Check out these [animation demos](https://codepen.io/collection/nqNJvD) on codepen
- 8. Custom Elements and 9. Shadow DOM
  - Spend a little time looking at HTML templates, the third feature on MDN's Web Components page
  - [Using templates and slots tutorial](https://developer.mozilla.org/en-US/docs/Web/Web_Components/Using_templates_and_slots).


# 1. Service Worker:Service Worker API

Here are some notes from
[MDN's page describing the *Service Worker API*](https://developer.mozilla.org/en-US/docs/Web/API/Service_Worker_API).

## Overview

A service worker acts as a proxy for a web application to use when working with the browser and network.

## Description

Service workers manage network requests, taking appropriate action when the network is down.
They also send update requests to the server.

## Concepts and Usage

A service worker is a javascript file known as a
[*worker*](https://developer.mozilla.org/en-US/docs/Web/API/Worker).
and designed to perform background processes.

Service workers have no DOM access and run asynchronously.
That is, they are non-blocking, because they run in a different thread than the main JS process.
They are restricted to using HTTPS and, in Firefox, they are hidden and do not work in private browsing mode.

Use `ServiceWorkerContainer.register(scriptURL [,options])` to register a service worker.

This is the lifecycle that service workers follow as soon as a user accesses a page defining one:

1. Download
2. Install
3. Activate

### Possible Uses

Following are a few of the things service workers are intended to do:

- Synchronize background data
- Respond to resource requests
- Contain hooks for background services
- Serve as a single source for updates to expensive data, such as geolocation data, for multiple pages
- Pre-fetch data likely to be needed

This technology is expected to develop, so that the number of possible uses will grow with time.

## For Details

For details about this feature, see the
[MDN page for the *Service Worker API*](https://developer.mozilla.org/en-US/docs/Web/API/Service_Worker_API).


# 2. Intl: Intl - JavaScript

Here are some notes from
[MDN's page describing *JavaScript's Internationalization API*](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl).

## Overview

Use the `Intl` object to provide language-sensitive services such as string comparison and number formatting.
It furnishes the namespace for the *ECMAScript Internationalization API.*

## Description

`Intl` supports several different constructors and a couple of static methods
that can identify `locales`, that are case-sensitive ASCII strings.

These `locales` in turn identify and contain language, region or country, and other subtags for the `locale`.

## Example Code

Following is an example of how the `Intl` object can format dates and numbers:

```javascript
const count = 26254.39;
const date = new Date("2012-05-24");

function log(locale) {
  console.log(
    `${new Intl.DateTimeFormat(locale).format(date)} ${new Intl.NumberFormat(locale).format(count)}`
  );
}

log("en-US"); // 5/24/2012 26,254.39

log("de-DE"); // 24.5.2012 26.254,39
```

## For Details

For details about this feature, see the
[MDN page for *JavaScript's Internationalization API*](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl).


# 3. WebGL: Getting started with WebGL

Here are some notes from
[MDN's page for *Getting started with WebGL*](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Tutorial/Getting_started_with_WebGL).

## Overview

MDN's *Getting started* page is the first in a series of pages that introduce readers to an API based on the Khronos Group's
[Open GL|ES](https://www.khronos.org/opengles/) standard for embedded accelerated 2D and 3D graphics.

## Description

These pages assume that readers already have "an understanding of the mathematics involved in 3D graphics."

Note that there are other frameworks built on top of WebGL that can make certain types of applications easier to develop.
Examples include:

- [THREE.js](https://threejs.org/)
- [BABYLON.js](https://www.babylonjs.com/)

and there are many others.

## Example Code

The following code shows how to get started by using these two files:

- `index.html`
- `webgl-demo.js`

to create a:

> big black, empty box, ready and waiting to receive content.

The contents of `index.html`:

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <title>WebGL Demo</title>
    <script *src="webgl-demo.js"* type="module" defer></script>
  </head>

  <body>
    *<canvas id="glcanvas" width="640" height="480"></canvas>*
  </body>
</html>
```

The contents of `webgl-demo.js`:

```javascript
main();

//
// start here
//
function main() {
  const canvas = document.querySelector("#glcanvas");
  // Initialize the GL context
  const gl = canvas.getContext("webgl");

  // Only continue if WebGL is available and working
  if (gl === null) {
    alert(
      "Unable to initialize WebGL. Your browser or machine may not support it."
    );
    return;
  }

  // Set clear color to black, fully opaque
  gl.clearColor(0.0, 0.0, 0.0, 1.0);
  // Clear the color buffer with specified clear color
  gl.clear(gl.COLOR_BUFFER_BIT);
}
```

## For Details

For details about this feature, see the
[MDN page for *Getting started with WebGL*](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Tutorial/Getting_started_with_WebGL).

Just before link to the next page in MDN's series of pages on this topic,
this page ends with a **See also** section with the following links:

- [An introduction to WebGL](https://dev.opera.com/articles/introduction-to-webgl-part-1/) on `dev.opera.com`
- [WebGL Fundamentals](https://webglfundamentals.org/)
- [An intro to modern OpenGL](https://duriansoftware.com/joe/an-intro-to-modern-opengl.-table-of-contents)

### TODO

Follow the links mentioned in the previous and decide whether I want to use WebGL in my project.


# 4. Web Animations: Using the Web Animations API

Here are some notes from
[MDN's page for *Using the Web Animations API*](https://developer.mozilla.org/en-US/docs/Web/API/Web_Animations_API/Using_the_Web_Animations_API).

## Overview

The [Web Animations API](https://developer.mozilla.org/en-US/docs/Web/API/Web_Animations_API)
allows for the construction of DOM element animations, and to control their playback.

## Description

The [Web Animations API](https://developer.mozilla.org/en-US/docs/Web/API/Web_Animations_API)
was designed to help implement [CSS Animations](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Animations)
and [CSS Transitions](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Transitions).

This API allows using JavaScript rather than CSS to create interactive animations.

## Example Code

The following code shows how you can use CSS to create an animation:

```
#alice {
  animation: aliceTumbling infinite 3s linear;
}

@keyframes aliceTumbling {
  0% {
    color: #000;
    transform: rotate(0) translate3D(-50%, -50%, 0);
  }
  30% {
    color: #431236;
  }
  100% {
    color: #000;
    transform: rotate(360deg) translate3D(-50%, -50%, 0);
  }
}
```

This code shows how to use JavaScript to do the same thing:

```javascript
//
// 1. Create a Keyframe Object
//
const aliceTumbling = [
  { transform: 'rotate(0) translate3D(-50%, -50%, 0)', color: '#000' },
  { color: '#431236', offset: 0.3 },
  { transform: 'rotate(360deg) translate3D(-50%, -50%, 0)', color: '#000' }
];
//
// 2. Create an object of timing properties:
//
const aliceTiming = {
  duration: 3000,
  iterations: Infinity
}
//
// 3. Bring the Keyframe Object and timing properties together:
//
document.getElementById("alice").animate(
  aliceTumbling,
  aliceTiming
)
```

Following is another way of doing the same thing, by passing in the keyframe and timing object properties:

```javascript
document.getElementById("alice").animate(
  [
    { transform: 'rotate(0) translate3D(-50%, -50%, 0)', color: '#000' },
    { color: '#431236', offset: 0.3 },
    { transform: 'rotate(360deg) translate3D(-50%, -50%, 0)', color: '#000' }
  ], {
    duration: 3000,
    iterations: Infinity
  }
);
```

### Pausing and Playing Animations

The API also provides methods to `pause`, `play`, `finish`, `cancel` and `reverse` animations,
as well as change their `playbackRate` by calling `updatePlaybackRate`.

## For Details

For details about this feature, see the
[MDN page for *Using the Web Animations API*](https://developer.mozilla.org/en-US/docs/Web/API/Web_Animations_API/Using_the_Web_Animations_API).


# 5. WebRTC: WebRTC API

Here are some notes from
[MDN's page for using the *WebRTC API*](https://developer.mozilla.org/en-US/docs/Web/API/WebRTC_API).

## Overview

Web Real-Time Communication or **WebRTC** enables applications and sites to capture and stream A/V media.
It also allows browsers to exchange data without an intermediary.

## Concepts and Usage

WebRTC comprises standards allowing peer-to-peer teleconferencing without additonal third-party software or plug-ins.
This includes support for file exchange, sharing of screens, management of identities, interfacing with legacy
telephone systems, and arbitrary binary data.

This MDN page includes a full set of links to detailed information about how to use this feature.

## For Details

For details about this feature, see the
[MDN page for using the *WebRTC API*](https://developer.mozilla.org/en-US/docs/Web/API/WebRTC_API).

### TODO

Check out these [animation demos](https://codepen.io/collection/nqNJvD) on codepen.


# 6. Web Speech API

Here are some notes from
[MDN's page describing the *Web Speech API*](https://developer.mozilla.org/en-US/docs/Web/API/Web_Speech_API).

## Overview

These two interfaces of the Web Speech API support incorporating speech into web apps:

- Use the `SpeechSynthesis` for converting text into speech
- Use the `SpeechRecognition` for converting speech into text

## Concepts and Usage

The `SpeechSynthesis` interface supports text-to-speech capabilities.
`SpeechSynthesisVoice` objects can represent different voice types and
`SpeechSynthesisUtterance` objects can represent different parts of speech.
Use the `SpeechSynthesis.speak()` method to actually speak the data that these objects contain.

After creating a new `SpeechRecognition` object and using it to detect when the microphone is active,
you can use the `SpeechGrammar` interface to set the grammar you want the app to recognize.

## For Details

For details about this feature, see the
[MDN page for the *Web Speech API*](https://developer.mozilla.org/en-US/docs/Web/API/Web_Speech_API).


# 7. WebSocket: The WebSocket API (WebSockets)

Here are some notes from
[MDN's page describing *The WebSocket API (WebSockets)*](https://developer.mozilla.org/en-US/docs/Web/API/WebSockets_API).

## Overview

Web Sockets enable interactive communication between the user and a server.

## Description

The Web Socket API supports the following interfaces:

- `WebSocket` - allows connecting to a WebSocket server and exchanging data
- `CloseEvent` - event sent when the connection closes
- `MessageEvent` - event sent when the server sends a message to the browser

## For Details

For details about this feature, see the
[MDN page for *The WebSocket API (WebSockets)*](https://developer.mozilla.org/en-US/docs/Web/API/WebSockets_API).


# 8. Custom Elements: Web Components -> Custom elements

Here are some notes from
[MDN's page describing *Web Components, Custom elements*](https://developer.mozilla.org/en-US/docs/Web/Web_Components).

## Overview

Custom elements are one part of a set of technologies that allow developers to create reusable custom elements.

## Concepts and Usage

Custom elements are Javascript APIs allowing developers to define reusable custom elements.

MDN's [Using custom elements tutorial](https://developer.mozilla.org/en-US/docs/Web/Web_Components/Using_custom_elements)
starts with a High-level view that discusses how to use the
[`CustomElementRegistry`](https://developer.mozilla.org/en-US/docs/Web/API/CustomElementRegistry)
object to use the `define()` method to register elements along with a class object defining the
element's behavior.

Custom elements may be:

- *Autonomous custom elements,* which do not inherit from existing HTML elements
- *Customized buit-in elements,* which do inherit and hence extend existing HTML elements

## Example Code

The following example code defines a `word-count` element:

```javascript
customElements.define("word-count", WordCount, { extends: "p" });
```

This element's class object is the `WordCount` class, and it extends the `p` or paragraph standard HTML element.

The following example code shows how a developer might define a `WordCount` class:

```javascript
class WordCount extends HTMLParagraphElement {
  constructor() {
    // Always call super first in constructor
    super();

    // Element functionality written in here
  }
}
```

The [Using custom elements tutorial](https://developer.mozilla.org/en-US/docs/Web/Web_Components/Using_custom_elements)
contains examples of both *autonomous custom elements* and *Customized buit-in elements.*

## For Details

For details about this feature, see the
[MDN page for *Web Components, Custom elements*](https://developer.mozilla.org/en-US/docs/Web/Web_Components).


# 9. Shadow DOM: Web Components -> Shadow DOM

Here are some notes from
[MDN's page describing *Web Components -> Shadow DOM*](https://developer.mozilla.org/en-US/docs/Web/Web_Components).

## Overview

The shadow DOM is one part of a set of technologies that allow developers to create reusable HTML elements.

## Concepts and Usage

The Shadow DOM is a set of Javascript APIs allowing developers to attach an encapsulated DOM tree to an element.

MDN's [Using shadow DOM tutorial](https://developer.mozilla.org/en-US/docs/Web/Web_Components/Using_shadow_DOM)
starts with a High-level view that presents some example code, presented in the next subsection.
It then describes how developers can manipulate the encapsulated *Shadow DOM* just like the regular DOM.

## Example Code

Following is the example code the
[Using shadow DOM tutorial](https://developer.mozilla.org/en-US/docs/Web/Web_Components/Using_shadow_DOM)
uses to introduce the concept and define some relevant terms:

```javascript
<!DOCTYPE html>
<html lang="en-US">
  <head>
    <meta charset="utf-8" />
    <title>Simple DOM example</title>
  </head>
  <body>
    <section>
      <img
        src="dinosaur.png"
        alt="A red Tyrannosaurus Rex: A two legged dinosaur standing upright like a human, with small arms, and a large head with lots of sharp teeth." />
      <p>
        Here we will add a link to the
        <a href="https://www.mozilla.org/">Mozilla homepage</a>
      </p>
    </section>
  </body>
</html>
```

Following a section on using the *shadow DOM,* the tutorial presents a simple example to demonstrate the *shadow DOM* works.

## For Details

For details about this feature, see the
[MDN page for *Web Components -> Shadow DOM*](https://developer.mozilla.org/en-US/docs/Web/Web_Components).

### TODO

Spend a little time looking at the
[Using templates and slots tutorial](https://developer.mozilla.org/en-US/docs/Web/Web_Components/Using_templates_and_slots).
It describes HTML Templates, which follows *Custom elements* and the *shadow DOM*,
and is the third of the three features on the
[MDN page for *Web Components*](https://developer.mozilla.org/en-US/docs/Web/Web_Components) page.


# 10. Page Visibility API

Here are some notes from
[MDN's page describing the *Page Visibility API*](https://developer.mozilla.org/en-US/docs/Web/API/Page_Visibility_API).

## Overview

The Page Visibility API sends events enabling developers to know when their page becomes visible or hidden,
allowing developers to conserve resources when the user is not even looking at the page.

## Concepts and Usage

When a document is hidden or becomes visible, the Page Visibility API sends a
[`visibilitychange` event](https://developer.mozilla.org/en-US/docs/Web/API/Document/visibilitychange_event).

Note that changing a CSS property to show or hide an `<iframe>` element does not trigger this event.

### Use cases

Following are a few times when you would want to pause background processing when the page is no longer visible:

- An image carousel should not advance when no one is watching it
- There is no reason to continue updating a dashboard, containing network statistics, for example, when it's not being viewed
- A site wants an accurate count of pages not just rendered, but actually viewed

[MDN's *Page Visibility API* page](https://developer.mozilla.org/en-US/docs/Web/API/Page_Visibility_API)
includes a section about how modern browsers have features that, independently of this API, also mitigate
the impact of background and hidden tabs.

## Example Code

This code shows how to pause music when a document is no longer visible, and have the recording pick up where it
left off when it becomes visible again:

```html
<audio
  controls
  src="https://mdn.github.io/webaudio-examples/audio-basics/outfoxing.mp3"></audio>
```

```javascript
const audio = document.querySelector("audio");

// Handle page visibility change:
// - If the page is hidden, pause the video
// - If the page is shown, play the video
document.addEventListener("visibilitychange", () => {
  if (document.hidden) {
    audio.pause();
  } else {
    audio.play();
  }
});
```

[MDN's *Page Visibility API* page](https://developer.mozilla.org/en-US/docs/Web/API/Page_Visibility_API)
includes a demo showing how this code works.

Of course, the same technique works with videos as well.

## For Details

For details about this feature, see the
[MDN page for the *Page Visibility API*](https://developer.mozilla.org/en-US/docs/Web/API/Page_Visibility_API).


# 11. Broadcast Channel API

Here are some notes from
[MDN's page describing the *Broadcast Channel API*](https://developer.mozilla.org/en-US/docs/Web/API/Broadcast_Channel_API).

## Overview

The *Broadcast Channel API* allows workers to communicate between windows, tabs, frames, and iframes
that have the same [origin](https://developer.mozilla.org/en-US/docs/Glossary/Origin).

## Description

Use this API by creating a
[`BroadcastChannel`](https://developer.mozilla.org/en-US/docs/Web/API/BroadcastChannel)
object and programming your workers to "subscribe" to a particular channel.
This allows the browsing contexts - the windows, tabs, etc. sharing the same origin,
to use `postMessage()` to send messages and listen for *message* events.

## Example Code

This code snippet shows how to create a `BroadcastChannel` object:

```javascript
// Connection to a broadcast channel
const bc = new BroadcastChannel("test_channel");
```

This code snippet shows how to send a message:

```javascript
// Example of sending of a very simple message
bc.postMessage("This is a test message.");
```

This code snippet shows how to receive a message:

```javascript
// A handler that only logs the event to the console:
bc.onmessage = (event) => {
  console.log(event);
};
```

This code snippet shows how to disconnect from a channel:

```javascript
// Disconnect the channel
bc.close();
```

## For Details

For details about this feature, see the
[MDN page for the *Broadcast Channel API*](https://developer.mozilla.org/en-US/docs/Web/API/Broadcast_Channel_API).


# 12. Geolocation API

Here are some notes from
[MDN's page describing the *Geolocation API*](https://developer.mozilla.org/en-US/docs/Web/API/Geolocation_API).

## Overview

JavaScript's Geolocation API allows developers to, with the user's permission, access a user's location.
In other words, applications using the `Geolocation` object *must* add the `geolocation` permission to their manifest.

Note that most browsers support this feature only over HTTPS.

## Concepts and Usage

Developers use the
[`Navigator.geolocation`](https://developer.mozilla.org/en-US/docs/Web/API/Navigator/geolocation)
read-only property to get a
[`GeoLocation`](https://developer.mozilla.org/en-US/docs/Web/API/Geolocation)
object and access the user's location.

This enables the developer to run these methods:

- [`Geolocation.getCurrentPosition()`](https://developer.mozilla.org/en-US/docs/Web/API/Geolocation/getCurrentPosition)
  - Retrieves the device's current location
- [`Geolocation.watchPosition()`](https://developer.mozilla.org/en-US/docs/Web/API/Geolocation/watchPosition)
  - Enables tracking the device's location

MDN's page describing the
[*Geolocation API*](https://developer.mozilla.org/en-US/docs/Web/API/Geolocation_API)
also lists the interfaces developers can use with this API.

## Example Code

For example code, see MDN's
[Using the Geolocation API](https://developer.mozilla.org/en-US/docs/Web/API/Geolocation_API/Using_the_Geolocation_API#examples)
page.

## For Details

For details about this feature, see the
[MDN page for the *Geolocation API*](https://developer.mozilla.org/en-US/docs/Web/API/Geolocation_API).


# 13. File System Access API

Here are some notes from
[MDN's page describing the *File System Access API*](https://developer.mozilla.org/en-US/docs/Web/API/File_System_Access_API).

## Overview

The File Sytem Access API gives developers access to the user's file system.

This API is available only under HTTPS, and only on some browsers.

## Concepts and Usage

The File Sytem Access API allows developers to read and write files, and access the directory structure on
the user's file system.

Access takes place via file system handles:

- [`FileSystemHandle`](https://developer.mozilla.org/en-US/docs/Web/API/FileSystemHandle) is the parent interface
  - `FileSystemHandle` represents a file or directory entry
- [`FileSystemFileHandle`](https://developer.mozilla.org/en-US/docs/Web/API/FileSystemFileHandle) is for files
- [`FileSystemDirectoryHandle`](https://developer.mozilla.org/en-US/docs/Web/API/FileSystemDirectoryHandle) is for directories

Get one of these handles by calling a method such as:

- [`showOpenFilePicker`](https://developer.mozilla.org/en-US/docs/Web/API/Window/showOpenFilePicker) - allows the user to select a file
- [`showDirectoryPicker`](https://developer.mozilla.org/en-US/docs/Web/API/Window/showDirectoryPicker) - allows the user to select a directory

which present the user with a picker allowing them to select a file or directory as appropriate.

Following are some other APIs which allow access to file handles:

- The [HTML Drag and Drop API](https://developer.mozilla.org/en-US/docs/Web/API/HTML_Drag_and_Drop_API)
- The [File Handling API](https://developer.chrome.com/en/articles/file-handling/)

## Example Code

The following example code, from the
[File System Access API](https://developer.mozilla.org/en-US/docs/Web/API/File_System_Access_API)
page, shows how to present the file system picker and use `getFile()` to get its contents:

```javascript
const pickerOpts = {
  types: [
    {
      description: 'Images',
      accept: {
        'image/*': ['.png', '.gif', '.jpeg', '.jpg']
      }
    },
  ],
  excludeAcceptAllOption: true,
  multiple: false
};

async function getTheFile() {
  // open file picker
  [fileHandle] = await window.showOpenFilePicker(pickerOpts);

  // get file contents
  const fileData = await fileHandle.getFile();
}
```

The following example code, from the
[FileSystemFileHandle](https://developer.mozilla.org/en-US/docs/Web/API/FileSystemFileHandle)
page, shows how to do the same thing, in a slightly different, but essentially the same, manner

```javascript
async function getTheFile() {
  const pickerOpts = {
    types: [
      {
        description: 'Images',
        accept: {
          'image/*': ['.png', '.gif', '.jpeg', '.jpg'],
        },
      },
    ],
    excludeAcceptAllOption: true,
    multiple: false,
  };

  // open file picker
  const [fileHandle] = await window.showOpenFilePicker(pickerOpts);
  // get file contents
  const fileData = await fileHandle.getFile();
  return fileData;
}
```

## For Details

For details about this feature, see the
[MDN page for the *File System Access API*](https://developer.mozilla.org/en-US/docs/Web/API/File_System_Access_API).


# 14. Web Share API

Here are some notes from
[MDN's page describing the *Web Share API*](https://developer.mozilla.org/en-US/docs/Web/API/Web_Share_API).

## Overview

The Web Share API allows the sharing of content such as text and links to a user-selected *share target.*

This API is available only under HTTPS, and only on some browsers.

## Concepts and Usage

Examples of the sort of *share targets* a user can specify include email, the system clipboard, websites,
messaging and contacts applications, and Bluetooth or Wi-Fi.

This API has only the following two methods:

- [`navigator.canShare()`](https://developer.mozilla.org/en-US/docs/Web/API/Navigator/canShare) - verify whether the data can be shared
- [`navigator.share()`](https://developer.mozilla.org/en-US/docs/Web/API/Navigator/share) - actually share the data

## Example Code

This example, from the
[MDN page for the *Web Share API*](https://developer.mozilla.org/en-US/docs/Web/API/Web_Share_API),
shows how to use a button click to share a link:

```javascript
const shareData = {
  title: 'MDN',
  text: 'Learn web development on MDN!',
  url: 'https://developer.mozilla.org'
}

const btn = document.querySelector('button');
const resultPara = document.querySelector('.result');

// Share must be triggered by "user activation"
btn.addEventListener('click', async () => {
  try {
    await navigator.share(shareData)
    resultPara.textContent = 'MDN shared successfully'
  } catch (err) {
    resultPara.textContent = `Error: ${err}`
  }
});
```

The [`navigator.share()`](https://developer.mozilla.org/en-US/docs/Web/API/Navigator/share)
has a live example of this code, but it doesn't work!
When I click the button it says:

> Error: TypeError: navigator.share is not a function

This may be a sign that my browser (Chrome) is not set up for this sort of sharing.

## For Details

For details about this feature, see the
[MDN page for the *Web Share API*](https://developer.mozilla.org/en-US/docs/Web/API/Web_Share_API).


# 15. WebXR Device API

Here are some notes from
[MDN's page describing the *WebXR Device API*](https://developer.mozilla.org/en-US/docs/Web/API/WebXR_Device_API).

## Overview

WebXR Device API supports rendering 3D scenes, targeting devices designed to present Virtual Reality (VR) and Augmented Reality (AR).
It is based on the WebXR standards and implements core WebXR features.

This API is available only under HTTPS, and only on some browsers.

## Description

By combining support for VR and AR devices, WebXR replaces the older
[WebVR API](https://developer.mozilla.org/en-US/docs/Web/API/WebVR_API).

Following are the key capabilities that the WebXR Device API provides:

- Finding compatible devices
- Rendering scenes at the right frame rate
- Create vectors based on input controls
- Mirror output to a 2D display (optional)

Supported equipment may include:

- Accelerometers
- Barometers
- Sensors able to detect when the user moves their body or just their head

Most of this page consists of links to more information, including:

- [Reference Docs](https://developer.mozilla.org/en-US/docs/Web/API/WebXR_Device_API#webxr_reference_docs)
- [Guides and Tutorials](https://developer.mozilla.org/en-US/docs/Web/API/WebXR_Device_API#guides_and_tutorials)
- [Specifications](https://developer.mozilla.org/en-US/docs/Web/API/WebXR_Device_API#specifications)

## For Details

For details about this feature, see the
[MDN page for the *WebXR Device API*](https://developer.mozilla.org/en-US/docs/Web/API/WebXR_Device_API).

