//URL para planetas
const apiUrl = "https://dragonball-api.com/api/planets";

function obtenerPlanets(Url) {
    fetch(Url)
        .then(res => {
            return new Promise((result, reject) => {
                if (res) result(result(res.json()));
                else reject("Sin Información")
            })
        })
        .then(res => {
            console.log("Entrando a obtener planetas")
            console.log(JSON.stringify(res, null, 2))
            console.log({ res: res.items })
        })
        .catch(error => console.error(error));
}

obtenerPlanets(apiUrl);