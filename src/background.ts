chrome.action.onClicked.addListener((tab) => {
  if (!tab.id || !tab.url) return;

  // Simpan URL lama ke storage
  chrome.storage.session.set({ zapira_prev_url: tab.url }).then(() => {
    // Redirect tab aktif ke index.html
    chrome.tabs.update(tab.id, {
      url: chrome.runtime.getURL("index.html")
    });
  });
});
