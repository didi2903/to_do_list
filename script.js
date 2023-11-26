const gumb = document.getElementById("gumb");
gumb.addEventListener("click", noviZadatak);

// Funkcija koja kreira listu user inputa
function noviZadatak() {
    const ul = document.getElementById("ul");
    let newLi = document.createElement("li");
    let zadatak = document.getElementById("input").value;
    newLi.innerHTML = zadatak;
    ul.appendChild(newLi);
    let x = document.createElement("span");
    x.innerHTML = "\u00d7";
    newLi.appendChild(x);

    //Funkcija koja briše element
    x.addEventListener("click", brisi);
    function brisi() {
        newLi.remove();
}
}
// Funkcija koja prazni input nakon clicka
gumb.addEventListener("click", brisiInput);
function brisiInput() {
    let input = document.getElementById("input");
    input.value = "";
}

let tekst = document.getElementById("naslov");
tekst.addEventListener("click", prekrizi);
function prekrizi() {
    tekst.classList.toggle("obavljeno");
}