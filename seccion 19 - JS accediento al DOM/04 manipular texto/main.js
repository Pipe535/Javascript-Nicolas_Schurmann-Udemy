// Esperar a que todo el contenido de la página cargue, y después ejecutar el javascript
window.onload = () => {

    // Acceder a la etiqueta <p> mediante su id
    const parrafo = document.getElementById('text');

    // Cambiar texto de la etiqueta <p>
    parrafo.innerText = 'Texto actualizado';
    
}
