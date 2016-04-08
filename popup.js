document.addEventListener('DOMContentLoaded', function() {
  chrome.tabs.getSelected(null, function(tab) {
    console.log(tab);
    d = document;
    var f = d.createElement('textarea');
    d.body.appendChild(f); 
  });

  var checkPageButton = document.getElementById('checkPage');
  checkPageButton.addEventListener('click', function(tab) {
    
    chrome.tabs.executeScript(null, { file: "jquery.js" }, function() {
    chrome.tabs.executeScript(null, {file: "check_attributes.js"});
    });
    
  }, false);
}, false);