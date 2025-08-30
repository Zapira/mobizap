chrome.action.onClicked.addListener(() => {
  chrome.windows.create({
    url: chrome.runtime.getURL("index.html"), // React app kamu
    type: "popup",
    width: 1920,  // lebar seperti HP
    height: 1080  // tinggi seperti HP
  });
});
