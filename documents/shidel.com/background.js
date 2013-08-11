

chrome.browserAction.onClicked.addListener(function(tab){

init();

})


function init() {
  chrome.windows.getCurrent({populate: true}, function(currentWindow) {
    	
 for ( var i=0; i<currentWindow.tabs[].length;i++){ currentWindow.tabs[i];
console.log(currentWindow.tabs.length);

 }
      })[0];

