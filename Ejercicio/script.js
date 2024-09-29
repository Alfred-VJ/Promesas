const apiUrl = "https://dragonball-api.com/api/characters?page1&limit=16";

function obtenerData(apiUrl) {
    fetch(apiUrl)
        .then(res => {
            return new Promise((result, reject) => {
                result(result(res.json()));
            })
        })
        .then(res => {
            console.log(JSON.stringify(res, null, 2))
            console.log({ res: res.items })
            if (res.items.length) {
                const ContainerCards = document.getElementById("character-list");
                res.items.map(e => {
                    const card = document.createElement("div");
                    card.className = "card";
                    const contentCard = document.createElement("div");
                    contentCard.className = "content-card";

                    // Crear el título <h3> con la clase 'title-character' y el texto 'Goku'
                    const title = document.createElement('h3');
                    title.className = 'title-character';
                    title.textContent = e.name;

                    // Crear la imagen <img> con la clase 'img' y sus atributos src y alt
                    const img = document.createElement('img');
                    img.className = 'img';
                    img.src = e.image;
                    img.alt = e.name;

                    // Crear el botón <button> con la clase 'btn-more-info-character' y el texto 'Más información'
                    const button = document.createElement('button');
                    button.className = 'btn-more-info-character';
                    button.textContent = 'Más información';

                    // Agregar los elementos al div 'content-card'
                    contentCard.appendChild(title);
                    contentCard.appendChild(img);
                    contentCard.appendChild(button);

                    // Agregar el 'content-card' al div 'card'
                    card.appendChild(contentCard);
                    ContainerCards.appendChild(card);
                });
            }
        })
        .catch(error => console.error(error));
}

obtenerData(apiUrl);