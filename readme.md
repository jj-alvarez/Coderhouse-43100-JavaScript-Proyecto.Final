# LA BIBLIOTECA ESCONDIDA

Hola! A continuation detallo lo realizado en el simulador de sitio web creado en el curso de JavaScript, comision 43100 de **CODERHOUSE** 

El sitio web se llama "LA BIBLIOTECA ESCONDIDA" y corresponde a un e-commerce de venta de libros.


# 10.julio.2023
## Generalidades

* Se genero un sitio simple por medio de HTML, CSS y Bootstrap. Se busco mantener un codigo de colores para todo el sitio.

* La logica esta escrita dentro del archivo script/app.js y esta ordenado de la siguiente forma: 
	1) Variables y Constantes
	2) Funciones
	3) Eventos

* El stock de libros estaba inicialmente manejado por medio de un array, llamado "libros.js".
* Las variables estan llamadas en su mayoria por medio de Query Selectors.
* Los productos se renderizan por medio de una funcion que buscaba en el array "libros.js" que luego se reemplazo por el archivo libros.json para volcar lo visto en las clases 15/16 y After04 en relacion a asincronias.
* Se incluyeron metodos de modificacion y transformacion del array, para realizar filtrados (por precio y/o titulo) del stock de libros.
* Se incluyeron funciones para limpiar los filtros, vaciar el carrito y/o comprar.
* Se agregaron "alerts" al evento de "finalizarCompra()". El alert se hizo por medio de la libreria "Sweet Alert".
* Storage: el simulador esta programado de manera tal que deje guardado en el Local Storage el ultimo carrito generado. Al refrescar la pagina, el carrito se visualizara junto con su monto a pagar.