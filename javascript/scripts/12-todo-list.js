const todoList = [{
    name: '',
    dueDate: '',
}, {
    name: '',
    dueDate: '',
}];

renderTodoList();

function renderTodoList() {
    let todoListHTML = '';
    todoList.forEach((todoObject, index) => {
        const { name, dueDate } = todoObject; // Object destructuring does the same thing
        const html = `
            <div>${name}</div> 
            <div>${dueDate}</div>                
            <button class="delete-todo-button js-delete-todo-button">Delete</button>
            `;
        todoListHTML += html;
    }); /*
    for (let i = 0; i < todoList.length; i++) {
        let todoObject = todoList[i]; // get the value/element
        // const name = todoObject.name;
        // const dueDate = todoObject.dueDate;
        const { name, dueDate } = todoObject; // Object destructuring does the same thing
        const html = `
            <div>${name}</div> 
            <div>${dueDate}</div>                
            <button onclick="
                todoList.splice(${i}, 1);
                renderTodoList();
            " class="delete-todo-button">Delete</button>
            `;
        todoListHTML += html; // to combine all html code
    } */
    // console.log(todoListHTML);
    document.querySelector('.js-todo-list').innerHTML = todoListHTML;

    document.querySelectorAll('.js-delete-todo-button').forEach((deleteButton, index) => {
        deleteButton.addEventListener('click', () => {
            todoList.splice(index, 1);
            renderTodoList();
        });
    });
}

document.querySelector('.js-todo-button').addEventListener('click', () => {
    addTodo();
});

function addTodo() {
    const inputElement = document.querySelector('.js-name-input'); // User's input in the place holder will get accessed here
    const name = inputElement.value; // Accessing the user's input
    
    const dateInputElement = document.querySelector('.js-due-date-input');
    const dueDate = dateInputElement.value;
    
    todoList.push({
        // name: name, 
        // dueDate: dueDate,
        name, // shorthand property: if the key & value have the same name you can just write it out once
        dueDate,
    });
    // console.log(todoList);

    inputElement.value = ''; // Reset the input in the text box

    renderTodoList();
}