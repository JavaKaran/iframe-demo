
function initializeWidget(){
    var mainContainer = document.createElement('div');
    mainContainer.id = 'main-container';

    let iframe = document.createElement('iframe');
    iframe.id = 'iframe-container';
    iframe.src = "https://iframe-demo-omega.vercel.app/page2.html";

    mainContainer.appendChild(iframe);

    document.body.appendChild(mainContainer);

    iframe.addEventListener('load', function(){
        console.log("loaded")
        iframe.contentWindow.postMessage("message", "https://iframe-demo-omega.vercel.app");
    })
}

window.addEventListener('DOMContentLoaded', function(){
    initializeWidget();
})