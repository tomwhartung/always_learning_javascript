
# 2-stateofjs-browser_apis.md

This page contains some notes about the
[stateofjs' list of JS browser apis](https://2022.stateofjs.com/en-US/features/browser-apis/).

## TODOs

**Note:** Any **TODO** items I might have are currently TBD!

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
## Description
## Concepts and Usage
## Example Code
```javascript
```

## For Details

For details about this feature, see the
[MDN page for *Getting started with WebGL*](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Tutorial/Getting_started_with_WebGL).


# 4. Web Animations: Using the Web Animations API

Here are some notes from
[MDN's page for *Using the Web Animations API*](https://developer.mozilla.org/en-US/docs/Web/API/Web_Animations_API/Using_the_Web_Animations_API).

## Overview
## Description
## Concepts and Usage
## Example Code
```javascript
```

## For Details

For details about this feature, see the
[MDN page for *Using the Web Animations API*](https://developer.mozilla.org/en-US/docs/Web/API/Web_Animations_API/Using_the_Web_Animations_API).


# 5. WebRTC: WebRTC API

Here are some notes from
[MDN's page for using the *WebRTC API*](https://developer.mozilla.org/en-US/docs/Web/API/WebRTC_API).

## Overview
## Description
## Concepts and Usage
## Example Code
```javascript
```

## For Details

For details about this feature, see the
[MDN page for using the *WebRTC API*](https://developer.mozilla.org/en-US/docs/Web/API/WebRTC_API).


# 6. Web Speech API

Here are some notes from
[MDN's page describing the *Web Speech API*](https://developer.mozilla.org/en-US/docs/Web/API/Web_Speech_API).

## Overview
## Description
## Concepts and Usage
## Example Code
```javascript
```

## For Details

For details about this feature, see the
[MDN page for the *Web Speech API*](https://developer.mozilla.org/en-US/docs/Web/API/Web_Speech_API).


# 7. WebSocket: The WebSocket API (WebSockets)

Here are some notes from
[MDN's page describing *The WebSocket API (WebSockets)*](https://developer.mozilla.org/en-US/docs/Web/API/WebSockets_API).

## Overview
## Description
## Concepts and Usage
## Example Code
```javascript
```

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

