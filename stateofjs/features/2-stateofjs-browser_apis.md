
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


# 8. Custom Elements: Web Components, Custom elements

Here are some notes from
[MDN's page describing *Web Components, Custom elements*](https://developer.mozilla.org/en-US/docs/Web/Web_Components).

## Overview
## Description
## Concepts and Usage
## Example Code
```javascript
```

## For Details

For details about this feature, see the
[MDN page for *Web Components, Custom elements*](https://developer.mozilla.org/en-US/docs/Web/Web_Components).


# 9. Shadow DOM: Web Components, Shadow DOM

Here are some notes from
[MDN's page describing *Web Components, Shadow DOM*](https://developer.mozilla.org/en-US/docs/Web/Web_Components).

## Overview
## Description
## Concepts and Usage
## Example Code
```javascript
```

## For Details

For details about this feature, see the
[MDN page for *Web Components, Shadow DOM*](https://developer.mozilla.org/en-US/docs/Web/Web_Components).


# 10. Page Visibility API

Here are some notes from
[MDN's page describing the *Page Visibility API*](https://developer.mozilla.org/en-US/docs/Web/API/Page_Visibility_API).

## Overview
## Description
## Concepts and Usage
## Example Code
```javascript
```

## For Details

For details about this feature, see the
[MDN page for the *Page Visibility API*](https://developer.mozilla.org/en-US/docs/Web/API/Page_Visibility_API).


# 11. Broadcast Channel API

Here are some notes from
[MDN's page describing the *Broadcast Channel API*](https://developer.mozilla.org/en-US/docs/Web/API/Broadcast_Channel_API).

## Overview
## Description
## Concepts and Usage
## Example Code
```javascript
```

## For Details

For details about this feature, see the
[MDN page for the *Broadcast Channel API*](https://developer.mozilla.org/en-US/docs/Web/API/Broadcast_Channel_API).


# 12. Geolocation API

Here are some notes from
[MDN's page describing the *Geolocation API*](https://developer.mozilla.org/en-US/docs/Web/API/Geolocation_API).

## Overview
## Description
## Concepts and Usage
## Example Code
```javascript
```

## For Details

For details about this feature, see the
[MDN page for the *Geolocation API*](https://developer.mozilla.org/en-US/docs/Web/API/Geolocation_API).


# 13. File System Access API

Here are some notes from
[MDN's page describing the *File System Access API*](https://developer.mozilla.org/en-US/docs/Web/API/File_System_Access_API).

## Overview
## Description
## Concepts and Usage
## Example Code
```javascript
```

## For Details

For details about this feature, see the
[MDN page for the *File System Access API*](https://developer.mozilla.org/en-US/docs/Web/API/File_System_Access_API).


# 14. Web Share API

Here are some notes from
[MDN's page describing the *Web Share API*](https://developer.mozilla.org/en-US/docs/Web/API/Web_Share_API).

## Overview
## Description
## Concepts and Usage
## Example Code
```javascript
```

## For Details

For details about this feature, see the
[MDN page for the *Web Share API*](https://developer.mozilla.org/en-US/docs/Web/API/Web_Share_API).


# 15. WebXR Device API

Here are some notes from
[MDN's page describing the *WebXR Device API*](https://developer.mozilla.org/en-US/docs/Web/API/WebXR_Device_API).

## Overview
## Description
## Concepts and Usage
## Example Code
```javascript
```

## For Details

For details about this feature, see the
[MDN page for the *WebXR Device API*](https://developer.mozilla.org/en-US/docs/Web/API/WebXR_Device_API).

