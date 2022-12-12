let baraja = document.querySelector(".cards");

function addTitulo(){
    let titulo = document.querySelector(".titulo").value;
    return titulo;
}
function addUrl(){
    let url = document.querySelector(".url").value;
    return url;
}
function addTexto(){
    let texto = document.querySelector(".texto").value;
    return texto;
}
function crearCarta(){
    let carta = document.createElement("div");
    carta.classList.add("card");
    carta.addEventListener('click',armar);

    let titulo = document.createElement("h5");
    titulo.innerHTML = addTitulo();

    let div = document.createElement("div");
    div.classList.add("card-body");

    let imagen = document.createElement("img");
    imagen.setAttribute("src",addUrl());

    let texto = document.createElement("p");
    texto.innerHTML = addTexto();

    div.appendChild(titulo);
    div.appendChild(texto);
    carta.appendChild(imagen);
    carta.appendChild(div);

    return carta;
}
function validar(value){
    let chequeo = false
    if(value !== ""){
        chequeo = true;
    }
    return chequeo;
}
function armar(){
    document.querySelector(".card")
}
addEventListener('click',() => {
    if(validar(addTitulo()) && validar(addTexto()) && validar(addUrl())){
        baraja.appendChild(crearCarta())} 
});
