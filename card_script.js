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

function createCardDiv() {
    let myCardDiv = document.createElement("div");
    myCardDiv.setAttribute("class", "card");
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

function createStar(i, myCardDiv) {
    let myStar = document.createElement("div");
    myStar.setAttribute("class", "glyphicon glyphicon-star-empty star");
    myStar.setAttribute("onclick", "changeClass(" + i + ")");
    myStar.setAttribute("id", i);
    myCardDiv.appendChild(myStar);
}

function createSingleCard(i) {
    let myCardDiv = createCardDiv();
    createCardTitle(i, myCardDiv);
    createCardDescription(i, myCardDiv);
    createStar(i, myCardDiv);
}

function createCards() {
    for (let i = 0; i < array.length - 1; i++) {
        createSingleCard(i);
    }
}

function createNewCard(i) {
    let myCardDiv = createCardDiv();
    createCardTitle(i, myCardDiv);
    createCardDescription(i, myCardDiv);
    createStar(i, myCardDiv);
}

document.getElementById("addCardButton").addEventListener("click", addCard);
function addCard() {
    console.log(document.getElementById("title"));
    let formTitle = document.getElementById("title");
    let fromDes = document.getElementById("recipeDescription");
    let addCardId = array.length;

    addCardContent(formTitle.value, fromDes.value);
    createNewCard(addCardId)
    formTitle.value = '';
    fromDes.value = '';

    console.log(formTitle);
    console.log(fromDes);

}
function addCardContent(a, b) {
    array.push({
        uniqueNum: array.length + 1,
        title: a,
        description: b
    })
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
