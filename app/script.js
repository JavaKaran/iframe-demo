
window.addEventListener('message', function(event){
    if(event.origin == "https://iframe-demo-omega.vercel.app/"){
        console.log("hello",event.data);
    }
})