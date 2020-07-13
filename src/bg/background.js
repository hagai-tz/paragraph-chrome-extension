
chrome.browserAction.onClicked.addListener(function (tab) {
  console.log('this is tabs', tab);
  // chrome.tabs.update(tab.id, {
  //   url: `http://localhost:3000/url?url=${tab.url}&lang=he`,
  //   // url: `https://paragraph-client.herokuapp.com/url?url=${tab.url}`
  // });

  chrome.tabs.create({
    // url: `http://localhost:3000/url?url=${tab.url}&lang=he`,
    url: `https://www.paragraph.live/url?url=${tab.url}&lang=he`,
  });
});
