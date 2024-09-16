const apiUrl = "https://dragonball-api.com/api/characters?page=2&limit=10";
const apiRick= "https://rickandmortyapi.com/api/character"
function obtenerDatos(url){
    fetch(url)
    .then(res => {
        return new Promise((result, reject) => {
            result(result(res.json()));
        })
    }) 
    .then(res => {
        console.log({res: res.info.next})
    })
    .catch(e => {
       console.log(e);
        // e.then(res => console.log(res));
    });
}


obtenerDatos(apiRick);
