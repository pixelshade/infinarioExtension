document.addEventListener('DOMContentLoaded', function() {
    var d = document;
    var f = document.getElementById("out");
    f.style.visibility = "hidden";

    chrome.tabs.getSelected(null, function(tab) {
        console.log(tab);
    });

    var checkPageButton = document.getElementById('checkPage');
    checkPageButton.addEventListener('click', function(tab) {
        chrome.tabs.executeScript(null, { file: "jquery.js" }, function() {
            chrome.tabs.executeScript(null, { file: "check_attributes.js" }, function(result) {
                console.log(result);
               f.value = "----\n";
            });
        });

    }, false);

    chrome.runtime.onMessage.addListener(
        function(request, sender, sendResponse) {            
            console.log(sender.tab ?
                "from a content script:" + sender.tab.url :
                "from the extension");
                f.style.visibility = "visible";                
                f.value += request.line;                
            //  if (request.greeting == "hello")
                // sendResponse({ farewell: "goodbye" });
        });



}, false);