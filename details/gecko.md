### Achievements

- Supported [Alarm API](https://github.com/kaiostech/gecko-b2g/tree/gonk/dom/b2g/alarm#readme)
  - Re-designed on KaiOS 3.0.
    - Re-implemented by C++ (formerly Javascript) to support workers.
    - Utilized service worker and system message to wake closed applications.
- Supported [Settings API](https://github.com/kaiostech/gecko-b2g/blob/gonk/b2g/sidl/Settings.md)
  - Improved performance issues since [mozSettings](https://contest-server.cs.uchicago.edu/ref/JavaScript/developer.mozilla.org/en-US/docs/Archive/B2G_OS/API/Navigator/mozSettings.html) KaiOS 2.5.
  - Decoupled the functions from the web-rendering engine to another stand-alone daemon.
  - Provided communications between the web-rendering engine and the stand-alone daemon.
- Supported [Downloads API](https://github.com/kaiostech/gecko-b2g/tree/gonk/dom/b2g/downloads#readme)
  - Re-designed on KaiOS 3.0.
    - Exposed a subset of functions so that webpages or applications without permissions can
      manipulate their own downloads.
    - Refactory and fix legacy bugs since Firefox OS.
- Clarified the garbage collection behavior and corrected the usage which reduces 10MB~20MB memory usage in MTBF on 512MB devices.
- Supported [ECMAScript Internationalization API](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl)
  - Saved 10M ROM size by upgrading and reusing system ICU Data on KaiOS 2.5.
- Supported Web DOM APIs.
  - [Web View](https://github.com/kaiostech/gecko-b2g/blob/gonk/b2g/chrome/content/embedding/web-view.md) and [Web Embedder](https://github.com/kaiostech/gecko-b2g/blob/gonk/b2g/chrome/content/embedding/web-embedder.md)
    - Re-implemented and rearranged permission prompt flow.
    - Supported contextmenu download.
  - Applied voice input style according to selected provider and focused
    element.
  - Polished virtual cursor functions including positions or full screen interactions.
  - Provided scroll to top and scroll to bottom functions.
- Handled device low disk space situation.
  - Implemented disk usage notifications to applications.
  - Separated and enabled only essential indexed DB operations on booting up.
- Brought out KaiOS simulator that eases device shortage on early development, and make [rr debugging](https://rr-project.org/) available.
- Enabled mochitest and setup the complete flow including running, collecting,
  parsing and presenting.

### Reference
https://github.com/kaiostech/gecko-b2g/commits?author=claire.huang@kaiostech.com
