let array = [
    {
        uniqueNum: 1,
        title: "DORSZ W KREMOWYM SOSIE ZE SZPARAGAMI I CHORIZO",
        description: "Polędwiczka z dorsza w kremowym sosie ze szparagami i podsmażoną kiełbaską chorizo."
    }, {
        uniqueNum: 2,
        title: "STIR-FRY Z WOŁOWINĄ I BROKUŁAMI",
        description: "Kolejna propozycja na danie z woka. Tym razem wykonanie jest naprawdę błyskawiczne."
    }, {
        uniqueNum: 3,
        title: "KURCZAK W KREMOWYM SOSIE POMIDOROWO-KOPERKOWYM",
        description: "Delikatne, miękkie i kruche fileciki z kurczaka w sosie ze śmietanki z dodatkiem koperku i koncentratu" +
        " pomidorowego."
    }, {
        uniqueNum: 4,
        title: "MAKARON Z KURCZAKIEM I SZPINAKIEM W SOSIE PESTO",
        description: "Smaczny makaron z kawałkami podsmażonego filetu z kurczaka, szpinakiem oraz kremowym sosem ze śmietanki i pesto."
    }
];

function createCardDiv(i) {
    let myCardDiv = document.createElement("div");
    myCardDiv.setAttribute("class", "card");
    myCardDiv.setAttribute("id", "mainCardId".concat(i));
    document.getElementById("container").appendChild(myCardDiv);
    return myCardDiv;
}

function createCardTitle(i, myCardDiv) {
    let myTitle = document.createElement("div");
    myTitle.setAttribute("class", "cardTitle");
    myTitle.innerHTML = array[i].title;
    myCardDiv.appendChild(myTitle);
}

function createCardDescription(i, myCardDiv) {
    let myDescription = document.createElement("div");
    myDescription.setAttribute("class", "cardDescription ");
    myDescription.innerHTML = array[i].description;
    myCardDiv.appendChild(myDescription);
}
function createCardFooter(myCardDiv) {
    let myFooter = document.createElement("div");
    myFooter.setAttribute("class", "cardFooter");
    myCardDiv.appendChild(myFooter);
    return myFooter;
}

function createStar(i, myFooter) {
    let myStar = document.createElement("div");
    myStar.setAttribute("class", "glyphicon glyphicon-star-empty star");
    myStar.setAttribute("onclick", "changeClass(" + i + ")");
    myStar.setAttribute("id", i);
    myFooter.appendChild(myStar);
}

function createDeleteButton(i, myFooter) {
    let deleteButton = document.createElement("button");
    deleteButton.setAttribute("class", "btn btn-danger deleteButton");
    deleteButton.setAttribute("id", "deleteBut".concat(i));
    deleteButton.innerHTML = 'Usuń';
    deleteButton.setAttribute("onclick", "deleteCard(" + i + ")");
    myFooter.appendChild(deleteButton);
}
function createSingleCard(i) {
    let myCardDiv = createCardDiv(i);
    createCardTitle(i, myCardDiv);
    createCardDescription(i, myCardDiv);
    let myFooter = createCardFooter(myCardDiv);
    createStar(i, myFooter);
    createDeleteButton(i, myFooter);
}

function createCards() {
    for (let i = 0; i < array.length; i++) {
        createSingleCard(i);
    }
}
document.getElementById("addCardButton").addEventListener("click", addCard);
function addCard() {
    let formTitle = document.getElementById("title");
    let fromDes = document.getElementById("recipeDescription");
    let addCardId = array.length;

    addCardContent(formTitle.value, fromDes.value);
    createSingleCard(addCardId);
    formTitle.value = '';
    fromDes.value = '';
}
function addCardContent(title, description) {
    array.push({
        uniqueNum: array.length + 1,
        title: title,
        description: description
    });
}
function deleteCard(cardId) {
    let deleteAction = document.getElementById("mainCardId".concat(cardId))
    return document.getElementById("container").removeChild(deleteAction);
}
function changeClass(starId) {
    let star = document.getElementById(starId);
    if (star.classList.contains("glyphicon-star")) {
        star.className = "glyphicon glyphicon-star-empty star";
    }
    else {
        star.className = "glyphicon glyphicon-star star";
    }
}
