// 履歴の更新を監視して、Mixリストのみリダイレクトする
chrome.webNavigation.onHistoryStateUpdated.addListener(async (details) => {
  // 設定が有効になっているか確認する
  const data = await chrome.storage.sync.get('isEnabled');
  
  // デフォルトは有効（true）として扱う
  const isEnabled = data.isEnabled !== false;

  if (isEnabled && details.url.startsWith('https://www.youtube.com/')) {
    // 通常のプレイリスト（list=PL... 等）は無視し、自動生成のMixリスト（list=RD...）だけを対象にする
    if (details.url.includes('&list=RD') || details.url.includes('?list=RD')) {
      const urlObj = new URL(details.url);
      
      // URLからMixリストのパラメータを削除
      urlObj.searchParams.delete('list');
      urlObj.searchParams.delete('index'); // 関連して付与される動画番号も削除
      
      const newUrl = urlObj.toString();
      
      // 無限ループを防ぐため、URLが実際に変更された場合のみリダイレクト
      if (details.url !== newUrl) {
        chrome.tabs.update(details.tabId, { url: newUrl });
      }
    }
  }
});
