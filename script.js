let array = [{
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
}];

let arraylength = array.length;

function createSingleCard(i) {
    let myCardDiv = document.createElement("div");
    myCardDiv.setAttribute("class", "card");

    document.getElementById("container").appendChild(myCardDiv);

    let myTitle = document.createElement("div");
    myTitle.setAttribute("class", "cardTitle");
    myTitle.innerHTML = array[i].title;
    myCardDiv.appendChild(myTitle);

    let myDescription = document.createElement("div");
    myDescription.setAttribute("class", "cardDescription ");
    myDescription.innerHTML =array[i].description;
    myCardDiv.appendChild(myDescription);


    let myStar = document.createElement("div");
    myStar.setAttribute("class", "glyphicon glyphicon-star-empty star");
    myStar.setAttribute("onclick", "changeClass(" + i + ")");
    myStar.setAttribute("id", i);
    myCardDiv.appendChild(myStar);


}
function createCards() {
    for (let i = 0; i < arraylength; i++) {
        createSingleCard(i);
    }
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
