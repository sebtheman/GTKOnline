$(document).ready(function() {
    $('#clickMe').click(function() {
        chrome.runtime.sendMessage({ undo: true })
    })
})