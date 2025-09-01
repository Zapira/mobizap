chrome.action.onClicked.addListener(async (tab) => {
  if (!tab.id || !tab.url) return;

  const data = await chrome.storage.session.get("zapira_prev_url");

  if (!data.zapira_prev_url) {
    // 👉 Mode BELUM aktif → simpan URL asli & buka React app
    await chrome.storage.session.set({ zapira_prev_url: tab.url });
    chrome.tabs.update(tab.id, {
      url: chrome.runtime.getURL("index.html")
    });
  } else {
    // 👉 Mode SUDAH aktif → ambil URL asli, clear, lalu balikin
    const prevUrl = data.zapira_prev_url;
    await chrome.storage.session.remove("zapira_prev_url");

    chrome.tabs.update(tab.id, {
      url: prevUrl
    });
  }
});
