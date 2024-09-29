const apiUrl = "https://dragonball-api.com/api/characters?page1&limit=10";
let nextPage = ""
function getCharactersByPages(url){
    fetch(url)
    .then(res => {
        return res.json();
    })
    .then(res => {
        const characterList = document.getElementById("character-list");
        console.log(JSON.stringify(res, null, 2))
        nextPage = res.links.next;
        res.items.forEach(item => {
            const listItem = document.createElement('div');
            const imgItem = document.createElement('img');
            listItem.textContent = item.name;
            imgItem.src = item.image
            characterList.appendChild(listItem);
            characterList.appendChild(imgItem);
        });
    })
    .catch(e => console.error(e))
}

getCharactersByPages(apiUrl)

function next(){
    getCharactersByPages(nextPage);
}