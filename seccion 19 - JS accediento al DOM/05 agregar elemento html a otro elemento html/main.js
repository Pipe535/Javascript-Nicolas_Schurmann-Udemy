// Esperar a que todo el contenido de la página cargue, y después ejecutar el javascript
window.onload = () => {

    // Acceder a la etiqueta <p> mediante su id
    const parrafo = document.getElementById('text');

    // Colocar más html dentro de etiqueta <p>
    parrafo.innerHTML = '<li>elemento 1</li><li>elemento 2</li>';
    
}
