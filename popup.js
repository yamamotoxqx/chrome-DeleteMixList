document.addEventListener('DOMContentLoaded', async () => {
  const toggleSwitch = document.getElementById('toggleSwitch');
  const descText = document.getElementById('desc_text');
  const thanksText = document.getElementById('thanks_text');

  // 1. 各言語のメッセージをmessages.jsonから読み込んでテキストを流し込む
  descText.textContent = chrome.i18n.getMessage('descriptionText');
  thanksText.textContent = chrome.i18n.getMessage('thanksText');

  // 2. 保存されている設定をストレージから取得してUIに反映（デフォルトはON）
  const data = await chrome.storage.sync.get('isEnabled');
  toggleSwitch.checked = data.isEnabled !== false;

  // 3. スイッチの変更を監視してストレージに保存
  toggleSwitch.addEventListener('change', async (e) => {
    await chrome.storage.sync.set({ isEnabled: e.target.checked });
  });
});
