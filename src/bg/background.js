//example of using a message handler from the inject scripts
chrome.extension.onMessage.addListener(
  function(request, sender, sendResponse) {
  	chrome.pageAction.show(sender.tab.id);
    sendResponse();
  });


  chrome.browserAction.onClicked.addListener(function(tab){
    console.log("this is tabs",tab)
    chrome.tabs.update(tab.id,{url:`http://localhost:3000/url?url=${tab.url}`}); 

})
