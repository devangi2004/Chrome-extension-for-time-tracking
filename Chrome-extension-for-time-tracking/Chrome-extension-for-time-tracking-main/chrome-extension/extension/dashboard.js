const productiveSites = ["leetcode.com", "github.com", "stackoverflow.com"];

chrome.storage.local.get("trackingData", (res) => {
  const data = res.trackingData || {};
  const labels = [];
  const minutes = [];
  const colors = [];

  for (const [site, time] of Object.entries(data)) {
    labels.push(site);
    minutes.push((time / 60000).toFixed(2));
    colors.push(productiveSites.includes(site) ? 'green' : 'red');
  }

  new Chart(document.getElementById('chart'), {
    type: 'bar',
    data: {
      labels: labels,
      datasets: [{
        label: 'Time (min)',
        data: minutes,
        backgroundColor: colors
      }]
    }
  });
});
