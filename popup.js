// This script is included at part of popup.html in original version but
// Google recommends separating js and html files

// This callback function is called when the content script has been 
// injected and returned its results
function onPageInfo(page) {
  document.getElementById("title").value = page.title;
  document.getElementById("url").value = page.url;
  document.getElementById("summary").innerText = page.summary;
}
  

// Eventually function below will POST the data to the server
// using XMLHttpRequest

// function addBookmark(f) {
//   var req = new XMLHttpRequest();
//   req.open("POST", "http://localhost:3000/bookmarks/test", true);

//   var params =  "title=" + document.getElementById("title").value +
//                 "&url=" + document.getElementbyId("url").value +
//                 "&summary=" + document.getElementById("summary").value +
//                 "&tags=" + document.getElementbyId("tags").value;
//   req.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
//   req.setRequestHeader("Content-length", params.length);
//   req.setRequestHeader("Connection", "close")

//   req.send(params);

//   req.onreadystatechange = function() {
//     if (req.readyState == 4)
//       if (req.status == 200) window.close()
//   };

//   return false;
// }

// Call the getPageInfo function in the background page, passing in 
// our onPageInfo function as the callback. 

window.onload = function() {
  // updated "chrome.extension" to "chrome.runtime". See note 8 at bottom of
  // http://developer.chrome.com/extensions/event_pages.html
  var bg = chrome.runtime.getBackgroundPage();
  bg.getPageInfo(onPageInfo);
}




