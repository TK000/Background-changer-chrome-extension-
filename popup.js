document.addEventListener('DOMContentLoaded', function () {
    var go = document.getElementById('go');
    go.addEventListener('click', function() {
    chrome.tabs.executeScript({
        code: 'document.body.style.backgroundColor = "purple";'
    });
    }, false);
    
    var undo = document.getElementById('undo');
    undo.addEventListener('click', function() {
        chrome.tabs.executeScript({
            code: 'document.body.style.backgroundColor = "initial";'
        });
    }, false);
}, false);

