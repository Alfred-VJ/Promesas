//URL para planetas
const apiUrl = "https://dragonball-api.com/api/planets";

function obtenerPlanets (Url) {
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

obtenerPlanets();