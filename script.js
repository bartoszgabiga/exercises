function changeClass() {
    let star = document.getElementById("star");

    if (star.classList.contains("glyphicon-star")) {
        star.className = "glyphicon glyphicon-star-empty";
    }
    else {
        star.className = "glyphicon glyphicon-star";
    }
}
    

