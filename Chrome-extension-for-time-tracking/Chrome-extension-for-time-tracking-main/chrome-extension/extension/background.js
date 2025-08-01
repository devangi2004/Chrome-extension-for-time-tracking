let currentTab = null;
let startTime = Date.now();

chrome.tabs.onActivated.addListener(async (activeInfo) => {
  const tab = await chrome.tabs.get(activeInfo.tabId);
  logTime(tab.url);
});

chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
  if (changeInfo.status === "complete") {
    logTime(tab.url);
  }
});

function logTime(url) {
  if (currentTab) {
    const timeSpent = Date.now() - startTime;
    saveTime(currentTab, timeSpent);
  }
  currentTab = url;
  startTime = Date.now();
}

function saveTime(url, ms) {
  chrome.storage.local.get(["trackingData", "authToken"], (res) => {
    const data = res.trackingData || {};
    const host = new URL(url).hostname;

    data[host] = (data[host] || 0) + ms;
    chrome.storage.local.set({ trackingData: data });

    // Send data to backend
    if (res.authToken) {
      fetch("http://localhost:3000/api/track", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + res.authToken
        },
        body: JSON.stringify({ site: host, time: ms })
      }).catch(console.error);
    }
  });
}
