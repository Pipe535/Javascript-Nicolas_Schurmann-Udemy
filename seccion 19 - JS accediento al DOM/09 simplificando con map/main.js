
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

        // Mostrar en consola el valor ingresaro en el texto
        // console.log(todoText);

        // Agregar los elementos en el arreglo de la linea 3
        todosArr.push(todoText);

        // Capturar referencia de etiqueta con id='todo-list'
        const todoList = document.getElementById('todo-list');
        
        // SIMPLIFICAR EL AGREGADO DE ELEMENTOS CON .map
        // .map(lo de dentro se ejecutará tantos elementos tenga el arreglo)
        const todosTemplate = todosArr.map(t => '<li>' + t + '</li>');

        // Agregar los elementos en la variable arreglo 
        // .join -> agregar todos los elementos del arreglo y juntarlos con un string vacio
        todoList.innerHTML = todosTemplate.join('');
        console.log(todosTemplate);

    }

}
