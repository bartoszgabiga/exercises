

let array = [{id:1}, {id: 2}, {id: 3}, {id: 4}, {id: 5}, {id: 6}, {id: 7}, {id: 8}];
let arraylength = array.length;

function createSingleCard(i) {
    let myCardDiv = document.createElement("div");
    myCardDiv.setAttribute("class", "card");

    document.getElementById("container").appendChild(myCardDiv);

    let myTitle = document.createElement("div");
    myTitle.setAttribute("class", "cardTitle");
    myTitle.innerHTML = "Title";
    myCardDiv.appendChild(myTitle);

    let myDescription = document.createElement("div");
    myDescription.setAttribute("class", "cardDescription ");
    myDescription.innerHTML = `  Bacon ipsum dolor amet frankfurter cupim ribeye salami rump buffalo alcatra kevin, 
    t-bone tail pancetta flank. Andouille short loin cupim, sirloin picanha porchetta biltong.`;
    myCardDiv.appendChild(myDescription);


    let myStar = document.createElement("div");
    myStar.setAttribute("class", "glyphicon glyphicon-star-empty star");
    myStar.setAttribute("onclick", "changeClass("+i+")");
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
