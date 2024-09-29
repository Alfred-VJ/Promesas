const apiUrl = "https://dragonball-api.com/api/characters?page1&limit=100";

function obtenerData (apiUrl) {
    fetch(apiUrl)
    .then(res => {
        return new Promise((result, reject) => {
            result(result(res.json()));
        })
    })  
    .then(res => {
        console.log({res: res.items})
    })
}

obtenerData(apiUrl);