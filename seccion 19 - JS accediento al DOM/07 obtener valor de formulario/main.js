// Esperar a que todo el contenido de la página cargue, y después ejecutar el javascript
window.onload = () => {

    // Capturar el evento de la etiqueta <form>
    const form = document.getElementById('todo-form');

    // Funcion para buscar, tomar , agregar el texto en la eqiueta <input text>
    form.onsubmit = (e) => {

        // Hacer que la página no se recargue al apretar en boton enviar
        e.preventDefault();
        
        // Capturar referencia de etiqueta con id='todo'
        const todo = document.getElementById('todo');

        // Obtener el texto de la etiqueta con id='todo'
        const todoText = todo.value;

        // Volver el input de texto a vacio
        todo.value = '';

        // Mostrar en consola el valor ingresaro en el texto
        console.log(todoText);

    }

}
