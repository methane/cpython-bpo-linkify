chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
  //console.log(changeInfo)
  if (changeInfo.status !== 'complete') return;
  var prefix = "https://github.com/python/cpython/"
  if (tab.url.startsWith(prefix + "pull/") ||
      tab.url.startsWith(prefix + "commit/")) {
    chrome.tabs.executeScript(tabId, {file: "src/linkify.js"})
  }
});
