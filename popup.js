document.addEventListener('DOMContentLoaded', function() {
  const toggle = document.getElementById('toggle');

  // 保存されている設定を読み込む
  chrome.storage.sync.get('isEnabled', function(data) {
    toggle.checked = data.isEnabled || false; // デフォルトはおん
  });

  toggle.addEventListener('change', function() {
    // 設定を保存
    chrome.storage.sync.set({ isEnabled: this.checked });
  });
});