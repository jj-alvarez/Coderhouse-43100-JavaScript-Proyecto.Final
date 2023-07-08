// VARIABLES GENERALES ------------------------------------------------------------------------------------------------>

let misCards = document.querySelector("#misCards");
let botones = document.getElementsByClassName("btn btn-dark btnCompra");
const btnFiltrarPrecio = document.querySelector("#btnFiltrarPrecio");
let inputMin = document.querySelector("#inputMin");
let inputMax = document.querySelector("#inputMax");
const btnFiltrarTitulo = document.querySelector("#btnFiltrarTitulo");
let inputTitulo = document.querySelector("#inputTitulo");
const btnLimpiar = document.querySelector("#btnLimpiar");
const btnVaciar = document.querySelector("#btnVaciar");
const btnFinalizarCompra = document.querySelector("#btnFinalizarCompra");
let tablaCarrito = document.querySelector("#tablaCarrito");
let carrito = JSON.parse(localStorage.getItem('carrito')) || [];
carrito.length = 0;

console.table(libros);


// FUNCIONES ---------------------------------------------------------------------------------------------------------->

// Renderizar productos, visto en after02
function renderizarProductos(listaLibros){
    misCards.innerHTML="";
    // primero en blanco para "resetear" cada vez que renderizo y no generar duplicados
    for(const libro of listaLibros){
        misCards.innerHTML+=`  
            <div class="card text-center col-sm-12 col-md-5 col-lg-2 m-3 p-3" style="background-color: rgba(254,189,46,255)"> 
                <img src=${libro.foto} class="card-img-top" alt="tapa">
                <div class="card-body">
                    <h5 class="card-title">${libro.titulo}</h5>
                    <p class="card-text">$ ${libro.precio}</p>
                    <button id=${libro.id} class="btn btn-dark btnCompra">Comprar</button>
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
    renderizarProductos(libros);
    actualizarBotones();
}

// Vaciar Carrito
function vaciar(){
    location.reload();
    localStorage.clear();
}


// Finalizar Compra
function finalizarCompra(){
    if (carrito.length === 0){
        Swal.fire({
            icon: 'error',
            title: 'Se ha producido un error.',
            text: 'Por favor, seleccione al menos un libro para continuar.',
            backdrop: true,
            confirmButtonColor: '#1C1C1C',
            confirmButtonText: 'Volver'
        })
    }else{
        Swal.fire({
            icon: 'success',
            title: 'Compra realizada.',
            text: 'Muchas gracias!',
            backdrop: true,
            showConfirmButton: false,
        })
        setTimeout(() => {
            vaciar();
        }, 2000);
    }   
}

// Agregar al carrito
function agregarCompra(libro){
    carrito.push(libro);
    console.table(carrito);
    tablaCarrito.innerHTML += `
        <tr>
            <td>${libro.titulo}</td>
            <td>${libro.autor}</td>
            <td>${libro.universo}</td>
            <td>$ ${libro.precio}</td>
            <td><button id=${libro.id} class="btnEliminar">X</button><td>
        </tr>
    `;
    
    let totalPagar = carrito.reduce((ac, libro) => ac + libro.precio,0);
    console.table(totalPagar);
    document.querySelector("#totalPagar").innerText = `Total a pagar $:${totalPagar}`;
    // local storage, visto en el after 03
    localStorage.setItem('carrito',JSON.stringify(carrito));
}

// Recargar botones
function actualizarBotones(){
    botones = document.getElementsByClassName("btn btn-dark btnCompra");
    
    for(const boton of botones){
        boton.addEventListener("click", () => {
            const librosCarrito = libros.find((libro) => libro.id == boton.id);
            console.table(librosCarrito);
            agregarCompra(librosCarrito);
        })
    }
    
}
actualizarBotones();


// EVENTOS --------------------------------------------------------------------------------------------------->

// Filtrar por precio
btnFiltrarPrecio.onclick = () => {
    if((inputMin.value != "")&&(inputMax.value !="")&&(inputMin.value < inputMax.value)){
        let listaFiltradosPrecio = filtrarPorPrecio(inputMin.value, inputMax.value);
        console.table(listaFiltradosPrecio);
        renderizarProductos(listaFiltradosPrecio);
        actualizarBotones();
    }
}


// Filtrar por titulo
btnFiltrarTitulo.onclick = () => {
    if(inputTitulo.value != ""){
        let listaFiltradosTitulo = filtrarPorTitulo(inputTitulo.value);
        console.table(listaFiltradosTitulo);
        renderizarProductos(listaFiltradosTitulo);
        actualizarBotones();
    }
}


// Limpiar filtros
btnLimpiar.onclick = () => {
    limpiar();
}

// Vaciar Carrito
btnVaciar.onclick = () => {
    vaciar();
}

// finalizar Compra
btnFinalizarCompra.onclick = () =>{
    finalizarCompra();
}

// INFO -----------------------------------------------------------------------------------------------------------> 

// card - <div class="card col-sm-2 m-3 p-3" style="background-color: rgba(254,189,46,255)"> 
// sweet alert customizacion - https://www.youtube.com/watch?v=NDASIexWyhU