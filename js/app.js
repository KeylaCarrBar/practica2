
if(navigator.serviceWorker){
   
    navigator.serviceWorker.register('/sw.js');
}

if (window.caches) {
    console.log("Tienes soporte para cache")
    
}
