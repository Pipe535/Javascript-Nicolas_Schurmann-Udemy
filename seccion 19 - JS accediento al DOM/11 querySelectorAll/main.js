
// Arreglo para guardar todos los elementos agregados en el campo de texto
const todosArr = [];

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

        todosArr.push(todoText);
        const todoList = document.getElementById('todo-list');    
        const todosTemplate = todosArr.map(t => '<li>' + t + '</li>');
        todoList.innerHTML = todosTemplate.join('');
        console.log(todosTemplate);

        // Seleccionar todos los elementos del listado dentro de la etiqueta con id='todo-list'
        const elementos = document.querySelectorAll('#todo-list li');
        elementos.forEach(x => console.log(x));
    }

}
