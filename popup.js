document.addEventListener('DOMContentLoaded', function() {
  const toggleSwitch = document.getElementById('toggleSwitch'); // IDを変更

  // 保存されている設定を読み込む
  chrome.storage.sync.get('isEnabled', function(data) {
    toggleSwitch.checked = data.isEnabled || false; //デフォルトでおふ
  });

  toggleSwitch.addEventListener('change', function() {
    // 設定を保存
    chrome.storage.sync.set({ isEnabled: this.checked });
  });
});