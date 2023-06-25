// VARIABLES GENERALES

let misCards = document.querySelector("#misCards");
let botonesCompra = document.querySelector("#btnCompra");
let btnFiltrarPrecio = document.querySelector("#btnFiltrarPrecio");
let inputMin = document.querySelector("#inputMin");
let inputMax = document.querySelector("#inputMax");
let btnFiltrarTitulo = document.querySelector("#btnFiltrarTitulo");
let inputTitulo = document.querySelector("#inputTitulo");
let btnLimpiar = document.querySelector("#btnLimpiar");
const carro = [];


console.table(libros);


// FUNCIONES

// Renderizar productos, visto en after02
function renderizarProductos(listaProds){
    misCards.innerHTML="";
    // primero en blanco para "resetear" cada vez que renderizo y no generar duplicados
    for(const prod of listaProds){
        misCards.innerHTML+=`  
            <div class="card text-center col-sm-12 col-md-5 col-lg-2 m-3 p-3" style="background-color: rgba(254,189,46,255)"> 
                <img src=${prod.foto} class="card-img-top" alt="tapa">
                <div class="card-body">
                    <h5 class="card-title">${prod.titulo}</h5>
                    <p class="card-text">$ ${prod.precio}</p>
                    <button id="btnCompra" class="btn btn-dark">Comprar</button>
                </div>
            </div>
        `;
    }
}

renderizarProductos(libros);

// Filtrar por precio, visto en after 03
function filtrarPorPrecio(precioMin, precioMax){
    const filtradosPorPrecio = libros.filter((libro) => (libro.precio >= precioMin) && (libro.precio <= precioMax));
    return filtradosPorPrecio;
}

// Filtrar por titulo
function filtrarPorTitulo(titulo){
    const filtradosPorTitulo = libros.filter((libro) => libro.titulo.toLowerCase().includes(titulo.toLowerCase()));
    return filtradosPorTitulo;
}

// Limpiar filtros
function limpiar(){
    location.reload();
}




// EVENTOS

// Filtrar por precio
btnFiltrarPrecio.onclick = () => {
    if((inputMin.value != "")&&(inputMax.value !="")&&(inputMin.value < inputMax.value)){
        let listaFiltradosPrecio = filtrarPorPrecio(inputMin.value, inputMax.value);
        console.table(listaFiltradosPrecio);
        renderizarProductos(listaFiltradosPrecio);
    }
}

// Limpiar filtros
btnLimpiar.onclick = () => {
    limpiar();
}


// Filtrar por titulo
btnFiltrarTitulo.onclick = () => {
    if(inputTitulo.value != ""){
        let listaFiltradosTitulo = filtrarPorTitulo(inputTitulo.value);
        console.table(listaFiltradosTitulo);
        renderizarProductos(listaFiltradosTitulo);
    }
}



// --------------------------------------------------------------------------------------------------------------------// 
// info
// card - <div class="card col-sm-2 m-3 p-3" style="background-color: rgba(254,189,46,255)"> 