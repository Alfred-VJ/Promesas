const apiUrl = "https://dragonball-api.com/api/characters?page1&limit=100";

function obtenerDatos(url){
    fetch(url)
    .then(res => {
        return res.json();
    })
    
}

function manejarRespuesta(promise){
   promise.then(res => console.log({data: res.items}))
}

console.log(obtenerDatos(apiUrl))

