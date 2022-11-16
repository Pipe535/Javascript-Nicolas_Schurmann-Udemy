// Esperar a que todo el contenido de la página cargue, y después ejecutar el javascript
window.onload = () => {

    // Acceder a la etiqueta <p> mediante su id
    const parrafo = document.getElementById('text');

    // Mostrar la etiqueta <p> en consola
    console.log(parrafo);

    // Obtener el texto que contiene la etiqueta de <p>
    console.log(parrafo.innerHTML)
    
}
