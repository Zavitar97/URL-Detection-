document.addEventListener('DOMContentLoaded', function() {
  var detectButton = document.getElementById('detectButton');
  detectButton.addEventListener('click', function() {
    chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
      var currentTab = tabs[0];
      chrome.tabs.sendMessage(currentTab.id, { action: 'detect' });
    });
  });
});
