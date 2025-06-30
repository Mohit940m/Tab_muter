chrome.action.onClicked.addListener((tab) => {
  chrome.tabs.update(tab.id, { muted: !tab.mutedInfo.muted });
});
