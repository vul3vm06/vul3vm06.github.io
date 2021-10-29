function debug(msg) {
  console.log(`main.js - ${msg}`);
}

window.addEventListener('DOMContentLoaded', (event) => {
  document.getElementById("sendFile").addEventListener(
    "click",
    () => {
      console.log("sendFile onclick!");
      let printFile = document.getElementById("printFile").checked;
      let files = document.getElementById("localFile").files;
      if (files.length > 0) {
        debug("send message with blob to service worker");
        navigator.serviceWorker.ready.then(registration => {
          registration.active.postMessage({
            file: files[0],
            printFile
          });
        });
      } else {
        debug("No selected file yet!");
      }
    }
  )
});

if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register("/test-webpages/post-file-to-sw/sw.js").then(function(registration) {
    debug("Service worker registration succeeded: " + registration);
  }, function(error) {
    debug("Service worker registration failed: " + error);
  });
} else {
  debug("Service workers are not supported.");
}

