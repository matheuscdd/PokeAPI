function createElementWithClassList(tagName, classes) {
    let element = document.createElement(tagName);
    element.classList = classes;
    return element;
}

function createCard(el) {
    let li = createElementWithClassList('li','card-poke');
    let img = createElementWithClassList('img','poke-img');
    let name = createElementWithClassList('h3','poke-name');

    name.innerText = el.name;
    const numPokeRaw = el.url.split('').splice(34,2).join('');
    const numPoke = numPokeRaw.replace('/',"")
    img.src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${numPoke}.png`;
    li.append(img,name);

    return li
}

function insertDynamicList(array) {
    let ul = document.querySelector(".cont-pokes");
    ul.innerHTML = "";
    array.forEach((el) => {
        let card = createCard(el);
        ul.append(card); 
    });
}

