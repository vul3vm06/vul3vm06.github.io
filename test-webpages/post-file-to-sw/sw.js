function debug(msg) {
  console.log(`serviceworker: sw.js - ${msg}`);
}

debug(`loaded.`);

self.onactivate = (e) => {
  debug(`on activate!`);
};

self.onmessage = (e) => {
  debug(`onmessage`);
  let data = e.data;
  if (data?.printFile) {
    if (typeof data?.file?.text === "function") {
      data.file.text().then(
        v => debug("file content: " + v),
        e => debug("get file text failed. " + e)
      );
    } else {
      debug("printFile is true but no valid file to print.");
    }
  } else {
    debug("do nothing to message data.");
  }
};
