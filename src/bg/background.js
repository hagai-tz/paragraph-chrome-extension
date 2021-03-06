// Standard Google Universal Analytics code
(function () {
  var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
  ga.src = 'https://ssl.google-analytics.com/ga.js';
  var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
})();

var _gaq = _gaq || [];
_gaq.push(['_setAccount', 'UA-159876106-1']);

chrome.browserAction.onClicked.addListener(function (tab) {
  console.log('this is tabs', tab);
  _gaq.push(['_trackEvent', 'exClick', 'click', tab.url]);

  chrome.storage.sync.get(['tarLang'], function (result) {

    let userDefTarLang = result.tarLang;
    console.log('userDefTarLang', userDefTarLang);

    if (userDefTarLang === undefined) {
      if (typeof window.navigator.languages[1] === 'undefined') {
        userDefTarLang = window.navigator.languages[0].slice(0, 2).toLocaleUpperCase()
        _gaq.push(['_trackEvent', 'userLangEx', userDefTarLang]); //sends the user default target lang
      } else {
        userDefTarLang = window.navigator.languages[1].slice(0, 2).toLocaleUpperCase()
        _gaq.push(['_trackEvent', 'userLangEx', userDefTarLang]); //sends the user default target lang
      }
    }


    chrome.tabs.create({
      // url: `http://localhost:3000/url?url=${tab.url}&tarLang=${userDefTarLang}`,
      url: `https://www.paragraph.live/url?url=${tab.url}&tarLang=${userDefTarLang}`,
    })
  })
})
