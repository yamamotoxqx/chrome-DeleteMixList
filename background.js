chrome.webNavigation.onHistoryStateUpdated.addListener(function(details) {
  // 設定が有効になっているか確認する
  chrome.storage.sync.get('isEnabled', function(data) {
    if (data.isEnabled && details.url.startsWith('https://www.youtube.com/') && details.url.includes('&list=')) {
      const newUrl = details.url.split('&list=')[0];
      chrome.tabs.update(details.tabId, { url: newUrl });
    }
  });
});