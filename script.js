
function initializeWidget(){
    var mainContainer = document.createElement('div');
    mainContainer.id = 'main-container';

    let iframe = document.createElement('iframe');
    iframe.id = 'iframe-container';
    iframe.src = "../page2.html";

    mainContainer.appendChild(iframe);

    document.body.appendChild(mainContainer);

    let frame = document.querySelector("#iframe-container");

    frame.addEventListener('load', function(){
        console.log("loaded")
        frame.contentWindow.postMessage("demo", "*");
    })
}

window.addEventListener('DOMContentLoaded', function(){
    initializeWidget();
})