
chrome.browserAction.onClicked.addListener(function (tab) {
  console.log('this is tabs1', tab);
  // chrome.tabs.update(tab.id, {
  //   url: `http://localhost:3000/url?url=${tab.url}&lang=he`,
  //   // url: `https://paragraph-client.herokuapp.com/url?url=${tab.url}`
  // });

  chrome.storage.sync.get(['key'], function (result) {
    console.log('Value currently is2 ' + result.key)
    let userDefTarLang = result.key;

    if (userDefTarLang === undefined) {
      chrome.tabs.create({
        // url: `http://localhost:3000/url?url=${tab.url}&lang=DE`,
        url: `https://www.paragraph.live/url?url=${tab.url}&lang=DE`,
      })
    } else {
      chrome.tabs.create({
        // url: `http://localhost:3000/url?url=${tab.url}&lang=${userDefTarLang}`,
        url: `https://www.paragraph.live/url?url=${tab.url}&lang=${userDefTarLang}`,
      })
    }
  })
})
