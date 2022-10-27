self.addEventListener('install',(event)=>{
    console.log('SW Instalado');
    const myPromise = new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log('Instalaciones finalizadas');
            resolve('ok');
        },3000);
    });
    event.waitUntil(myPromise);
});

self.addEventListener('activate',(event)=>{
    console.log('SW: Activado');
});

self.addEventListener('fetch',(event)=>{
    if (event.request.url.includes('.jpg')) {
        let resp = fetch('/images/gato2.jpg');
        event.respondWith(resp);
    }
});

