// variables

let misCards = document.querySelector("#misCards");


// funcion para renderizar productos, visto en after02

function renderizarProductos(listaProds){
    for(const prod of listaProds){
        misCards.innerHTML+=`  
            <div class="card tex-center col-sm-2 m-3 p-3" style="background-color: rgba(254,189,46,255)"> 
                <img src=${prod.foto} class="card-img-top" alt="tapa">
                <div class="card-body">
                    <h5 class="card-title">${prod.titulo}</h5>
                    <p class="card-text">$ ${prod.precio}</p>
                    <button class="btn btn-primary">Comprar</button>
                </div>
            </div>
        `;
    }
}

renderizarProductos(libros);



// backup
// card - <div class="card col-sm-2 m-3 p-3" style="background-color: rgba(254,189,46,255)"> 
// https://www.youtube.com/watch?v=PwEvMY7nnY8